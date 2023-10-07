// The password will have 8-20 characters (including lower case and upper case).
// The password must contain at least 1 number.
// The password must contain at least 1 special characters.

const lowerCaseChars: string = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers: string = '0123456789';
const specialChars: string = '!@#$^&';
const CHECKING_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$^&]).{8,20}$/;

export function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function mergePassword(code1: string, code2: string, index: number): string {
  const part1 = code1.slice(0, index + 1);
  const part2 = code2.slice(index + 1);

  if (CHECKING_REGEX.test(part1 + part2)) return part1 + part2;

  return code1;
}

export async function generatePassword(): Promise<string> {
  const allChars: string = lowerCaseChars + upperCaseChars + numbers + specialChars;

  const getRandomChar = (charSet: string): string => {
    const randomIndex: number = Math.floor(Math.random() * charSet.length);

    return charSet.charAt(randomIndex);
  };

  let password: string = '';

  // Ensure at least one number in the password
  password += getRandomChar(numbers);

  // Ensure at least one special character in the password
  password += getRandomChar(specialChars);

  // Generate the remaining characters randomly within the 8-20 character range
  const passwordLength: number = Math.floor(Math.random() * 13) + 8; // Random length between 8 and 20

  for (let i: number = 2; i < passwordLength; i++) {
    password += getRandomChar(allChars);
  }

  // Shuffle the characters in the password to make it more random
  const passwordArray = password.split('');

  for (let i: number = password.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));

    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }

  return passwordArray.join('');
}
