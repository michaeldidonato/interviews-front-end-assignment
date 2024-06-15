import { apiClient } from "@/lib/api/apiClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await Promise.all([
      apiClient.getDiets(),
      apiClient.getCuisines(),
      apiClient.getDifficulties(),
    ]);

    const data = {
      diets: response[0].dataDiets,
      cuisines: response[1].dataCuisines,
      difficulties: response[2].dataDifficulties,
    };

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch" });
  }
}
