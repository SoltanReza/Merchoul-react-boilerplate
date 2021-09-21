import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { StyledHomePage } from './styles';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <StyledHomePage>
        <h1>Home page</h1>
      </StyledHomePage>
    </>
  );
}
