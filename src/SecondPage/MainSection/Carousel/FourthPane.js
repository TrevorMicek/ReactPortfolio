import React from 'react';
import styled from 'styled-components';

import A from './CarouselStyles/Link';
import Background from './CarouselStyles/Background';
import Container from './CarouselStyles/Container';
import Text from './CarouselStyles/SectionText';
import SectionTitle from './CarouselStyles/SectionTitle';
import PixelArtImg from '../../../Images/PixelArtImg.jpeg';

//Background For Archive Project
const BG = styled(Background)`
    background: url(${PixelArtImg}) no-repeat top center;
    background-size: 100% 95%;
`;
const SectionText = styled(Text)`
    color: #000;
    margin: 1vh 4vw;
    padding-top: 1vh;
    text-shadow: none;

    @media(min-width: 1060px) {
        line-height: 3vh;
    }
`;
//Online Library Section
const SecondarySection = () => (
    <Container>
        <SectionTitle>
            <A>Game Dev</A>
        </SectionTitle>
        <BG />
        <SectionText>
            In my freetime I have found myself drawn to making games. Right now, 
            I'm going through some very basic vanilla JS games 
            to help my exposure to an app with a majority of it being JS logic. 
            I have plans to make my own game from scratch once I feel more comfortable with the concepts. 
            My goal is to have a fun little game that can act as a sandbox for my creativity and to hone my vanilla JS skills outside of building websites.
        </SectionText>
    </Container>
)
export default SecondarySection;