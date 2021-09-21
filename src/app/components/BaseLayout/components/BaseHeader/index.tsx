/**
 *
 * BaseHeader
 *
 */
import React, { memo } from 'react';
import { StyledBaseHeader } from './styles';

interface Props {}

export const BaseHeader = memo((props: Props) => {
  return (
    <StyledBaseHeader>
      <p>Header</p>
    </StyledBaseHeader>
  );
});
