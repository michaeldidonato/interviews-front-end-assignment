import { config } from "@/lib/api/config";
import { Avatar, Box, Grid, Rating, Typography } from "@mui/material";
import Image from "next/image";
import { Comment } from "../types";
import { useForm } from "react-hook-form";
import FormAddNewComment from "./FormAddNewComment";
import { useCallback } from "react";

type SingleRecipeProps = {
  srcImage?: string;
  alt?: string;
  ingredients?: string[];
  description?: string;
  comments?: Comment[];
  handleSave: (formData: { comment: string; rating: number }) => Promise<void>;
};

const SingleRecipe = ({
  alt = "",
  comments,
  description,
  ingredients,
  srcImage,
  handleSave,
}: SingleRecipeProps) => {
  const { control, handleSubmit, setValue } = useForm<{
    comment: string;
    rating: number;
  }>({
    defaultValues: {
      comment: "",
      rating: 5,
    },
  });

  const clearForm = useCallback(() => {
    setValue("comment", ""), setValue("rating", 5);
  }, [setValue]);

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
              maxWidth: "700px",
              maxHeight: "500px",
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

      <Grid item xs={12}>
        <Typography gutterBottom variant="h5">
          User review
        </Typography>

        {comments?.map((comment) => (
          <Box
            key={comment.id}
            sx={{
              display: "flex",
              justifyConent: "center",
              alignItems: "center",
              p: 1,
            }}
          >
            <Box>
              <Avatar sx={{ bgcolor: "red" }}>{`U${comment.id.substring(
                0,
                1
              )}`}</Avatar>
            </Box>

            <Box sx={{ mx: 1 }}>
              <Typography variant="h6">{`User ${comment.id}`}</Typography>
              <Rating value={comment.rating} readOnly />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {comment.comment}
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>

      <Grid item xs={12}>
        <form
          onSubmit={handleSubmit(async (formData) => {
            await handleSave(formData);
            clearForm();
          })}
        >
          <FormAddNewComment control={control} />
        </form>
      </Grid>
    </Grid>
  );
};

export default SingleRecipe;
