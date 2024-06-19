import WelcomeComponent from "@/page-components/home/WelcomeComponent";
import { Layout } from "@/page-components/shared/Layout";
import PageContainer from "@/page-components/shared/PageContainer";
import { NextPage } from "next";
import { ReactElement } from "react";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <WelcomeComponent />
    </PageContainer>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
