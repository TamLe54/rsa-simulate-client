import { BUILD_NUMBER } from '@/config/env-config';

const MAJOR_VERSION_NUMBER = 1;
const MINOR_VERSION_NUMBER = 0;

export const VERSION_NUMBER = `${MAJOR_VERSION_NUMBER}.${MINOR_VERSION_NUMBER}.${BUILD_NUMBER || 0}`;
