export function CapitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function CapitalizeAllLetter(value: string) {
  return value.toUpperCase();
}

export function ReturnProperty({
  condition,
  trueValue,
  falseValue,
}: {
  condition: boolean;
  trueValue: string;
  falseValue: string;
}) {
  if (condition) return trueValue;
  if (!condition) return falseValue;
}
