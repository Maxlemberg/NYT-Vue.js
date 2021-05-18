const toCamel = (string) =>
  string.replace(/([-_][a-z])/gi, ($1) => $1.toUpperCase().replace("-", ""));

export default toCamel;
