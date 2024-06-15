import {
  SxProps,
  TextField,
  TextFieldPropsSizeOverrides,
  Theme,
} from "@mui/material";
import { Controller, Control } from "react-hook-form";

type InputProps = {
  name: string;
  placeholder?: string;
  control: Control<any, any>;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  maxLength?: number;
  size?: "small" | "medium";
  sx?: SxProps<Theme> | undefined;
};

export const Text = ({
  name,
  control,
  multiline,
  rows,
  placeholder,
  size = "medium",
  required = false,
  maxLength = undefined,
  sx,
}: InputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required,
      }}
      render={({ field }) => (
        <TextField
          sx={sx}
          value={field.value}
          onChange={field.onChange}
          inputRef={field.ref}
          variant="outlined"
          multiline={multiline ? true : false}
          rows={rows || undefined}
          fullWidth
          size={size}
          placeholder={placeholder}
          inputProps={maxLength ? { maxLength: maxLength } : undefined}
        />
      )}
    />
  );
};
