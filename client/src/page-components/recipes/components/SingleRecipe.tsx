import { config } from "@/lib/api/config";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

type SingleRecipeProps = {
  srcImage?: string;
  alt?: string;
  ingredients?: string[];
  description?: string;
  comments?: Record<string, any>[];
};

const SingleRecipe = ({
  alt = "",
  comments,
  description,
  ingredients,
  srcImage,
}: SingleRecipeProps) => {
  return (
    <Grid container columnSpacing={2} rowSpacing={6}>
      <Grid item xs={12}>
        <Box component={"div"}>
          <Image
            src={`${config.host}${srcImage}`}
            alt={alt}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "25px",
              maxWidth: "1000px",
              maxHeight: "700px",
            }}
            width={700}
            height={500}
          />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5">Ingredients</Typography>
        <Box sx={{ p: 2 }}>
          {ingredients?.map((ing) => (
            <Typography key={ing} variant="body1">
              {ing}
            </Typography>
          ))}
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5">Procedure</Typography>

        <Box sx={{ p: 2 }}>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SingleRecipe;
