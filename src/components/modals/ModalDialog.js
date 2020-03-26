import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AriaModal from 'react-aria-modal';

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    padding: 0.75rem;
    width: 300px;
    height: 200px;
    border-radius: 4px;
    background-color: #fff;
  }

  footer {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    flex: 1;
  }

  button {
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-weight: 600;
    color: #6200ee;
    cursor: pointer;
    margin-left: 0.75rem;

    background-color: #fff;
    border: none;

    :hover,
    :focus {
      background-color: rgba(98, 0, 238, 0.05);
      border-radius: 4px;
    }
  }
`;

export default function ModalDialog({ handleModal, currentResult }) {
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
        escapeExits={false}
        titleText="game win dialog"
        onExit={deactivateModal}
        initialFocus="#deactivate-module"
        getApplicationNode={getApplicationNode}
      >
        <Container>
          <div className="flex-container">
            <main>
              <h4>Congratulations!</h4>
              <p>You answered {currentResult}/10 questions correct!</p>
            </main>
            <footer id="deactivate-module">
              <button onClick={deactivateModal}>Re-start</button>
              <button onClick={deactivateModal}>Close</button>
            </footer>
          </div>
        </Container>
      </AriaModal>
    : false;
    
  return (
    <>
      {modal}
    </>
  )
}