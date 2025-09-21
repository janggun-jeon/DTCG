import { format } from 'date-fns';

export function formatDate(date: Date) {
  return format(date, 'yyyy-MM-dd HH:mm');
}
