import { useState } from 'react'
import './App.css'
import Steps from './components/Steps'
import InfoForm from './components/InfoForm'
import Buttons from './components/Buttons'
import SelectPlan from './components/SelectPlan'
import Ons from './components/Ons'
import Summary from './components/Summary'
import Confirmed from './components/Confirmed'

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    plan: '',
    monthly: false,
    planPrice: 0,
    ons: {
      service: false,
      storage: false,
      custom: false
    },
    totalOnsPrice: 0
  });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [required, setRequired] = useState([]);

  return (
    <div className='container'>
      <Steps step={step} />
      <div className="container__wrapper">
        <div className='form-container'>
          <div className="form">
            {isConfirmed == false ? 
            (<form>
              {step == 1 && <InfoForm formData={formData} setFormData={setFormData} required={required} />}
              {step == 2 && <SelectPlan formData={formData} setFormData={setFormData} required={required} />}
              {step == 3 && <Ons formData={formData} setFormData={setFormData} />}
              {step == 4 && <Summary formData={formData} setStep={setStep} />}
            </form>) : 
            (<Confirmed />)}
          </div>
        </div>
        {isConfirmed == false && <Buttons setStep={setStep} step={step} formData={formData} setIsConfirmed={setIsConfirmed} setRequired={setRequired} />}
      </div>
    </div>
  )
}

export default App
