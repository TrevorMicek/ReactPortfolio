import React from 'react';
import styled from 'styled-components';

import A from './CarouselStyles/Link';
import Background from './CarouselStyles/Background';
import Container from './CarouselStyles/Container';
import OldFreelanceImg from '../../../Images/OldFreelanceImg.jpg';
import Text from './CarouselStyles/SectionText';
import SectionTitle from './CarouselStyles/SectionTitle';

//Background For Twin Owl
const BG = styled(Background)`
min-height: 50vh;
    width: auto;
    background: url(${OldFreelanceImg}) no-repeat top center;
    background-size: 100% 100%;
    border: 1px solid #000;
    @media(min-width: 916px) {
        min-height: 60vh;
    }
    @media(min-width: 1060px) {
        min-height: 65vh;
        margin: 3vh 7vw 0 7vw;
    }
`;
const SectionText = styled(Text)`
    color: #000;
    margin: 1vh 4vw;
    padding-top: 1vh;
    text-shadow: none;
    font-size: 1.10em;

    @media(min-width: 1060px) {
        line-height: 3vh;
    }
`;
//Twin Owl Section
const SecondarySection = () => (
    <Container>
        <SectionTitle>
            <A href="http://www.eagle-plumes.com">Old Freelance Site</A>
        </SectionTitle>
        <BG />
        <SectionText>
            I personally made this WordPress site for my old freelance gig back in November of 2018.  
            Although it's a simple WordPress site, it inspired me to recreate it 
            with my own HTML/CSS. Both of which helped me learn a lot as well as motivate me to 
            learn more and more to be able to make an even better app.
        </SectionText>
    </Container>
)
export default SecondarySection;