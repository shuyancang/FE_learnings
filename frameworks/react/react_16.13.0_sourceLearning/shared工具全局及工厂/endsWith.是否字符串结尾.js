

export default function endsWith(subject: string, search: string): boolean {
  const length = subject.length;
  return subject.substring(length - search.length, length) === search;
}
