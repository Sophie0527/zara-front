import React from 'react';
import styled from 'styled-components';
import ViewContent from '../../components/Home/ViewContent';
import ViewFooter from '../../components/Home/ViewFooter';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

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
  ${CustomMediaStyle.lessThan('mobile')`
  display: flex;
  flex-direction: column;
	`}
`;
export default Home;
