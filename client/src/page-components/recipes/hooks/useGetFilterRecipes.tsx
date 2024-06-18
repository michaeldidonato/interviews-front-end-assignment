import { useCallback, useEffect, useState } from "react";
import { FormFilterRecipesType, Recipe } from "../types";
import useFilterQueryRecipes from "./useFilterQueryRecipes";
import { apiClient } from "@/lib/api/apiClient";

const useGetFilterRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const { handleSave } = useFilterQueryRecipes();

  const onSave = useCallback(
    (formData: FormFilterRecipesType) => {
      const queryBuilder = handleSave(formData);
      setQuery(queryBuilder);
    },
    [handleSave]
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.getRecipes(query);
        setRecipes(response.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [query]);
  return {
    loading,
    recipes,
    onSave,
  };
};

export default useGetFilterRecipes;
