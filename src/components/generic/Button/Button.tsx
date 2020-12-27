import React from 'react'
import { ButtonContainer } from './styles'
import { ButtonProps, ButtonVariantsEnum } from './types'

export const Button: React.FC<ButtonProps> = ({ children, variant = ButtonVariantsEnum.primary }) => {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>;
};
