import * as React from 'react';
import { render } from '@testing-library/react';

import { BaseFooter } from '..';


describe('<BaseFooter  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<BaseFooter />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
