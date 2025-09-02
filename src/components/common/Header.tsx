import {
  HeaderContainer,
  HeroTitleContainer,
  HeroContent,
  Title,
  Subtext,
  InputWrapper,
} from "./styles";
import { Navbar } from "./Navbar";
import { Button } from "./Button";
import { FaInstagram } from "react-icons/fa";

export const Header: React.FC = () => {
  const subtext =
    "Lorem ipsum dolor set I dont know what to write in here but I need a bigger paragraph for my designLorem ipsum dolor set I dont know what to write in here but I need a bigger paragraph for my design. \n\n I need a bigger paragraph for my designLorem ipsum dolor set I dont.";

  return (
    <HeaderContainer>
      <HeroContent>
        <Navbar />
        <HeroTitleContainer>
          <Title>
            HOBBYIST
            <br />
            PHOTOGRAPHER
          </Title>
          <Subtext>{subtext}</Subtext>
          <InputWrapper>
            <Button type="primary" text="MY GEAR" />
            <FaInstagram cursor={"pointer"} size={35} color="white" />
          </InputWrapper>
        </HeroTitleContainer>
      </HeroContent>
    </HeaderContainer>
  );
};
