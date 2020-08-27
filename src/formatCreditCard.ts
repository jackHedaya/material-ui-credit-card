// eslint-disable-next-line no-unused-vars
import { CreditCardType } from 'credit-card-type/dist/types'

export default function formatCreditCard(
  cardNumber: string,
  type: CreditCardType
) {
  if (!type) return cardNumber

  return type.gaps.reduce((prev, curr, i) => {
    // If the card number does not have the gap position yet
    if (curr + i + 1 > cardNumber.length) return prev

    // If the space is already there
    if (prev[curr + i] === ' ') return prev

    return prev.substring(0, curr + i) + ' ' + prev.substring(curr + i)
  }, cardNumber)
}
