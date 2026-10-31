import { Text, type StyleProp, type TextStyle } from 'react-native';

import { PRICE_SLOT } from '../model/offer-view';

/**
 * A catalogue sentence with its emphasis kept: `**…**` marks the words set
 * heavier, the way the reference sets "one-time offer" inside its line.
 *
 * The markers live in the catalogue rather than in code so each language
 * decides which of its own words carry the weight; the sentence stays whole.
 */
export function Emphasised({
  text,
  style,
  strong,
}: {
  text: string;
  style: StyleProp<TextStyle>;
  /** The emphasised words: a face (`faces.*`) and colour over `style`. */
  strong: StyleProp<TextStyle>;
}) {
  const parts = text.split('**');
  return (
    <Text style={style} maxFontSizeMultiplier={1.4}>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <Text key={index} style={strong}>
            {part}
          </Text>
        ) : (
          part
        ),
      )}
    </Text>
  );
}

/**
 * A price inside its template ("{price}/yr", "{price} once"), with the
 * figure set larger than the words around it.
 *
 * The template is resolved by the caller with a marker in place of the price,
 * so each language keeps its own order ("1 990 ₽ в год", "$59.99/yr") and only
 * the figure is styled.
 */
export function PriceLine({
  template,
  price,
  style,
  priceStyle,
  numberOfLines,
}: {
  /** The catalogue line with `PRICE_SLOT` where the price goes. */
  template: string;
  price: string;
  style: StyleProp<TextStyle>;
  priceStyle: StyleProp<TextStyle>;
  numberOfLines?: number;
}) {
  const at = template.indexOf(PRICE_SLOT);
  if (at < 0) {
    return (
      <Text style={style} numberOfLines={numberOfLines} maxFontSizeMultiplier={1.3}>
        {template}
      </Text>
    );
  }
  return (
    <Text style={style} numberOfLines={numberOfLines} maxFontSizeMultiplier={1.3}>
      {template.slice(0, at)}
      <Text style={priceStyle}>{price}</Text>
      {template.slice(at + PRICE_SLOT.length)}
    </Text>
  );
}
