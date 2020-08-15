export function validatePhone(phone: string): boolean {
  const clearPhone = phone.replace(/\D/g, '');

  if (!(clearPhone.length >= 10 && clearPhone.length <= 11)) return false;

  if (clearPhone.length === 11 && +clearPhone.substring(2, 3) !== 9)
    return false;

  for (let n = 0; n < 10; n++) {
    if (
      clearPhone === new Array(11).join(String(n)) ||
      clearPhone === new Array(12).join(String(n))
    ) {
      return false;
    }
  }

  const codesDDD = [
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    21,
    22,
    24,
    27,
    28,
    31,
    32,
    33,
    34,
    35,
    37,
    38,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    51,
    53,
    54,
    55,
    61,
    62,
    64,
    63,
    65,
    66,
    67,
    68,
    69,
    71,
    73,
    74,
    75,
    77,
    79,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
  ];

  if (codesDDD.indexOf(+clearPhone.substring(0, 2)) === -1) return false;

  if (
    clearPhone.length === 10 &&
    [2, 3, 4, 5, 7].indexOf(+clearPhone.substring(2, 3)) === -1
  ) {
    return false;
  }

  return true;
}
