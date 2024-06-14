import RecipesComponent from "@/page-components/recipes/RecipesComponent";
import { Layout } from "@/page-components/shared/Layout";
import PageContainer from "@/page-components/shared/PageContainer";
import { NextPage } from "next";
import { ReactElement } from "react";

const Recipes: NextPage = () => {
  return (
    <PageContainer>
      <RecipesComponent />
    </PageContainer>
  );
};

export default Recipes;

Recipes.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
