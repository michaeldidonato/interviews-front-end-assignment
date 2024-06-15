import { LoadingProvider } from "@/contexts/loading-context";
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
        {getLayout(<Component {...pageProps} />)}
      </LoadingProvider>
    </>
  );
};

export default App;
