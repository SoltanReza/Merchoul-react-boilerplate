/**
 *
 * BaseLayout
 *
 */
import React, { memo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { BaseFooter } from './components/BaseFooter';
import { BaseHeader } from './components/BaseHeader';
import {
  StyledMain,
  StyledBaseLayout,
  StyledHeader,
  StyledFooter,
} from './styles';

interface Props {
  className?: string;
  children: ReactNode;
  title?: string | undefined;
  description?: string | undefined;
}

export const BaseLayout = memo(
  ({ className, children, title, description }: Props) => {
    return (
      <StyledBaseLayout className={`BaseLayout ${className || ''}`}>
        <Helmet>
          {title && <title>{title}</title>}
          {description && <meta name="description" content={description} />}
        </Helmet>

        <StyledHeader>
          <BaseHeader />
        </StyledHeader>

        <StyledMain>{children}</StyledMain>

        <StyledFooter>
          <BaseFooter />
        </StyledFooter>
      </StyledBaseLayout>
    );
  },
);
