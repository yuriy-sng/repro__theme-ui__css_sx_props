/** @jsx jsx */
import { ButtonHTMLAttributes } from 'react'
import { jsx } from 'theme-ui';
import React from 'react';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const Button = React.forwardRef<HTMLButtonElement, Props>((props) => {
  return <button {...props} />
});

export { Button };
