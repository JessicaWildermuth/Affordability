import React from "react";
import styled from 'styled-components';

const SLIDER_WIDTH = 260;

const Track = styled.div`
  width: 100%;
  height: 3px;
  background: #007882;
  z-index: 1;
`;

const Container = styled.div`
  width: ${SLIDER_WIDTH}px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: yellow;
`;


const Thumb = styled.div`
  position: fixed;
  left: ${props => props.xCoordinate}px;
  background: red;
  height: 6px;
  width: 6px;
  z-index: 2;
`;

const NewSlider = ({ xCoordinate, handleSlide }) => (
  <Container onClick={handleSlide}>
    <Track />
    <Thumb xCoordinate={xCoordinate} />
  </Container>
)

export default NewSlider;
