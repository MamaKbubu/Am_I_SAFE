import React, { useState } from "react";
import { Link } from "react-router-dom";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Safety is Important</HeroH1>
        <HeroP>
          Come on a journey with us to learn how to stay safe in your community
        </HeroP>
        <HeroBtnWrapper>
          <Link to="about">
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </Link>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
