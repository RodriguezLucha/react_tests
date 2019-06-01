import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ReactTestUtils from 'react-dom/test-utils';

import Button from './button';


test('works', () => {
  expect(true).toBe(true);
});

test('renders with text', () => {
  const text = 'text';
  const renderer = new ShallowRenderer();
  renderer.render(<Button text={text} />);
  const button = renderer.getRenderOutput();
  expect(button.type).toBe('button');
  expect(button.props.children).toBe(text);
});

test('fires the onClick callback', () => {
  const onClick = jest.fn();

  const tree = ReactTestUtils.renderIntoDocument(
    <Button onClick={onClick} />
  );

  const button = ReactTestUtils.findRenderedDOMComponentWithTag(
    tree,
    'button'
  );

  ReactTestUtils.Simulate.click(button);

  expect(onClick).toBeCalled();
});