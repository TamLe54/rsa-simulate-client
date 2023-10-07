import type { OptionType } from '@/interface/general';

import _nationalities from '@/constants/nationalities.json';

const nationalityOptions: OptionType[] = _nationalities.map(nation => {
  return {
    label: nation.country,
    value: nation.country,
  };
});

export const nationalities = _nationalities.map(nation => {
  return nation.value;
});

export default nationalityOptions;
