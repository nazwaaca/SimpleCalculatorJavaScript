//-------------------------------------------------------------------
const numbers = document.querySelectorAll(".number")

    numbers.forEach((number) => {
        number.addEventListener("click", (event) => {
            inputNumber(event.target.value)
            updateScreen(currentNumber)
        })
    })

//-------------------------------------------------------------------
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

//-------------------------------------------------------------------
let prevNumber = ''
let calculatorOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }
}
//-------------------------------------------------------------------
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if(calculatorOperator === ''){
        prevNumber = currentNumber
    }
    calculatorOperator = operator
    currentNumber = '0'
}
//-------------------------------------------------------------------
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () =>{
    let result = ''

    switch(calculatorOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default :
        break
    }
    currentNumber = result
    calculatorOperator = ''
}
//-------------------------------------------------------------------
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    console.log('AC button is pressed')
})

const clearAll = () => {
    prevNumber = ''
    calculatorOperator = ''
    currentNumber = '0'
}

clearBtn.addEventListener('click' , () => {
    clearAll()
    updateScreen(currentNumber);
})

//-------------------------------------------------------------------
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    console.log(event.target.value)
})

inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
//-------------------------------------------------------------------
const percentage = document.querySelector('.percentage')
let percen

inputPercentage = (percentage) => {
    if(currentNumber.includes('%')){
        return
    }
    currentNumber += percentage
    percen = parseFloat(currentNumber) / 100
}
 percentage.addEventListener('click', (event) =>{
     inputPercentage(event.target.value)
     updateScreen(currentNumber)
     console.log(percen)
     currentNumber = percen
 })





