import * as React from 'react';
import { render } from '@testing-library/react';

import { BaseLayout } from '..';


describe('<BaseLayout  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<BaseLayout />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
