# material-ui-credit-card

> a Material UI TextField for credit card numbers

[![NPM](https://img.shields.io/npm/v/material-ui-credit-card.svg)](https://www.npmjs.com/package/material-ui-credit-card) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add material-ui-credit-card
```

## Usage

### Basic

CreditCardField accepts the same `props` as the <a href="https://material-ui.com/components/text-fields/">Material UI TextField</a>

```tsx
import CreditCardField from 'material-ui-credit-card'

function MyComponent() {
  return (
    <CreditCardField
      value={creditCard}
      onChange={(e) => setCreditCard(e.currentTarget.value)}
    />
  )
}
```

### Custom braintree/credit-card-type

You can also pass in a custom CreditCardType if you'd like use the credit card type elsewhere or <a href="https://github.com/braintree/credit-card-type#adding-card-types">add your own credit card type</a>

```tsx
import CreditCardField from 'material-ui-credit-card'
import getCreditCardType from 'credit-card-type'

function MyComponent() {
  const [creditCardNumber, setCreditCardNumber] = useState('')

  const cardType = getCreditCardType(creditCardNumber)?.[0]

  return (
    <CreditCardField
      value={creditCardNumber}
      onChange={(e) => setCreditCardNumber(e.currentTarget.value)}
      creditCardType={cardType}
    />
  )
}
```

## Development

This project was bootstrapped using <a href="https://github.com/transitive-bullshit/create-react-library">create-react-library</a>

- `$ git clone https://github.com/jackHedaya/material-ui-credit-card`
- `$ cd material-ui-credit-card && yarn`
- Continue instructions <a href="https://github.com/transitive-bullshit/create-react-library#development">here</a>

## License

MIT © [jackHedaya](https://github.com/jackHedaya)
