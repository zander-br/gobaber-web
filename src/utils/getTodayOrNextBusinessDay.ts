import { addDays } from 'date-fns';

export default function getTodayOrNextBusinessDay(): Date {
  const today = new Date();
  if (today.getDay() === 0) return addDays(today, 1);
  if (today.getDay() === 6) return addDays(today, 2);

  return today;
}
