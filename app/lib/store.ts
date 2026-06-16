import { promises as fs } from "fs";
import path from "path";

// Lightweight file-backed store. Good enough for a demo backend without
// pulling in a database / native deps. Each "collection" is one JSON file.
const DATA_DIR = path.join(process.cwd(), "data");

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

function fileFor(collection: string) {
  return path.join(DATA_DIR, `${collection}.json`);
}

export async function readAll<T>(collection: string): Promise<T[]> {
  await ensureDir();
  try {
    const raw = await fs.readFile(fileFor(collection), "utf8");
    return JSON.parse(raw) as T[];
  } catch {
    return [];
  }
}

export async function append<T extends Record<string, unknown>>(
  collection: string,
  record: T
): Promise<T & { id: string; createdAt: string }> {
  await ensureDir();
  const rows = await readAll<T & { id: string; createdAt: string }>(collection);
  const entry = {
    ...record,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  rows.push(entry);
  await fs.writeFile(fileFor(collection), JSON.stringify(rows, null, 2), "utf8");
  return entry;
}

export async function existsWhere<T extends Record<string, unknown>>(
  collection: string,
  predicate: (row: T) => boolean
): Promise<boolean> {
  const rows = await readAll<T>(collection);
  return rows.some(predicate);
}

export function isEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
