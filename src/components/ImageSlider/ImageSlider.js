import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Flex } from "@chakra-ui/react";



// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  return (
    <Flex>
      <Carousel infiniteLoop width={"400px"}>
        {slides.map((slide) => {
          return <Image src={slide.image} height="auto" width="800px" />;
        })}
      </Carousel>
    </Flex>
  );
};

export default ImageSlider;