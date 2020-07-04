import React, { ButtonHTMLAttributes } from 'react';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const Button = React.forwardRef<HTMLButtonElement, Props>((props) => {
  return <button {...props} />
});

export { Button };
