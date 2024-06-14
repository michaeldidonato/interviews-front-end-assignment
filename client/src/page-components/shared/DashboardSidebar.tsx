import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import type { FC } from "react";
import { Logo } from "./logo";
import { Scrollbar } from "./scrollbar";

interface DashboardSidebarProps {
  onClose?: () => void;
  open?: boolean;
}

export const DashboardSidebar: FC<DashboardSidebarProps> = (props) => {
  const { onClose, open } = props;
  const router = useRouter();

  const content = (
    <>
      <Scrollbar
        sx={{
          height: "100%",
          "& .simplebar-content": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div>
            <Box sx={{ p: 3, display: "flex", justifyContent: "center" }}>
              <NextLink href="/" passHref>
                <Logo
                  sx={{
                    height: 42,
                    width: 42,
                  }}
                />
              </NextLink>
            </Box>
          </div>
          {/* <Divider
            sx={{
              borderColor: "#2D3748", // dark divider
              my: 2,
            }}
          /> */}
          <Box sx={{ flexGrow: 1 }}>
            <></>
          </Box>
        </Box>
      </Scrollbar>
    </>
  );

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          //   backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      //   sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="persistent"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
