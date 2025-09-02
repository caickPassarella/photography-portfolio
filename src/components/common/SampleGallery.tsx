import { SampleGalleryContainer, Image } from "./styles";

type SampleGalleryType = {
  images: string[];
};

export const SampleGallery: React.FC<SampleGalleryType> = ({ images }) => {
  return (
    <SampleGalleryContainer>
      {images.map((image, index) => (
        <Image key={index} src={image} />
      ))}
    </SampleGalleryContainer>
  );
};
