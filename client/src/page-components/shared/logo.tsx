import { styled } from "@mui/material/styles";
import Image from "next/image";
import PropTypes from "prop-types";

type Variant = "light" | "primary";

interface LogoProps {
  variant?: Variant;
}

export const Logo = styled((props: LogoProps) => {
  const { variant, ...other } = props;

  const color = variant === "light" ? "#C1C4D6" : "#5048E5";

  return (
    <Image
      src={"/new-icon-512x512.png"}
      width={120}
      height={120}
      alt="logo"
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
})``;

Logo.defaultProps = {
  variant: "primary",
};

Logo.propTypes = {
  variant: PropTypes.oneOf<Variant>(["light", "primary"]),
};
