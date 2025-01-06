import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const file = await fs.readFile(path.join(process.cwd(), "public", "locations.txt"), "utf8");
    return Response.json(file, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};
