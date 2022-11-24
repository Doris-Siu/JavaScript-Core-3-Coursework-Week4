function verify(pw) {
  if (pw === null || pw.length < 8) {
    return "Password rejected";
  }
  let charpw = pw.replace(/[0-9]/g, "");
  let charpwArr = charpw.split("");
  let pwArr = pw.split("");

  if (!charpwArr.some((char) => char === char.toUpperCase())) {
    return "Password rejected";
  }

  if (
    !pwArr.some(
      (char) =>
        char === "0" ||
        char === "1" ||
        char === "2" ||
        char === "3" ||
        char === "4" ||
        char === "5" ||
        char === "6" ||
        char === "7" ||
        char === "8" ||
        char === "9"
    )
  ) {
    return "Password rejected";
  }

  return "Password accepted";
}

module.exports = verify;
