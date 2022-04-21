class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
  }

  static sanitize(string){
    let newString = ''
    for(let i = 0; i < string.length; i++){
      let char = string.charAt(i);
      if (/^[A-Z]$/i.test(char) === true || char === '-' || char === "'" || char === ' '){
        newString += char;
      }
    }
    return newString
  }

  static titleize(string){
      let newStringArr = string.split(' ')
      let compare = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      let compareSet = new Set();
      compare.forEach(word => compareSet.add(word));
      for(let i in newStringArr){
        console.log(newStringArr[i], i);
        if(i == 0 || compareSet.has(newStringArr[i]) === false){
          newStringArr[i] = this.capitalize(newStringArr[i])
        }
      }
      return newStringArr.join(' ');
  }
} 
