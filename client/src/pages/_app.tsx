import { LoadingProvider } from "@/contexts/loading-context";
import { RecipeInfosProvider } from "@/contexts/recipeinfos-context";
import { NextPage } from "next";
import type { AppProps } from "next/app";

type EnhancedAppProps = AppProps & {
  Component: NextPage;
};

const App = ({ Component, pageProps }: EnhancedAppProps) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <LoadingProvider>
        <RecipeInfosProvider>
          {getLayout(<Component {...pageProps} />)}
        </RecipeInfosProvider>
      </LoadingProvider>
    </>
  );
};

export default App;
