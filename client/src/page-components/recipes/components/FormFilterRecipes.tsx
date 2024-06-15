import { Info, useRecipeInfosContext } from "@/contexts/recipeinfos-context";
import { Select } from "@/page-components/shared/input/Select";
import { Text } from "@/page-components/shared/input/Text";
import { Box, Stack } from "@mui/material";
import { useCallback } from "react";
import { Control, FieldValues } from "react-hook-form";

type FormFilterRecipesProps = {
  control: Control<FieldValues, any>;
};

const FormFilterRecipes = ({ control }: FormFilterRecipesProps) => {
  const { recipeInfos } = useRecipeInfosContext();
  const getOptions = useCallback((array?: Info[]) => {
    return (
      array?.map((item) => ({
        title: item.name,
        value: item.id,
      })) ?? []
    );
  }, []);

  return (
    <Stack sx={{ mt: 4 }} alignItems={"center"} spacing={4}>
      <Text
        control={control}
        name="search"
        size="small"
        sx={{ width: "90%" }}
      />

      <Select
        control={control}
        placeholder="Diet"
        name="diet"
        options={getOptions(recipeInfos.diets)}
        sx={{ width: "90%" }}
      />

      <Select
        control={control}
        placeholder="Cuisine"
        name="cuisine"
        options={getOptions(recipeInfos.cuisines)}
        sx={{ width: "90%" }}
      />

      <Select
        control={control}
        placeholder="Difficulty"
        name="difficulty"
        options={getOptions(recipeInfos.difficulties)}
        sx={{ width: "90%" }}
      />
    </Stack>
  );
};

export default FormFilterRecipes;
