import { NextApiRequest, NextApiResponse } from "next";

const API_URI = 'http://www.7timer.info/bin/api.pl'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    res.status(400).json({ error: 'Missing lat or lon' });
  }

  try {
    const response = await fetch(`${API_URI}?lat=${lat}&lon=${lon}&product=civil&output=json`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
}