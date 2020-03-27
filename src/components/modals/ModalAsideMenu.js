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
  width: 200px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 7px 0px 17px 0px rgba(0,0,0,0.75); 

  animation-name: ${easeIn};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;

  a {
    text-decoration: none; 
  }

  button {
    margin-top: 1.5rem;
  
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-size: .875rem;
    color: #6200ee;
    cursor: pointer;
    padding: 0.2rem 0.6rem;

    display: block;

    background-color: #fff;
    border: 1px solid #6200ee;
    border-radius: 4px;

    :hover,
    :focus {
      background-color: rgba(98, 0, 238, 0.05);
    }
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
        focusDialog={true}
        titleId='modal-title'
        onExit={deactivateModal}
        initialFocus="#nav"
        getApplicationNode={getApplicationNode}
      >
        <Container tabIndex="0" role="navigation" id="focus">
          <Link to="/quiz" tabIndex="-1">
            <button onClick={deactivateModal} value="/quiz" id="nav" aria-label="open game screen">Game screen</button>
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