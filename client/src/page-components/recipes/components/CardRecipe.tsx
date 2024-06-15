/* eslint-disable @next/next/no-img-element */
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import srcFile from "../../../../server/uploads/Beef-Tacos.jpg";
import Image from "next/image";
import { useEffect, useMemo } from "react";

type CardRecipeProps = {
  title?: string;
  ingredients?: string[];
  urlImage?: string;
};

const CardRecipe = ({
  title = "",
  ingredients,
  urlImage = "",
}: CardRecipeProps) => {
  // console.log({ url: `../../../../server${urlImage}` });
  // const srcset = async () => {
  //   const src = (await import(`../../../../server${urlImage}`)).default;

  //   return src;
  // };

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     const response = await srcset();

  //     console.log({ response });
  //   };

  //   fetchImage();
  // }, []);

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box
            component={"div"}
            sx={{
              position: "relative",
              borderRadius: "50px",
              width: 230,
              height: 160,
            }}
          >
            {/* <Image
              alt="food"
              src={``}
              fill
              style={{
                borderRadius: "25px",
                objectFit: "cover",
              }}
            /> */}
            <img
              alt="food"
              src={`https://github.com/michaeldidonato/interviews-front-end-assignment/blob/ee46355931e7258171c269c0112b1c841bffc4c4/server${urlImage}`}
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
                Mediterran
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
                Italian
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1">Difficulty:</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Medium
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
