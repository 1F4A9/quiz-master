import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/header/Header';
import Main from './components/screens/Main';
import Quiz from './components/screens/Quiz';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

function App() {
  return (
    <Router>
      <Container>
        <GlobalStyle />
        <Header />
        <Route exact path="/" render={() => <Main/>} />
        <Route path="/quiz" render={() => <Quiz/>} />
      </Container>
    </Router>
  );
}

export default App;