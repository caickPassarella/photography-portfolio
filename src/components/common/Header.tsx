import {
  HeaderContainer,
  HeaderContent,
  ImgOverlay,
  Title,
  Subtitle,
  Subtext,
} from "./styles";
import { Navbar } from "./Navbar";

export const Header: React.FC = () => {
  const subtext =
    "Lorem ipsum dolor set I dont know what to write in here but I need a bigger paragraph for my designLorem ipsum dolor set I dont know what to write in here but I need a bigger paragraph for my design. \n\n I need a bigger paragraph for my designLorem ipsum dolor set I dont.";

  return (
    <HeaderContainer>
      <ImgOverlay>
        <Navbar />
        <HeaderContent>
          <Title>Caick Passarella</Title>
          <Subtitle>Hobbyist photographer</Subtitle>
        </HeaderContent>
        <Subtext>{subtext}</Subtext>
      </ImgOverlay>
    </HeaderContainer>
  );
};
