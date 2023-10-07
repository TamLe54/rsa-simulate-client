export const getOrdinal = (number: number) => {
  // Handle special case for 0
  if (number === 0) return '0th';

  // Handle special cases for numbers ending in 11, 12, and 13
  if (number % 100 >= 11 && number % 100 <= 13) {
    return number + 'th';
  }

  // For other numbers, determine the ordinal suffix based on the last digit
  switch (number % 10) {
    case 1:
      return number + 'st';
    case 2:
      return number + 'nd';
    case 3:
      return number + 'rd';
    default:
      return number + 'th';
  }
};
