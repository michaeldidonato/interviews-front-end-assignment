import { apiClient } from "@/lib/api/apiClient";
import SingleRecipe from "@/page-components/recipes/components/SingleRecipe";
import { Recipe } from "@/page-components/recipes/types";
import { Layout } from "@/page-components/shared/Layout";
import PageContainer from "@/page-components/shared/PageContainer";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement, useCallback, useEffect, useState } from "react";

type ViewRecipeProps = {
  recipe?: Recipe;
};

const ViewRecipe: NextPage = ({ recipe }: ViewRecipeProps) => {
  const router = useRouter();
  const { id } = router.query;
  const [comments, setComments] = useState<any[]>([]);

  console.log({ recipe, comments });

  useEffect(() => {
    const fetchDataComments = async () => {
      try {
        const response = await apiClient.getRecipeComments(id as string);
        setComments(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDataComments();
  }, [id]);

  const handleBack = useCallback(() => {
    router.push("/recipes");
  }, [router]);

  return (
    <PageContainer title={recipe?.name} onBack={handleBack}>
      <SingleRecipe
        alt={recipe?.name}
        srcImage={recipe?.image}
        ingredients={recipe?.ingredients}
        description={recipe?.instructions}
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
