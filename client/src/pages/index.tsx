import { Layout } from "@/page-components/shared/Layout";
import PageContainer from "@/page-components/shared/PageContainer";
import { Typography } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { ReactElement, useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/recipe-infos");

      const data = await response.json();
    };

    fetchData();
  }, []);
  return (
    <PageContainer>
      <Typography>Recipe App</Typography>
      <Link href={"/recipes"}>ricette</Link>
    </PageContainer>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
