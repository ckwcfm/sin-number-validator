import { useEffect, useState } from 'react'
import useSinNumberValidator from '../hooks/useSinNumberValidator'
export default function SinNumberInputForm() {
  const { sinNumber, setSinNumber, is9DigitNumber, onValidate, validation } =
    useSinNumberValidator()
  const [enable, setEnable] = useState(false)
  useEffect(() => {
    setEnable(is9DigitNumber(sinNumber))
  }, [sinNumber])

  return (
    <div className='flex flex-col gap-2'>
      <label className='text-lg'>Enter SIN Number</label>
      <input
        type='text'
        className='border border-gray-300 rounded p-2'
        placeholder='Enter SIN Number'
        value={sinNumber}
        onChange={(e) => setSinNumber(e.target.value)}
      />
      <button
        className={
          'bg-blue-500 text-white rounded p-2' + (enable ? '' : ' opacity-50')
        }
        onClick={onValidate}
        disabled={!enable}
      >
        Validate
      </button>
      {validation.message && (
        <div
          className={`text-lg ${
            validation.isValid ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {validation.message}
        </div>
      )}
    </div>
  )
}
