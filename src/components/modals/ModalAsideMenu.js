import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import AriaModal from 'react-aria-modal';
import { Link } from 'react-router-dom';

const easeIn = keyframes`
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0);
  }
`

const Container = styled.aside`
  background-color: #fff;
  position: absolute;
  height: 100%;
  width: 70%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 7px 0px 17px 0px rgba(0,0,0,0.75); 

  animation-name: ${easeIn};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`;

export default function Hamburger({ handleModal }) {
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    setModalActive(true);
  }, [])
 
  function deactivateModal() {
    setModalActive(false);
    handleModal(false);
  }
 
  function getApplicationNode() {
    return document.getElementById('modal-root');
  }

  const modal = modalActive
    ? <AriaModal
        titleText="aside menu"
        onExit={deactivateModal}
        initialFocus="#deactivate-aside"
        getApplicationNode={getApplicationNode}
      >
        <Container>
          <Link to="/quiz" tabIndex="-1">
            <button onClick={deactivateModal} value="/quiz" id="deactivate-aside" aria-label="open game screen">Game screen</button>
          </Link>
          <Link to="/stats" tabIndex="-1">
            <button onClick={deactivateModal} value="/stats" aria-label="open stats screen">Stats</button>
          </Link>
          <Link to="/about" tabIndex="-1">
            <button onClick={deactivateModal} value="/about" aria-label="open about screen">About this game</button>
          </Link>
        </Container>
      </AriaModal>
    : false;
    
  return (
    <Container>
      {modal}
    </Container>
  )
}