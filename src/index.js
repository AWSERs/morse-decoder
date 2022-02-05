const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const obj = {}
Object.keys(MORSE_TABLE).forEach((value) => {
    let key = MORSE_TABLE[value]
    obj[key] = value
})

function decode(expr) {
  let arr = [...expr]
  let tempArr = []
  console.log(arr)
  
  for (let i = 0; i < arr.length; i++){
    let temp;
    if (i % 10 === 0) {
      temp = 0
      temp = arr[i]+arr[i+1]+arr[i+2]+arr[i+3]+arr[i+4]+arr[i+5]+arr[i+6]+arr[i+7]+arr[i+8]+arr[i+9]
      tempArr.push(temp)
    }
  }

  let morseArr = []
  let temp = []
  let morse = []
  let count = 0
  console.log(tempArr)
  for (let i = 0; i < tempArr.length; i++){
    let temp = [tempArr[i]]
    temp.forEach(item => {
      for (let i = 0; i < item.length; i++){
        if (i % 2 === 0) {
            morse.push(item[i] + item[i+1])
          }
      }
    })
  }
  console.log(morse)
  
  for (i = 0; i <= morse.length; i++){
    
  
    if (count === 5 && count !== 0) {
      morseArr.push(temp)
      temp = []
      if (morse[i] === '11') {
        temp.push('-')
      } else if (morse[i] === '10') {
        temp.push('.')
      }
      count = 1;
      } else if (morse[i] === '11') {
      temp.push('-')
      count++
      }else if(morse[i] === '10') {
      temp.push('.')
      count++
    } else {
      count++
    }
    
  }
  console.log(morseArr)
  let result = []
  morseArr.forEach(item => {
    for (key in MORSE_TABLE) {
      if (key === item.join('')) {
        result.push(MORSE_TABLE[key])
      } else if (item.length === 0) {
        result.push(' ')
      }
    } 
    
  })
  console.log(result)
  
  

  return result.join('').replace(/\s+/g, ' ').trim()
}

module.exports = {
    decode
}