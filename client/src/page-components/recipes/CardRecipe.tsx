/* eslint-disable @next/next/no-img-element */
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import srcFile from "../../../../server/uploads/Beef-Tacos.jpg";
import Image from "next/image";

type CardRecipeProps = {
  title?: string;
};

const CardRecipe = ({ title = "Chichen egg" }: CardRecipeProps) => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} sx={{ maxWidth: "300px" }}>
          <Box
            component={"div"}
            sx={{
              position: "relative",
              borderRadius: "50px",
              width: 250,
              height: 200,
            }}
          >
            <Image
              alt="food"
              src={srcFile}
              fill
              style={{
                borderRadius: "25px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <Typography variant="h6">{title}</Typography>

            <Box>
              <Typography variant="body1">Diet:</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Mediterran
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1">Cuisine:</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Italian
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1">Cuisine:</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Italian
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack
            spacing={2}
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
          >
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
