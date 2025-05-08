/**
 * General utility helper functions
 */

/**
 * Format a number as currency
 * 
 * @param value - The number to format
 * @param currency - The currency code (default: 'USD')
 * @param locale - The locale (default: 'en-US')
 * @returns Formatted currency string
 */
export const formatCurrency = (
  value: number,
  currency = 'USD',
  locale = 'en-US'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
};

/**
 * Format a date
 * 
 * @param date - The date to format
 * @param options - Intl.DateTimeFormat options
 * @param locale - The locale (default: 'en-US')
 * @returns Formatted date string
 */
export const formatDate = (
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  },
  locale = 'en-US'
): string => {
  const dateObj = typeof date === 'object' ? date : new Date(date);
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
};

/**
 * Truncate a string to a specified length
 * 
 * @param str - The string to truncate
 * @param length - Maximum length (default: 50)
 * @param ending - String to append at the end (default: '...')
 * @returns Truncated string
 */
export const truncate = (
  str: string,
  length = 50,
  ending = '...'
): string => {
  if (str.length <= length) {
    return str;
  }
  return str.substring(0, length - ending.length) + ending;
};

/**
 * Generate a random string (useful for IDs)
 * 
 * @param length - Length of the string (default: 8)
 * @returns Random string
 */
export const randomString = (length = 8): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * Debounce a function
 * 
 * @param func - The function to debounce
 * @param wait - Wait time in milliseconds (default: 300)
 * @returns Debounced function
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait = 300
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<T>): void => {
    if (timeout) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

/**
 * Deep clone an object
 * 
 * @param obj - The object to clone
 * @returns Cloned object
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Check if a value is empty (null, undefined, empty string, empty array, empty object)
 * 
 * @param value - The value to check
 * @returns True if the value is empty
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) {
    return true;
  }
  
  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }
  
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  
  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return true;
  }
  
  return false;
};

export default {
  formatCurrency,
  formatDate,
  truncate,
  randomString,
  debounce,
  deepClone,
  isEmpty,
};
