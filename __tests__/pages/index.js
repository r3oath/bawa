import React from 'react';
import renderer from 'react-test-renderer';
import Index from '@app/pages/index';
import '@mocks/router';

describe('Index page', () => {
  it('Matches previous snapshot', () => {
    const component = renderer.create(<Index />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
