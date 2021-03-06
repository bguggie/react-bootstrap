import classNames from 'classnames';
import React from 'react';

import InputGroupAddon from './InputGroupAddon';
import InputGroupButton from './InputGroupButton';
import { bsClass, bsSizes, getClassSet, omitBsProps }
  from './utils/bootstrapUtils';
import { Size } from './utils/StyleConfig';

class InputGroup extends React.Component {
  render() {
    const { className, ...props } = this.props;

    const classes = getClassSet(props);

    return (
      <span
        {...omitBsProps(props)}
        className={classNames(className, classes)}
      />
    );
  }
}

InputGroup.Addon = InputGroupAddon;
InputGroup.Button = InputGroupButton;

export default bsClass('input-group',
  bsSizes([Size.LARGE, Size.SMALL], InputGroup)
);
