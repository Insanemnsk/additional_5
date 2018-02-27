module.exports = function check(str, bracketsConfig) {
  length = bracketsConfig.length;
  for (let i = str.length; i > 0; i--) { 
    for (let j = 0; j < length; j++) {
      if (str[i] === bracketsConfig[j][1] && str[i-1] === bracketsConfig[j][0]) { 
        str = str.replace(bracketsConfig[j].join(''), '');
      } 
    } 
  }
return !str; 
}
