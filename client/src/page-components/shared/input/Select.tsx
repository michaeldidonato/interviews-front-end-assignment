import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, Control } from "react-hook-form";

type SelectProps = {
  name: string;
  placeholder?: string;
  options: {
    title: string;
    value: string;
  }[];
  control: Control<any, any>;
  required?: boolean;
  sx: SxProps;
};

export const Select = ({
  name,
  control,
  placeholder,
  options,
  required = false,
  sx,
}: SelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required,
      }}
      render={({ field }) => (
        <TextField
          value={field.value}
          onChange={field.onChange}
          inputRef={field.ref}
          variant="outlined"
          size="small"
          select
          fullWidth
          label={placeholder}
          sx={sx}
        >
          {options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.title}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};
