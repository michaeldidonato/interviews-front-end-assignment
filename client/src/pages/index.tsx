import { Layout } from "@/page-components/shared/Layout";
import PageContainer from "@/page-components/shared/PageContainer";
import { Typography } from "@mui/material";
import { NextPage } from "next";
import { ReactElement, useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/recipe-infos");

      const data = await response.json();

      console.log({ data });
    };

    fetchData();
  }, []);
  return (
    <PageContainer>
      <Typography>Recipe App</Typography>
    </PageContainer>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
