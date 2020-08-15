export const validateUF = (() => {
  const regex = /^(?:ac|al|ap|am|ba|ce|df|es|go|ma|mt|ms|mg|pa|pb|pr|pe|pi|rj|rn|rs|ro|rr|sc|sp|se|to)$/i;
  return (uf: string) => typeof uf === 'string' && regex.test(uf);
})();
