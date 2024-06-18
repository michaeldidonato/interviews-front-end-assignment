import { Select } from "@/page-components/shared/input/Select";
import { Text } from "@/page-components/shared/input/Text";
import { Box, Button, Stack } from "@mui/material";
import { Control } from "react-hook-form";

type FormAddNewCommentProps = {
  control: Control<
    {
      comment: string;
      rating: number;
    },
    any
  >;
};

const optionsRating = [
  {
    title: "Eccellente",
    value: 5,
  },
  {
    title: "Ottimo",
    value: 4,
  },
  {
    title: "Buono",
    value: 3,
  },
  {
    title: "Discreto",
    value: 2,
  },
  {
    title: "Non soddisfatto",
    value: 1,
  },
];

const FormAddNewComment = ({ control }: FormAddNewCommentProps) => {
  return (
    <Stack spacing={2}>
      <Text
        control={control}
        name="comment"
        placeholder="leave a comment"
        multiline
        rows={4}
        required
        sx={{ width: "100%" }}
      />

      <Select
        control={control}
        name="rating"
        placeholder="Voto"
        options={optionsRating}
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button sx={{ minWidth: "10rem" }} type="submit" variant="contained">
          Invia
        </Button>
      </Box>
    </Stack>
  );
};

export default FormAddNewComment;
