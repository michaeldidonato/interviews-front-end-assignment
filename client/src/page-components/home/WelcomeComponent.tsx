import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const WelcomeComponent = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#e0e0e0",
            borderRadius: "25px",
            height: "85vh",
            width: "auto",
          }}
        >
          <Image
            src={"/welcome-recipes.jpg"}
            alt="welcomeImage"
            width={700}
            height={700}
            style={{
              borderRadius: "25px",
              maxWidth: "80%",
              height: "auto",
            }}
          />
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "85vh",
            width: "auto",
          }}
        >
          <Stack>
            <Typography variant="h1">RecipeBook</Typography>
            <Typography textAlign={"center"} variant="h6">
              Discover recipes
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link href={"/recipes"} passHref>
                <Button sx={{ mt: 6, minWidth: "12rem" }} variant="contained">
                  Explore
                </Button>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WelcomeComponent;
