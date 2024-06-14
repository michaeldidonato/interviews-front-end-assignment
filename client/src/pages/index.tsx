import { Layout } from "@/page-components/shared/Layout";
import PageContainer from "@/page-components/shared/PageContainer";
import { Typography } from "@mui/material";
import { NextPage } from "next";
import { ReactElement } from "react";

const Home: NextPage = () => {
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
