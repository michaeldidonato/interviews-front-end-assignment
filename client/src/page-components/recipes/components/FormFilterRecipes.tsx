import { Info, useRecipeInfosContext } from "@/contexts/recipeinfos-context";
import { Select } from "@/page-components/shared/input/Select";
import { Text } from "@/page-components/shared/input/Text";
import { Box, Button, Stack } from "@mui/material";
import { useCallback } from "react";
import { Control, FieldValues } from "react-hook-form";

type FormFilterRecipesProps = {
  control: Control<FieldValues, any>;
  handleClearForm: () => void;
};

const FormFilterRecipes = ({
  control,
  handleClearForm,
}: FormFilterRecipesProps) => {
  const { recipeInfos } = useRecipeInfosContext();
  const getOptions = useCallback((infos?: Info[]) => {
    return (
      infos?.map((item) => ({
        title: item.name,
        value: item.id,
      })) ?? []
    );
  }, []);

  return (
    <Stack sx={{ mt: 4 }} alignItems={"center"} spacing={2}>
      <Text
        control={control}
        placeholder="Cerca per nome"
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

      <Button
        type="submit"
        color="secondary"
        variant="outlined"
        size="small"
        sx={{ width: "90%" }}
      >
        Cerca
      </Button>

      <Button
        onClick={handleClearForm}
        color="error"
        variant="outlined"
        size="small"
        sx={{ width: "90%" }}
      >
        Annulla
      </Button>
    </Stack>
  );
};

export default FormFilterRecipes;
