import styled from '@emotion/styled'
import { ButtonContainerProps, ButtonVariantsEnum } from './types'

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 200px;
  height: 40px;
  background: ${({ variant }) => 
    variant === ButtonVariantsEnum.primary ? 'red' : 'green'};
`;

