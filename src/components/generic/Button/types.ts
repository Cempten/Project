export enum ButtonVariantsEnum {
  primary = 'primary',
  secondary = 'secondary',
}

export type ButtonProps = {
  variant?: keyof typeof ButtonVariantsEnum;
};

export type ButtonContainerProps = ButtonProps; 
