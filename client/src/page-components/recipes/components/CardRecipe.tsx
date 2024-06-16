/* eslint-disable @next/next/no-img-element */
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import useFindRecipeInfo from "../hooks/useFindRecipeInfo";

type CardRecipeProps = {
  title: string;
  ingredients: string[];
  urlImage: string;
  cuisineId: string;
  difficultyId: string;
  dietId: string;
};

const CardRecipe = ({
  title = "",
  ingredients,
  urlImage,
  cuisineId,
  dietId,
  difficultyId,
}: CardRecipeProps) => {
  const { detailRecipe } = useFindRecipeInfo({
    cuisineId,
    dietId,
    difficultyId,
  });

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box
            component={"div"}
            sx={{
              position: "relative",
              width: 280,
              height: 170,
            }}
          >
            <Image
              alt={title}
              src={`http://localhost:8080${urlImage}`}
              fill
              style={{
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack direction="column" alignItems="flex-start" spacing={2}>
            <Typography variant="h6" color="primary">
              {title}
            </Typography>

            <Box>
              <Typography variant="body1">Diet:</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {detailRecipe.dietName}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1">Ingredients:</Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {ingredients?.join(", ")}
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack
            direction="column"
            alignItems={{
              xs: "flex-start",
              md: "flex-end",
            }}
            spacing={2}
          >
            <Box>
              <Typography variant="body1">Cuisine:</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {detailRecipe.cuisineName}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1">Difficulty:</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {detailRecipe.difficultyName}
              </Typography>
            </Box>

            <Box sx={{ maxWidth: "15rem" }}>
              <Button variant="contained">View details</Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardRecipe;
