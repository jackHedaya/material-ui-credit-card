function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var core = require('@material-ui/core');
var getCreditCardType = require('credit-card-type');
var getCreditCardType__default = _interopDefault(getCreditCardType);
var amex_svg = require('payment-icons/min/flat/amex.svg');
var default_svg = require('payment-icons/min/flat/default.svg');
var diners_svg = require('payment-icons/min/flat/diners.svg');
var discover_svg = require('payment-icons/min/flat/discover.svg');
var elo_svg = require('payment-icons/min/flat/elo.svg');
var hipercard_svg = require('payment-icons/min/flat/hipercard.svg');
var jcb_svg = require('payment-icons/min/flat/jcb.svg');
var maestro_svg = require('payment-icons/min/flat/maestro.svg');
var mastercard_svg = require('payment-icons/min/flat/mastercard.svg');
var unionpay_svg = require('payment-icons/min/flat/unionpay.svg');
var visa_svg = require('payment-icons/min/flat/visa.svg');

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
var TYPE_TO_ICON = (_TYPE_TO_ICON = {}, _TYPE_TO_ICON[getCreditCardType.types.AMERICAN_EXPRESS] = amex_svg.ReactComponent, _TYPE_TO_ICON[getCreditCardType.types.DINERS_CLUB] = diners_svg.ReactComponent, _TYPE_TO_ICON[getCreditCardType.types.DISCOVER] = discover_svg.ReactComponent, _TYPE_TO_ICON[getCreditCardType.types.ELO] = elo_svg.ReactComponent, _TYPE_TO_ICON[getCreditCardType.types.HIPERCARD] = hipercard_svg.ReactComponent, _TYPE_TO_ICON[getCreditCardType.types.HIPER] = hipercard_svg.ReactComponent, _TYPE_TO_ICON[getCreditCardType.types.JCB] = jcb_svg.ReactComponent, _TYPE_TO_ICON[getCreditCardType.types.MAESTRO] = maestro_svg.ReactComponent, _TYPE_TO_ICON[getCreditCardType.types.MASTERCARD] = mastercard_svg.ReactComponent, _TYPE_TO_ICON[getCreditCardType.types.MIR] = null, _TYPE_TO_ICON[getCreditCardType.types.UNIONPAY] = unionpay_svg.ReactComponent, _TYPE_TO_ICON[getCreditCardType.types.VISA] = visa_svg.ReactComponent, _TYPE_TO_ICON);
function CreditCardField(props) {
  var _getCreditCardType, _TYPE_TO_ICON$creditC;

  var optionalCreditCardType = props.creditCardType,
      value = props.value,
      otherProps = _objectWithoutPropertiesLoose(props, ["creditCardType", "value"]);

  var creditCardType = optionalCreditCardType != null ? optionalCreditCardType : (_getCreditCardType = getCreditCardType__default(value)) === null || _getCreditCardType === void 0 ? void 0 : _getCreditCardType[0];
  var CardIcon = (_TYPE_TO_ICON$creditC = TYPE_TO_ICON[creditCardType === null || creditCardType === void 0 ? void 0 : creditCardType.type]) != null ? _TYPE_TO_ICON$creditC : default_svg.ReactComponent;
  return React.createElement(core.TextField, Object.assign({
    value: formatCreditCard(value, creditCardType),
    label: 'Credit Card #',
    variant: 'outlined',
    InputProps: {
      startAdornment: React.createElement(core.InputAdornment, {
        position: 'start'
      }, React.createElement(CardIcon, {
        viewBox: '0 0 750 471',
        width: '30px'
      }))
    }
  }, otherProps));
}

module.exports = CreditCardField;
//# sourceMappingURL=index.js.map
