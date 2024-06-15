import { Recipe } from "@/page-components/recipes/types";
import { config } from "./config";
import srcFile from "../../../../server/uploads/Beef-Tacos.jpg";

class ApiClient {
  constructor(private host: string) {}

  async getRecipes() {
    const response = await fetch(`${this.host}/recipes`, {
      method: "GET",
    });

    const data = await response.json();

    const error = response.status !== 200 ? data.error : null;

    return {
      data,
      error,
    };
  }
}

export const apiClient = new ApiClient(config.host ?? "");
