/** @jsx jsx */
import { ButtonHTMLAttributes } from 'react'
import { jsx } from 'theme-ui';
import React from 'react';

type Props = {
  kind?: "primary";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const Button = React.forwardRef<HTMLButtonElement, Props>(({kind = "primary", ...rest}: Props) => {
  return <button {...rest} />
});

export { Button };
