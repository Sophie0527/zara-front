import React from 'react';
import styled from 'styled-components';
import ViewContent from '../../components/Home/ViewContent';
import ViewFooter from '../../components/Home/ViewFooter';

function Home() {
  return (
    <Container>
      <ViewContent />
      <ViewFooter />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
export default Home;
