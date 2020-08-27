import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import getCreditCardType, { types } from 'credit-card-type';
import { ReactComponent } from 'payment-icons/min/flat/amex.svg';
import { ReactComponent as ReactComponent$a } from 'payment-icons/min/flat/default.svg';
import { ReactComponent as ReactComponent$1 } from 'payment-icons/min/flat/diners.svg';
import { ReactComponent as ReactComponent$2 } from 'payment-icons/min/flat/discover.svg';
import { ReactComponent as ReactComponent$3 } from 'payment-icons/min/flat/elo.svg';
import { ReactComponent as ReactComponent$4 } from 'payment-icons/min/flat/hipercard.svg';
import { ReactComponent as ReactComponent$5 } from 'payment-icons/min/flat/jcb.svg';
import { ReactComponent as ReactComponent$6 } from 'payment-icons/min/flat/maestro.svg';
import { ReactComponent as ReactComponent$7 } from 'payment-icons/min/flat/mastercard.svg';
import { ReactComponent as ReactComponent$8 } from 'payment-icons/min/flat/unionpay.svg';
import { ReactComponent as ReactComponent$9 } from 'payment-icons/min/flat/visa.svg';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function formatCreditCard(cardNumber, type) {
  if (!type) return cardNumber;
  return type.gaps.reduce(function (prev, curr, i) {
    if (curr + i + 1 > cardNumber.length) return prev;
    if (prev[curr + i] === ' ') return prev;
    return prev.substring(0, curr + i) + ' ' + prev.substring(curr + i);
  }, cardNumber);
}

var _TYPE_TO_ICON;
var TYPE_TO_ICON = (_TYPE_TO_ICON = {}, _TYPE_TO_ICON[types.AMERICAN_EXPRESS] = ReactComponent, _TYPE_TO_ICON[types.DINERS_CLUB] = ReactComponent$1, _TYPE_TO_ICON[types.DISCOVER] = ReactComponent$2, _TYPE_TO_ICON[types.ELO] = ReactComponent$3, _TYPE_TO_ICON[types.HIPERCARD] = ReactComponent$4, _TYPE_TO_ICON[types.HIPER] = ReactComponent$4, _TYPE_TO_ICON[types.JCB] = ReactComponent$5, _TYPE_TO_ICON[types.MAESTRO] = ReactComponent$6, _TYPE_TO_ICON[types.MASTERCARD] = ReactComponent$7, _TYPE_TO_ICON[types.MIR] = null, _TYPE_TO_ICON[types.UNIONPAY] = ReactComponent$8, _TYPE_TO_ICON[types.VISA] = ReactComponent$9, _TYPE_TO_ICON);
function CreditCardField(props) {
  var _getCreditCardType, _TYPE_TO_ICON$creditC;

  var optionalCreditCardType = props.creditCardType,
      value = props.value,
      otherProps = _objectWithoutPropertiesLoose(props, ["creditCardType", "value"]);

  var creditCardType = optionalCreditCardType != null ? optionalCreditCardType : (_getCreditCardType = getCreditCardType(value)) === null || _getCreditCardType === void 0 ? void 0 : _getCreditCardType[0];
  var CardIcon = (_TYPE_TO_ICON$creditC = TYPE_TO_ICON[creditCardType === null || creditCardType === void 0 ? void 0 : creditCardType.type]) != null ? _TYPE_TO_ICON$creditC : ReactComponent$a;
  return React.createElement(TextField, Object.assign({
    value: formatCreditCard(value, creditCardType),
    label: 'Credit Card #',
    variant: 'outlined',
    InputProps: {
      startAdornment: React.createElement(InputAdornment, {
        position: 'start'
      }, React.createElement(CardIcon, {
        viewBox: '0 0 750 471',
        width: '30px'
      }))
    }
  }, otherProps));
}

export default CreditCardField;
//# sourceMappingURL=index.modern.js.map
