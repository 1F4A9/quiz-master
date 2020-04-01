import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import ModalAsideMenu from '../modals/ModalAsideMenu';

const Container = styled.div`
  margin-left: 0.75rem;

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    line-height: 1.5rem;
  }

  i {
    color: #fff;
    font-size: 1.5rem;
  }
`;

export default function Hamburger() {
  const [openModal, setOpenModal] = useState(false);
  const focus = useRef(null)

  function handleModal(boolean) {
    setOpenModal(boolean);
  }

  useEffect(() => {
    focus.current.focus();
  }, [])
    
  return (
    <Container>
      <button onClick={() => handleModal(true)} aria-label="open aside menu" ref={focus}>
        <i className="fas fa-bars" aria-hidden="true"></i>  
      </button>
      {openModal ? <ModalAsideMenu handleModal={handleModal} /> : null}
    </Container>
  )
}