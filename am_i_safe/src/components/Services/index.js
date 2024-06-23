import React from "react";
import Icon1 from "../../images/emergency-system.jpg";
import Icon2 from "../../images/communitywatch.gif";
import Icon3 from "../../images/safety_training_muncipality.jpg";
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
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Emergency Response System</ServicesH2>
            <ServicesP>
              Our SOS alert system connects to your phone or smartwatch,
              instantly notifying SAFE agents and local authorities in case of
              an emergency, ensuring a swift response.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Community Watch Programs</ServicesH2>
            <ServicesP>
              Our community watch programs are designed to keep you safe in your
              neighborhood. We provide training and resources to help you and
              your neighbors stay safe.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Safety Education & Training</ServicesH2>
            <ServicesP>
              We offer safety education and training programs to help you stay
              safe in your community. Our programs are designed to help you
              recognize and avoid dangerous situations.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
