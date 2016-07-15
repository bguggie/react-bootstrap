import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';

import MenuItem from '../src/MenuItem';
import Nav from '../src/Nav';
import NavDropdown from '../src/NavDropdown';

describe('<NavDropdown>', () => {
  it('Should render li when in nav', () => {
    const instance = ReactTestUtils.renderIntoDocument(
      <Nav>
        <NavDropdown title="Title" className="test-class" id="nav-test">
          <MenuItem eventKey="1">MenuItem 1 content</MenuItem>
          <MenuItem eventKey="2">MenuItem 2 content</MenuItem>
        </NavDropdown>
      </Nav>
    );

    const dropdown = ReactDOM.findDOMNode(ReactTestUtils.findRenderedComponentWithType(instance, NavDropdown));
    const button = ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'dropdown-toggle');

<<<<<<< HEAD
    assert.equal(li.nodeName, 'LI');
    assert.ok(li.className.match(/\bdropdown\b/));
    assert.ok(li.className.match(/\btest-class\b/));
    assert.ok(li.className.should.not.match(/\bactive\b/));
=======
    assert.equal(dropdown.nodeName, 'LI');
    assert.ok(dropdown.className.match(/\bdropdown\b/));
    assert.ok(dropdown.className.match(/\btest-class\b/));
>>>>>>> react-bootstrap/next
    assert.equal(button.nodeName, 'A');
    assert.equal(button.textContent.trim(), 'Title');
  });

  it('renders div with active class', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <NavDropdown active title="Title" className="test-class" id='nav-test'>
        <MenuItem eventKey="1">MenuItem 1 content</MenuItem>
        <MenuItem eventKey="2">MenuItem 2 content</MenuItem>
      </NavDropdown>
    );

    let li = ReactDOM.findDOMNode(instance);

    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'active'));
    assert.ok(li.className.match(/\btest-class\b/)); // it still has the given className
    assert.ok(li.className.match(/\bactive\b/)); // plus the active class
  });

  it('is open with explicit prop', () => {
    class OpenProp extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          open: false
        };
      }

      render() {
        return (
          <div>
            <button
              className="outer-button"
              onClick={() => this.setState({ open: !this.state.open })}
            >
              Outer button
            </button>
            <NavDropdown
              open={this.state.open}
              onToggle={() => {}}
              title="Prop open control"
              id="test-id"
            >
              <MenuItem eventKey="1">Item 1</MenuItem>
            </NavDropdown>
          </div>
        );
      }
    }

    const instance = ReactTestUtils.renderIntoDocument(<OpenProp />);
    const outerToggle = ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'outer-button');
    const dropdownNode = ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'dropdown');

    dropdownNode.className.should.not.match(/\bopen\b/);
    ReactTestUtils.Simulate.click(outerToggle);
    dropdownNode.className.should.match(/\bopen\b/);
    ReactTestUtils.Simulate.click(outerToggle);
    dropdownNode.className.should.not.match(/\bopen\b/);
  });

  it('should derive bsClass from parent', () => {
    const instance = ReactTestUtils.renderIntoDocument(
      <NavDropdown title="title" id="test-id" bsClass="my-dropdown">
        <MenuItem eventKey="1">MenuItem 1 content</MenuItem>
      </NavDropdown>
    );

    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'my-dropdown-toggle'));
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'my-dropdown-menu'));
  });
});
