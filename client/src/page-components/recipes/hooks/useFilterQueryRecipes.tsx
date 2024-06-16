import { FormFilterRecipesType } from "@/page-components/recipes/types";
import qs from "qs";

const useFilterQueryRecipes = () => {
  const handleSave = (formData: FormFilterRecipesType) => {
    const { cuisine, diet, difficulty, search } = formData;
    const queryBuilder = qs.stringify({
      q: !!search ? search : undefined,
      cuisineId: !!cuisine ? cuisine : undefined,
      dietId: !!diet ? diet : undefined,
      difficultyId: !!difficulty ? difficulty : undefined,
    });

    return queryBuilder;
  };

  return { handleSave };
};

export default useFilterQueryRecipes;
