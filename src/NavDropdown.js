import classNames from 'classnames';
import React from 'react';
<<<<<<< HEAD
import classNames from 'classnames';
=======

>>>>>>> react-bootstrap/next
import Dropdown from './Dropdown';
import splitComponentProps from './utils/splitComponentProps';

const propTypes = {
  ...Dropdown.propTypes,

  // Toggle props.
  title: React.PropTypes.node.isRequired,
  noCaret: React.PropTypes.bool,
  active: React.PropTypes.bool,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: React.PropTypes.node,
};

class NavDropdown extends React.Component {
  render() {
<<<<<<< HEAD
    let { children, title, noCaret, active, className, ...props } = this.props;
    const classes = classNames(className, { active });

    return (
      <Dropdown className={classes} {...props} componentClass="li">
        <Dropdown.Toggle
          useAnchor
          disabled={props.disabled}
          noCaret={noCaret}
        >
=======
    const { title, active, className, style, children, ...props } = this.props;

    delete props.eventKey;

    // These are injected down by `<Nav>` for building `<SubNav>`s.
    delete props.activeKey;
    delete props.activeHref;

    const [dropdownProps, toggleProps] =
      splitComponentProps(props, Dropdown.ControlledComponent);

    // Unlike for the other dropdowns, styling needs to go to the `<Dropdown>`
    // rather than the `<Dropdown.Toggle>`.

    return (
      <Dropdown
        {...dropdownProps}
        componentClass="li"
        className={classNames(className, { active })}
        style={style}
      >
        <Dropdown.Toggle {...toggleProps} useAnchor>
>>>>>>> react-bootstrap/next
          {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {children}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

<<<<<<< HEAD
NavDropdown.propTypes = {
  noCaret: React.PropTypes.bool,
  title: React.PropTypes.node.isRequired,
  active: React.PropTypes.bool,
  ...Dropdown.propTypes
};
=======
NavDropdown.propTypes = propTypes;
>>>>>>> react-bootstrap/next

export default NavDropdown;
