export default function divideFunction(numerator, denominator) {
  if (numerator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
