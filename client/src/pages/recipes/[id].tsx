import { apiClient } from "@/lib/api/apiClient";
import SingleRecipe from "@/page-components/recipes/components/SingleRecipe";
import useSingleRecipeCommentsFetchAndSave from "@/page-components/recipes/hooks/useSingleRecipeCommentFetchAndSave";
import { Comment, Recipe } from "@/page-components/recipes/types";
import { Layout } from "@/page-components/shared/Layout";
import PageContainer from "@/page-components/shared/PageContainer";
import useSpinning from "@/page-components/shared/hooks/useSpinning";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement, useCallback, useEffect, useState } from "react";

type ViewRecipeProps = {
  recipe?: Recipe;
};

const ViewRecipe: NextPage = ({ recipe }: ViewRecipeProps) => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, comments, fetchDataComments, handleSaveComment } =
    useSingleRecipeCommentsFetchAndSave({ id: id as string });

  useEffect(() => {
    fetchDataComments();
  }, [fetchDataComments]);

  const handleBack = useCallback(() => {
    router.push("/recipes");
  }, [router]);

  useSpinning([loading]);

  return (
    <PageContainer title={recipe?.name} onBack={handleBack}>
      <SingleRecipe
        alt={recipe?.name}
        srcImage={recipe?.image}
        ingredients={recipe?.ingredients}
        description={recipe?.instructions}
        comments={comments}
        handleSave={handleSaveComment}
      />
    </PageContainer>
  );
};

export default ViewRecipe;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  try {
    const response = await apiClient.getSingleRecipe(id as string);

    return {
      props: {
        recipe: response.data,
      },
    };
  } catch (err) {
    return {
      props: {
        error: err,
      },
    };
  }
};

ViewRecipe.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
