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
    display: flex; 
    align-items: center;
    justify-content: center;

    width: 100%;
    margin-top: 20px;
  }

  i {
    line-height: 0.6rem;
    padding-right: 4px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 0rem .75rem;
  
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-size: .875rem;
    color: #6200ee;
    cursor: pointer;
    padding: 0.5rem 0.6rem;

    background-color: #fff;
    border: none;
    border-radius: 4px;

    transition: background-color 0.2s linear;

    :hover,
    :focus {
      background-color: rgba(98, 0, 238, 0.15);
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
            <button onClick={deactivateModal} value="/quiz" id="nav" aria-label="open game screen">
              <i className="fas fa-gamepad"></i>
              Game screen
            </button>
          </Link>
          <Link to="/stats" tabIndex="-1">
            <button onClick={deactivateModal} value="/stats" aria-label="open stats screen">
              <i className="fas fa-scroll"></i>
              Stats
            </button>
          </Link>
          <Link to="/about" tabIndex="-1">
            <button onClick={deactivateModal} value="/about" aria-label="open about screen">
              <i className="far fa-address-card"></i>
              About this game
            </button>
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