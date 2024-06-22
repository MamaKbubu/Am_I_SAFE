import React from "react";
import Icon1 from "../../images/pet-sitting.png";
import Icon2 from "../../images/obedience.jpg";
import Icon3 from "../../images/pic-2.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>My Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Pet Sitting</ServicesH2>
            <ServicesP>
              I have handled a various number of animals this being cats, dogs,
              wolves...lol
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Obedience & Protective Training </ServicesH2>
            <ServicesP>
              This is where I train both the owner and his/her dog extensively.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              I provide the best training for your dog and you as the owner.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
