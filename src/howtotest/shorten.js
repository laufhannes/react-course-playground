const shorten = (s, maxLength) => {
  if (s.length > maxLength) {
    return s.slice(0, maxLength - 3) + "...";
  }

  return s;
};

export default shorten;
