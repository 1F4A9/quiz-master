// eslint-disable-next-line no-unused-vars
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

  height: 100vh;
  width: 100%;

  p {
    margin: 12px;
  }
`;

function App() {
  return (
    <Router>
      <Container>
        <GlobalStyle/>
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/quiz" component={Quiz} />
      </Container>
    </Router>
  );
}

export default App;