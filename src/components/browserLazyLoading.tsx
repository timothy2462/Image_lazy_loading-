import styled from "styled-components";
import { importImagesUrls } from "../utils/images";

//

const images = importImagesUrls();

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 2em;
  column-gap: 10px;
  max-width: 1024px;
`;

const Image = styled.img`
  /* height: 500px; */
`;

function BrowserLazyLoading() {
  return (
    <ImagesContainer>
      {images.map((url: string) => (
        //width and height on images are required for the browser to be able to calculate the viewport
        <img
          key={url}
          src={url}
          loading="eager"
          alt="image"
          height="500"
          width="333"
        />
      ))}
    </ImagesContainer>
  );
}

export { BrowserLazyLoading };
