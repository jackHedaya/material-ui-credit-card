import React from 'react'
// eslint-disable-next-line no-unused-vars
import { TextField, TextFieldProps, InputAdornment } from '@material-ui/core'
import getCreditCardType, { types as CardType } from 'credit-card-type'

// eslint-disable-next-line no-unused-vars
import { CreditCardType } from 'credit-card-type/dist/types'

import { ReactComponent as AMEX_ICON } from 'payment-icons/min/flat/amex.svg'
import { ReactComponent as DEFAULT_ICON } from 'payment-icons/min/flat/default.svg'
import { ReactComponent as DINERS_ICON } from 'payment-icons/min/flat/diners.svg'
import { ReactComponent as DISCOVER_ICON } from 'payment-icons/min/flat/discover.svg'
import { ReactComponent as ELO_ICON } from 'payment-icons/min/flat/elo.svg'
import { ReactComponent as HIPERCARD_ICON } from 'payment-icons/min/flat/hipercard.svg'
import { ReactComponent as JCB_ICON } from 'payment-icons/min/flat/jcb.svg'
import { ReactComponent as MAESTRO_ICON } from 'payment-icons/min/flat/maestro.svg'
import { ReactComponent as MASTERCARD_ICON } from 'payment-icons/min/flat/mastercard.svg'
import { ReactComponent as UNION_ICON } from 'payment-icons/min/flat/unionpay.svg'
import { ReactComponent as VISA_ICON } from 'payment-icons/min/flat/visa.svg'

import formatCreditCard from './formatCreditCard'

type CreditCardFieldProps = Omit<TextFieldProps, 'variant'> & {
  value: string
  creditCardType?: CreditCardType
  variant?: 'standard' | 'filled' | 'outlined'
}

const TYPE_TO_ICON = {
  [CardType.AMERICAN_EXPRESS]: AMEX_ICON,
  [CardType.DINERS_CLUB]: DINERS_ICON,
  [CardType.DISCOVER]: DISCOVER_ICON,
  [CardType.ELO]: ELO_ICON,
  [CardType.HIPERCARD]: HIPERCARD_ICON,
  [CardType.HIPER]: HIPERCARD_ICON,
  [CardType.JCB]: JCB_ICON,
  [CardType.MAESTRO]: MAESTRO_ICON,
  [CardType.MASTERCARD]: MASTERCARD_ICON,
  [CardType.MIR]: null,
  [CardType.UNIONPAY]: UNION_ICON,
  [CardType.VISA]: VISA_ICON
}

export default function CreditCardField(props: CreditCardFieldProps) {
  const { creditCardType: optionalCreditCardType, value, ...otherProps } = props
  const creditCardType = optionalCreditCardType ?? getCreditCardType(value)?.[0]

  const CardIcon: React.SFC<React.SVGProps<SVGSVGElement>> =
    TYPE_TO_ICON[creditCardType?.type] ?? DEFAULT_ICON

  return (
    <TextField
      value={formatCreditCard(value, creditCardType)}
      label='Credit Card #'
      variant='outlined'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <CardIcon viewBox='0 0 750 471' width='30px' />
          </InputAdornment>
        )
      }}
      {...otherProps}
    />
  )
}
