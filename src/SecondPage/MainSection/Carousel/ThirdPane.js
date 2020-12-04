import React from 'react';
import styled from 'styled-components';

import A from './CarouselStyles/Link';
import Background from './CarouselStyles/Background';
import Container from './CarouselStyles/Container';
import Text from './CarouselStyles/SectionText';
import SectionTitle from './CarouselStyles/SectionTitle';
import PixelArtImg from '../../../Images/PixelArtImg.jpeg';

//Background For Game Dev Section
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
//Game Dev Section
const SecondarySection = () => (
    <Container>
        <SectionTitle>
            <A>eCommerce App</A>
        </SectionTitle>
        <BG />
        <SectionText>
            After I immersed myself in node and sql, I decided to continue to learn them, alongside react, by 
            building my first full stack app. 
            It's a WIP, but I am incredibly happy with my progress as a solo developer.
            Thusfar, I have as server that routes a sql query that react then accesses with my own fetch api. 
            The data is then passed to state to display each category page, where there are faux items you can add to your cart.
        </SectionText>
    </Container>
)
export default SecondarySection;