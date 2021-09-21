/**
 *
 * BaseFooter
 *
 */
import React, { memo } from 'react';
import { StyledBaseFooter } from './styles';

interface Props {}

export const BaseFooter = memo((props: Props) => {
  return (
    <StyledBaseFooter>
      <p>footer</p>
    </StyledBaseFooter>
  );
});
