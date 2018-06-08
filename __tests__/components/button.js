import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/button';

describe('Button', () => {
  it('Matches previous snapshot', () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
