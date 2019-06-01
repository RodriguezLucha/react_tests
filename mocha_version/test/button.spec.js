import React from 'react';
import chai from 'chai';

import spies from 'chai-spies';
let jsdom = require('mocha-jsdom');
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../button';

chai.use(spies);
const {expect, spy} = chai;
jsdom({url: 'http://localhost'});

describe('Button', () => {
  it('renders with text', () => {
    const text = 'text';
    const renderer = new ShallowRenderer();
    renderer.render(<Button text={text} />);
    const button = renderer.getRenderOutput();
    expect(button.type).to.equal('button');
    expect(button.props.children).to.equal(text);
  });

  it('fires the onClick callback', () => {
    const onClick = spy();
    const tree = ReactTestUtils.renderIntoDocument(
      <Button onClick={onClick} />
    );
    const button = ReactTestUtils.findRenderedDOMComponentWithTag(
      tree,
      'button'
    );
    ReactTestUtils.Simulate.click(button);
    expect(onClick).to.be.called();
  });
});