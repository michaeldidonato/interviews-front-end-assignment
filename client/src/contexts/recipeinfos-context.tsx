import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type Info = {
  id: string;
  name: string;
};

export type RecipeInfos = {
  diets?: Info[];
  cuisines?: Info[];
  difficulties?: Info[];
};

export interface RecipeInfoContextValue {
  recipeInfos: RecipeInfos;
  setRecipeInfos: (update: RecipeInfos) => void;
}

interface RecipeInfosProviderProps {
  children?: ReactNode;
}

export const RecipeInfosContext = createContext<RecipeInfoContextValue>({
  recipeInfos: {},
  setRecipeInfos: () => {},
});

export const RecipeInfosProvider: FC<RecipeInfosProviderProps> = (props) => {
  const { children } = props;
  const [recipeInfos, setRecipeInfos] = useState<RecipeInfos>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/recipe-infos");
        const responseData = await response.json();

        setRecipeInfos({
          diets: responseData.diets,
          cuisines: responseData.cuisines,
          difficulties: responseData.difficulties,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <RecipeInfosContext.Provider value={{ recipeInfos, setRecipeInfos }}>
      {children}
    </RecipeInfosContext.Provider>
  );
};

export const RecipeInfosConsumer = RecipeInfosContext.Consumer;
export const useRecipeInfosContext = () => useContext(RecipeInfosContext);
