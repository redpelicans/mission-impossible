import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

export const HeaderLeft = ({ children }) => <Fragment>{children}</Fragment>;

HeaderLeft.propTypes = {
  children: PropTypes.node,
};

export const HeaderRight = ({ children }) => <Fragment>{children}</Fragment>;

HeaderRight.propTypes = {
  children: PropTypes.node,
};

export const HeaderMiddle = ({ children }) => <Fragment>{children}</Fragment>;

HeaderMiddle.propTypes = {
  children: PropTypes.node,
};

const HeaderContain = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const Header = ({ children }) => {
  const headerLeft = () => React.Children.toArray(children).find(({ type }) => type === HeaderLeft);
  const headerMiddle = () => React.Children.toArray(children).find(({ type }) => type === HeaderMiddle);
  const headerRight = () => React.Children.toArray(children).find(({ type }) => type === HeaderRight);
  return (
    <HeaderContain>
      <div>{headerLeft()}</div>
      <div>{headerMiddle()}</div>
      <div>{headerRight()}</div>
    </HeaderContain>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};