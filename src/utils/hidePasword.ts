export const hidePassword = (str: string) => {
  const len = str.length;

  const rs: string[] = [];

  for (let i = 0; i < len; i++) {
    rs.push('*');
  }

  return rs.join('');
};
