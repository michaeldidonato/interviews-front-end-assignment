import { useCallback, useEffect, useState } from "react";
import { FormFilterRecipesType, Recipe } from "../types";
import useFilterQueryRecipes from "./useFilterQueryRecipes";
import { apiClient } from "@/lib/api/apiClient";

const useGetFilterRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const limit = 10;

  const { handleSave } = useFilterQueryRecipes();

  const onSave = useCallback(
    (formData: FormFilterRecipesType) => {
      const queryBuilder = handleSave(formData);
      setQuery(queryBuilder);
    },
    [handleSave]
  );

  const onLoadMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const onGoBack = useCallback(() => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.getRecipes(query, limit, page);
        setRecipes(response.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [query, page]);

  return {
    loading,
    recipes,
    limit,
    onSave,
    onLoadMore,
    onGoBack,
  };
};

export default useGetFilterRecipes;
