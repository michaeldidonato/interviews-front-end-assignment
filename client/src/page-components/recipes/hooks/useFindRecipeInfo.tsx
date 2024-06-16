import { useRecipeInfosContext } from "@/contexts/recipeinfos-context";
import { useMemo } from "react";

type FindRecipeInfoProps = {
  cuisineId: string;
  difficultyId: string;
  dietId: string;
};

const useFindRecipeInfo = ({
  cuisineId,
  dietId,
  difficultyId,
}: FindRecipeInfoProps) => {
  const { recipeInfos } = useRecipeInfosContext();

  const detailRecipe = useMemo(() => {
    const cuisineName = recipeInfos.cuisines?.find(
      (cuisine) => cuisine.id === cuisineId
    )?.name;

    const dietName = recipeInfos.diets?.find(
      (diet) => diet.id === dietId
    )?.name;

    const difficultyName = recipeInfos.difficulties?.find(
      (difficulty) => difficulty.id === difficultyId
    )?.name;

    return {
      cuisineName: cuisineName ?? "",
      dietName: dietName ?? "",
      difficultyName: difficultyName ?? "",
    };
  }, [cuisineId, dietId, difficultyId, recipeInfos]);

  return { detailRecipe };
};

export default useFindRecipeInfo;
