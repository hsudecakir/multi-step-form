export default function Buttons({setStep, step, formData, setIsConfirmed, setRequired}){

  function confirm(){
    setIsConfirmed(true);
  }

  function nextStep(){
    if(step == 1){
      const missingFields = [];

      if (formData.fullName === '') missingFields.push('fullName');
      if (formData.email === '') missingFields.push('email');
      if (formData.phoneNumber === '') missingFields.push('phoneNumber');

      if (missingFields.length > 0) {
        setRequired([...missingFields]);
        return;
      } 
      setStep(step + 1);
      setRequired([]);
    } else if(step == 2){
      if(formData.plan === ''){
        setRequired(['plan']);
      } else{
        setStep(step + 1);
        setRequired([]);
      }
    } else{
      setStep(step + 1);
    }
  }

  return(
    <>
      <div className={`buttons ${step == 1 ? 'step-one' : step == 4 ? 'step-four' : ''}`}>
        <button className="go-back-btn" onClick={() => setStep(step - 1)}>Go Back</button>
        <button className="next-step-btn" onClick={nextStep}>Next Step</button>
        <button className="confirm-btn" onClick={confirm}>Confirm</button>
      </div>
    </>
  )
}