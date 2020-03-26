import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AriaModal from 'react-aria-modal';

const Container = styled.div`
  background-color: rgba(0,0,0,0.3);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ModalDialog({ handleModal }) {
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
        initialFocus="#deactivate-module"
        getApplicationNode={getApplicationNode}
      >
        <Container>
          <h1>GAMEOVER</h1>
          <button onClick={deactivateModal} id="deactivate-module">GAMEOVER</button>
        </Container>
      </AriaModal>
    : false;
    
  return (
    <Container>
      {modal}
    </Container>
  )
}