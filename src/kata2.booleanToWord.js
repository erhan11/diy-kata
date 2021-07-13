const booleanToWord = (boolean, boolean2) => {
  let result = ''

  if(boolean === boolean2) {
    result = 'yes'
  } else {
    result = 'no'
  }
  return result;
};

module.exports = booleanToWord;
