import SinNumberInputForm from './components/SinNumberInputForm'
function App() {
  return (
    <>
      <div className='flex flex-col w-screen h-screen'>
        <div className='flex flex-col w-full h-full items-center justify-center gap-2'>
          <div className='text-3xl font-bold'>SIN Number Validator</div>
          <div className='flex flex-col gap-2 justify-stretch bg-slate-100 p-4 rounded'>
            <div className='flex flex-col gap-2 bg-slate-50 p-4 rounded'>
              <div className='text-lg'>
                Instructions: Enter 9 digit SIN Number to validate
              </div>
              <div>
                Example SIN Numbers:
                <ul>
                  <li>123456782</li>
                  <li>123456789</li>
                  <li>123456780</li>
                </ul>
              </div>
            </div>
            <SinNumberInputForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
