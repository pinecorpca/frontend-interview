import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  try {
    const file = await fs.readFile(path.join(process.cwd(), "public", "locations.txt"), "utf8");
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json(`Error reading file: ${error}`);
  } 
}