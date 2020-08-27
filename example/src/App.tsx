import React, { useState } from 'react'

import { TextField } from '@material-ui/core'

import CreditCardField from 'material-ui-credit-card'

function App() {
  const [creditCard, setCreditCard] = useState('')

  return (
    <div>
      <TextField />
      <CreditCardField value={creditCard} onChange={setCreditCard} />
    </div>
  )
}

export default App
