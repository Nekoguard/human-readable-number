module.exports = function toReadable (number) { // выводятся числа до тысячи
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let result = [] ;
    let num = String(number);
  
    if (num.length === 1 || num.length === 2 && num <= 19) {
      result.push(units[num]); // выводятся числа от 1 до 19
    } else if (num.length === 2 && num[1] === '0') {
      result.push(tens[num[0] - 2]); // выводятся десятки(20, 30, ...)
    } else if (num.length === 2) {
      result.push(tens[num[0] - 2]);
      result.push(units[num[1]]); // остальные двузначные числа
    } 
  
    if (num.length === 3 && num[1] === '0' && num[2] === '0') {
        result.push(hundreds[num[0] - 1]); // выводятся сотни(100, 200, ...)
      } else if (num.length === 3 &&  num[1] === '0') {
        result.push(hundreds[num[0] - 1]);
        result.push(units[num[2]]); // числа вида 103, 408, ...
      } else if (num.length === 3 &&  num[1] === '1') {
        result.push(hundreds[num[0] - 1]);
        result.push(units[num[1] + num[2]]); // числа вида 715, 211, ...
      } else if (num.length === 3 &&  num[2] === '0') {
        result.push(hundreds[num[0] - 1]);
        result.push(tens[num[1] - 2]); // числа вида 350, 690, ...
      } else if (num.length === 3) {
        result.push(hundreds[num[0] - 1]);
        result.push(tens[num[1] - 2]);
        result.push(units[num[2]]); // остальные трехзначные числа
      }
  
  return result.join(' ');
}
