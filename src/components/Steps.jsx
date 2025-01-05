export default function Steps({step}){
  return(
    <>
      <div className="steps-container">
        <div className="steps">
          <div className="step">
            <div className={`step-number ${step == 1 ? 'current-step' : null}`}>
              <p>1</p>
            </div>
            <div className="step-text">
              <p>STEP 1</p>
              <p className="step-content">YOUR INFO</p>
            </div>
          </div>
          <div className="step">
            <div className={`step-number ${step == 2 ? 'current-step' : null}`}>
              <p>2</p>
            </div>
            <div className="step-text">
              <p>STEP 2</p>
              <p className="step-content">SELECT PLAN</p>
            </div>
          </div>
          <div className="step">
            <div className={`step-number ${step == 3 ? 'current-step' : null}`}>
              <p>3</p>
            </div>
            <div className="step-text">
              <p>STEP 3</p>
              <p className="step-content">ADD-ONS</p>
            </div>
          </div>
          <div className="step">
            <div className={`step-number ${step == 4 ? 'current-step' : null}`}>
              <p>4</p>
            </div>
            <div className="step-text">
              <p>STEP 4</p>
              <p className="step-content">SUMMARY</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}