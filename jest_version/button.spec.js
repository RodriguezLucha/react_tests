import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
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