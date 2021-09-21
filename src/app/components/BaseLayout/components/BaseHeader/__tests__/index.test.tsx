import * as React from 'react';
import { render } from '@testing-library/react';

import { BaseHeader } from '..';


describe('<BaseHeader  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<BaseHeader />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
