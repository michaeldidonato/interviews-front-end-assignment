import { config } from "./config";

class ApiClient {
  constructor(private host: string) {}

  async getRecipes(query: string) {
    const response = await fetch(`${this.host}/recipes?${query}`, {
      method: "GET",
    });

    const data = await response.json();

    const error = response.status !== 200 ? data.error : null;

    return {
      data,
      error,
    };
  }

  async getCuisines() {
    const response = await fetch(`${this.host}/cuisines`, {
      method: "GET",
    });

    const data = await response.json();

    const error = response.status !== 200 ? data.error : null;

    return {
      dataCuisines: data,
      error,
    };
  }

  async getDiets() {
    const response = await fetch(`${this.host}/diets`, {
      method: "GET",
    });

    const data = await response.json();

    const error = response.status !== 200 ? data.error : null;

    return {
      dataDiets: data,
      error,
    };
  }

  async getDifficulties() {
    const response = await fetch(`${this.host}/difficulties`, {
      method: "GET",
    });

    const data = await response.json();

    const error = response.status !== 200 ? data.error : null;

    return {
      dataDifficulties: data,
      error,
    };
  }
}

export const apiClient = new ApiClient(config.host ?? "");
