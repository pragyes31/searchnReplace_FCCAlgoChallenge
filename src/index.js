function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toLowerCase()) {
    after = after[0].toUpperCase() + after.substring(1);
  }
  str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
