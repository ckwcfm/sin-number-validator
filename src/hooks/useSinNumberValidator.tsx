import { useState } from 'react'
export default function useSinNumberValidator() {
  const [sinNumber, setSinNumber] = useState('')
  const [validation, setValidation] = useState({
    isValid: false,
    message: '',
  })

  const is9DigitNumber = (sinNumber: string) => {
    return /^\d{9}$/.test(sinNumber)
  }

  function onValidate() {
    if (!is9DigitNumber(sinNumber)) {
      setValidation({
        isValid: false,
        message: 'SIN Number should be 9 digits number',
      })
      return
    }
    const checksum = calculateLuhnCheckDigit(sinNumber)
    setValidation({
      isValid: checksum === 0,
      message: checksum === 0 ? 'Valid SIN Number' : 'Invalid SIN Number',
    })
  }

  function calculateLuhnCheckDigit(number: string) {
    const sum = number
      .split('')
      .map((digit) => parseInt(digit))
      .reduce((acc, digit, index) => {
        if (index % 2 === 0) {
          return acc + digit
        } else {
          const doubled = digit * 2
          return acc + (doubled > 9 ? addIndividualNumber(doubled) : doubled)
        }
      }, 0)
    console.log(sum)
    return sum % 10
  }

  function addIndividualNumber(number: number) {
    return `${number}`
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit), 0)
  }

  return {
    sinNumber,
    is9DigitNumber,
    setSinNumber,
    onValidate,
    validation,
  }
}
