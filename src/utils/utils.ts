export const calculateRates = (
  data: Record<string, number>,

  currency: string
) => {
  return (1 * data['UAH']) / data[currency];
};

export const roundRate = (rate: number) => {
  return Number(rate.toFixed(2));
};
