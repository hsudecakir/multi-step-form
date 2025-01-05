export default function Summary({formData, setStep}){

  const onsKeys = Object.keys(formData.ons);
  const addedOns = onsKeys.filter(x => formData.ons[x] == true);

  function changePlan(){
    setStep(2);
  }

  return(
    <>
      <div className="form-info">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="total-board">
        <div className="selected-plan-container">
          <div className="selected-plan-text">
            <p>{`${formData.plan} (${formData.monthly == false ? 'Monthly' : 'Yearly'})`}</p>
            <p className="change-plan" onClick={changePlan}>Change</p>
          </div>
          <p className="plan-price">{`+$${formData.planPrice}/${formData.monthly == false ? 'mo' : 'yr'}`}</p>
        </div>
        {addedOns.length > 0 ? (<div className="added-ons">
          {addedOns.map(x => (
            <div key={x} className="added-ons-item">
              <p>{x == 'service' ? 'Online service' : x == 'storage' ? 'Larger storage' : 'Customizable profile'}</p>
              <p className="added-ons-price">{formData.monthly == false ? x == 'service' ? '+$1/mo' : '+$2/mo' : x == 'service' ? '+$10/yr' : '+$20/yr'}</p>
            </div>
          ) )}
        </div>) : ''}
      </div>
      <div className="total-price-container">
        <p>Total (per {formData.monthly == false ? 'month' : 'year'})</p>
        <p className="total-price">+${formData.totalOnsPrice + formData.planPrice}/{formData.monthly == false ? 'mo' : 'yr'}</p>
      </div>
    </>
  )
}