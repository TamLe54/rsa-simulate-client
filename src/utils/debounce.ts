export const debounce = <T extends (...args: any[]) => void>(func: T, delay = 300) => {
  let timeoutId: number | null = null;

  return (...args: any) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    timeoutId = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      func(...args);
    }, delay);
  };
};
