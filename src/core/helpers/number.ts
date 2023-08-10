export const twoDigitsNumberFormat = (value: number) =>
  value.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
