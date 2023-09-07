export const getRewardForAmount = (amount) => {
  if (amount > 100) return 2 * (amount - 100) + 1 * 50;
  if (amount > 50 && amount < 100) return amount - 50;
  return 0;
};
