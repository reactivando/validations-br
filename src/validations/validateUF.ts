const ufRegex =
  /^(?:ac|al|ap|am|ba|ce|df|es|go|ma|mt|ms|mg|pa|pb|pr|pe|pi|rj|rn|rs|ro|rr|sc|sp|se|to)$/i;

export const validateUF = ufRegex.test.bind(ufRegex);
