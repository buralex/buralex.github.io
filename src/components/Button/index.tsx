import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';

interface Props extends React.ComponentProps<typeof BootstrapButton> {
  loading?: boolean;
}

export const Button: React.FC<Props> = ({ children, ...rest }) => (
  <BootstrapButton {...rest}>{children}</BootstrapButton>
);
