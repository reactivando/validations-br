export function validateUF(value: string): boolean {
  const regex = /^(?:ac|al|ap|am|ba|ce|df|es|go|ma|mt|ms|mg|pa|pb|pr|pe|pi|rj|rn|rs|ro|rr|sc|sp|se|to)$/i;
  const uf = value;
  if (regex.test(uf)) {
    return Boolean(uf);
  }
  return false;
}
