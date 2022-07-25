import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/youtube.png";
import celebrationIconImageSrc from "images/instagram--v1.png";
import shopIconImageSrc from "images/twitter.png";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-teal-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
      
        heading={<>Valorant <HighlightedText>Crosshairs</HighlightedText></>}
        description="The place to find your favourite professional Valorant crosshairs."
        imageSrc="https://media2.giphy.com/media/e2HHUuc4x2VaHIhjlf/giphy.gif?cid=790b76110ecb6fad817060daa1735e97eda355372eff99f2&rid=giphy.gif&ct=s"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        watchVideoButtonText="Tutorial"
      />
      
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Most Popular <HighlightedText>Crosshairs</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            Social <HighlightedText>Medias</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "Twitter",
            description: "Stay informed about the news",
            url: "https://twitter.com/SmartShineGG"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Youtube",
            description: "Tutorials and More!",
            url: "https://www.youtube.com/c/wavecompany"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Instagram",
            description: "Pictures of the owner 😂",
            url: "https://instagram.com/carloshenrxque"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      
      <Testimonial
        subheading=""
        heading={<>Streamers <HighlightedText>Love Us</HighlightedText></>}
      />
      <DownloadApp
        text={<>People around you are playing <HighlightedTextInverse> Valorant.</HighlightedTextInverse></>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
