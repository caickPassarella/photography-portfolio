import { PrimaryButton, SecondaryButton } from "./styles";

type ButtonProps = {
  text: string;
  type: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({ text, type }) => {
  if (type === "secondary") {
    return <SecondaryButton>{text}</SecondaryButton>;
  }
  return <PrimaryButton>{text}</PrimaryButton>;
};
