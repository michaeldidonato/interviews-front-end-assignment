import { CssBaseline, styled, ThemeProvider } from "@mui/material";
import { Alert, Box, Snackbar } from "@mui/material";
import Router from "next/router";
import PropTypes from "prop-types";
import type { FC, ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { createTheme } from "../../../src/lib/theme/index";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardNavbar } from "./DashboardNavbar";
// import { DashboardNavbar } from "./dashboard-navbar";
// import { DashboardSidebar } from "./dashboard-sidebar";

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

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <>
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

        {/* {!props.hideNavbar && (
          <DashboardNavbar onOpenSidebar={(): void => setIsSidebarOpen(true)} />
        )} */}

        {/* {!props.hideSidebar && (
          <DashboardSidebar
            onClose={(): void => setIsSidebarOpen(false)}
            open={isSidebarOpen}
          />
        )} */}
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
