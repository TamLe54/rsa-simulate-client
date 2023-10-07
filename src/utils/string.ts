/**
 * return the original string if it's empty
 */
export function capitalizeFirstCharacter(str: string) {
  if (!str) return str;

  return str.charAt(0).toUpperCase() + str.slice(1);
}
