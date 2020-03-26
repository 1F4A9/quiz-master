import React, { useState } from 'react';
import styled from 'styled-components';

import ModalAsideMenu from '../modals/ModalAsideMenu';

const Container = styled.div`
  margin-left: 0.75rem;

  i {
    color: hsla(0,0%,0%,0.8);
    cursor: pointer;
  }
`;

export default function Hamburger() {
  const [openModal, setOpenModal] = useState(false);

  function handleModal(boolean) {
    setOpenModal(boolean);
  }
    
  return (
    <Container>
      <button onClick={() => handleModal(true)} aria-label="open aside menu">
        <i className="fas fa-bars"> </i>
      </button>
      {openModal ? <ModalAsideMenu handleModal={handleModal} /> : null}
    </Container>
  )
}