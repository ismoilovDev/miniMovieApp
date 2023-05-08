import styled from "styled-components";


export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 3rem;
  background-color: #000;
  z-index: 1000;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  opacity: ${props => props.isModalOpen ? '1' : '0'};
  visibility: ${props => props.isModalOpen ? 'visible' : 'hidden'};
`

export const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 55%;
  background-color: black;
  @media (min-width: 768px) {
    padding-bottom: 45%;
  }
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  @media (min-width: 768px) {
    height: 100%;
  }
`;

export const Controls = styled.div`
  position: absolute;
  bottom: -45%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  @media (min-width: 768px) {
    bottom: -5%;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-right: 10px;
  @media (min-width: 556px) {
    width: 30px;
  }
  @media (min-width: 992px) {
    width: 40px;
    font-size: 1.7rem;
  }
`;

export const Time = styled.span`
  color: #fff;
  font-size: 14px;
`;

export const SeekBarContainer = styled.div`
  flex-grow: 1;
  margin: 0 10px;
`;

export const SeekBarInput = styled.input`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  appearance: none;
  outline: none;
  ::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
  }
  ::-moz-range-thumb {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
  }
`;

export const SpeedButton = styled.button`
  width: 20px;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
  @media (min-width: 556px) {
    width: 30px;
  }
  @media (min-width: 992px) {
    width: 40px;
  }
`;

export const FullScreenButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  @media (min-width: 556px) {
    width: 30px;
  }
  @media (min-width: 992px) {
    width: 40px;
    font-size: 1.7rem;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  height: 50px;
  width: 55px;
  right: 30px;
  top: 30px;
  border-radius: 10px;
  background-color: #111;
  border: none;
  outline: none;
  z-index: 11;
  cursor: pointer;
  svg {
    font-size: 2rem;
    color: #fff;
  }
`