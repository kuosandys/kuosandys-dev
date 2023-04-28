export function formatDate(dateString: string, withDate = true, fallback = 'unknown date'): string {
  const date = new Date(dateString);
  return date
    ? `${date.getFullYear()} ${date.toLocaleString('default', { month: 'short' })}${
        withDate ? ` ${date.getDate().toString().padStart(2, '0')}` : ''
      }`
    : fallback;
}
