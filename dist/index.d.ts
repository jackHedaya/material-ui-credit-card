/// <reference types="react" />
import { TextFieldProps } from '@material-ui/core';
import { CreditCardType } from 'credit-card-type/dist/types';
declare type CreditCardFieldProps = Omit<TextFieldProps, 'variant'> & {
    value: string;
    creditCardType?: CreditCardType;
    variant?: 'standard' | 'filled' | 'outlined';
};
export default function CreditCardField(props: CreditCardFieldProps): JSX.Element;
export {};
