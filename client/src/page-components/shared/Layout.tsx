import { CssBaseline, styled, ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import type { FC, ReactNode } from "react";
import { createTheme } from "../../../src/lib/theme/index";
import { useLoadingContext } from "@/contexts/loading-context";
import Spinner from "./Spinner";

export type DashboardLayoutProps = {
  children?: ReactNode;
  themeMode?: "dark" | "light";
  /*
   * Flag use in accettazione-privacy public page to skip login
   */
  hideSidebar?: boolean;
  /*
   * Flag use in accettazione-privacy public page to hide navigation
   */
  hideNavbar?: boolean;
};

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 25,
}));

export const Layout: FC<DashboardLayoutProps> = (props) => {
  const { children, themeMode } = props;
  const { loading } = useLoadingContext();

  return (
    <>
      {<Spinner loading={loading} />}
      <ThemeProvider
        theme={createTheme({
          direction: "ltr",
          mode: "light",
        })}
      >
        <CssBaseline />

        <DashboardLayoutRoot>
          <Box
            sx={{
              display: "flex",
              flex: "1 1 auto",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {children}
          </Box>
        </DashboardLayoutRoot>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
