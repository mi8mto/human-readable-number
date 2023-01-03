module.exports = function toReadable (number) {
    let st = "";
  function toStr(n) {
    switch (n) {
      case 0:
        return "";
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      case 7:
        return "seven";
      case 8:
        return "eight";
      case 9:
        return "nine";
      case 10:
        return "ten";
      case 11:
        return "eleven";
      case 12:
        return "twelve";
      case 13:
        return "thirteen";
      case 14:
        return "fourteen";
      case 15:
        return "fifteen";
      case 16:
        return "sixteen";
      case 17:
        return "seventeen";
      case 18:
        return "eighteen";
      case 19:
        return "nineteen";
      // сотни
      case 20:
        return "twenty";
      case 30:
        return "thirty";
      case 40:
        return "forty";
      case 50:
        return "fifty";
      case 60:
        return "sixty";
      case 70:
        return "seventy";
      case 80:
        return "eighty";
      case 90:
        return "ninety";
    }
  }
  if (number === 0) return "zero";
  else if (number < 21) {
    st = toStr(number);
  } else if (number < 100) {
    st = toStr(number - (number % 10)) + " " + toStr(number % 10);
  } else if (number < 1000 && number % 100 < 21) {
    st = toStr(Math.floor(number / 100)) + " hundred " + toStr(number % 100);
  } else {
    st =
      toStr(Math.floor(number / 100)) +
      " hundred " +
      toStr((number % 100) - ((number % 100) % 10)) +
      " " +
      toStr(number % 10);
  }
  return st.trim();
};
