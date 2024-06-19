import { config } from "./config";

class ApiClient {
  constructor(private host: string) {}

  async getRecipes(query: string, limit: number, page: number) {
    const response = await fetch(
      `${this.host}/recipes?_limit=${limit}&_page=${page}&${query}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    const error = response.status !== 200 ? data.error : null;

    return {
      data,
      error,
    };
  }

  async getSingleRecipe(id: string) {
    const response = await fetch(`${this.host}/recipes/${id}?_expand`, {
      method: "GET",
    });

    const data = await response.json();

    const error = response.status !== 200 ? data.error : null;

    return {
      data,
      error,
    };
  }

  async getRecipeComments(id: string) {
    const response = await fetch(`${this.host}/recipes/${id}/comments`, {
      method: "GET",
    });

    const data = await response.json();

    const error = response.status !== 200 ? data.error : null;

    return {
      data,
      error,
    };
  }

  async postRecipeComment(props: {
    id: string;
    comment: string;
    rating: number;
  }) {
    const { id, comment, rating } = props;
    const response = await fetch(`${this.host}/recipes/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
        rating,
        date: new Date(),
      }),
    });

    return response.ok;
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
