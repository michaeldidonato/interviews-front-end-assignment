export type Recipe = {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  cuisineId: string;
  dietId: string;
  difficultyId: string;
  image: string;
};

export type Comment = {
  id: string;
  recipeId: string;
  comment: string;
  rating: number;
  date: Date;
};

export type FormFilterRecipesType = {
  search?: string;
  diet?: string;
  cuisine?: string;
  difficulty?: string;
};
