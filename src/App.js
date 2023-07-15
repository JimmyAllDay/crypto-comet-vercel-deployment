import React from 'react';
import Navigation from './components/utils/Navigation';
import HandleData from './components/utils/HandleData';
import Routing from './components/utils/Routing';

import { Container } from 'react-bootstrap';

import './styles/App.scss';

function App() {
  return (
    <Container fluid className="p-0 d-flex flex-column h-100 bg-primary">
      <Navigation />
      <HandleData routes={<Routing />} />
    </Container>
  );
}

export default App;
