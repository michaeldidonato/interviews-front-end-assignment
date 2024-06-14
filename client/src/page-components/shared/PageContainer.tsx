import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Box,
  Breakpoint,
  Button,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  divider?: boolean;
  maxWidth?: false | Breakpoint;
  title?: string;
  onBack?: () => void;
  backButtonTitle?: React.ReactNode;
  position?: string;
};

const PageContainer = ({
  children,
  divider,
  maxWidth = "xl",
  title,
  onBack,
  backButtonTitle = "Indietro",
  position,
}: Props) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4,
      }}
    >
      <Container
        maxWidth={maxWidth}
        sx={{ position: position ? position : "" }}
      >
        {onBack && (
          <Button
            color="primary"
            onClick={onBack}
            startIcon={<ChevronLeftIcon fontSize="large" />}
            sx={{ maxWidth: "fit-content" }}
          >
            {backButtonTitle}
          </Button>
        )}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4">{title}</Typography>
        </Box>

        {divider ? <Divider /> : null}

        {children}
      </Container>
    </Box>
  );
};

export default PageContainer;
