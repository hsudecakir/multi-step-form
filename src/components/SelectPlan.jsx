export default function SelectPlan({formData, setFormData, required}){

  function handleChange(e, planType, price){
    setFormData({
      ...formData,
      plan: planType,
      planPrice: formData.monthly == false ? price : price * 10
    })
  }

  function handleCheckboxChange(){
    setFormData({
      ...formData,
      monthly: !formData.monthly,
      planPrice: formData.planPrice < 16 && formData.planPrice !== 0 ? formData.planPrice * 10 : formData.planPrice / 10,
      totalOnsPrice: formData.totalOnsPrice < 6 && formData.totalOnsPrice !== 0 ? formData.totalOnsPrice * 10 : formData.totalOnsPrice / 10
    })
  }

  return(
    <div className={`select-plan-container ${required.includes('plan') ? 'error' : ''}`}>
      <div className="form-info">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <p className="error-text">This field is required</p>
      <div className={`select-plan ${formData.monthly == true ? 'yearly' : ''}`}>
        <div className="plans-container">
          <label htmlFor="arcade">
            <img src="./images/arcade-icon.svg" />
            <div className="plan-info">
              <h3>Arcade</h3>
              <p>{formData.monthly == false ? '$9/mo' : '$90/yr'}</p>
              <p className="yearly">2 months free</p>
            </div>
            <input checked={formData.plan == 'Arcade'} type="radio" name="plan" id="arcade" onChange={(e) => handleChange(e, 'Arcade', 9)} />
          </label>
          <label htmlFor="advanced">
            <img src="./images/advanced-icon.svg" />
            <div className="plan-info">
              <h3>Advanced</h3>
              <p>{formData.monthly == false ? '$12/mo' : '$120/yr'}</p>
              <p className="yearly">2 months free</p>
            </div>
            <input checked={formData.plan == 'Advanced'} type="radio" name="plan" id="advanced" onChange={(e) => handleChange(e, 'Advanced', 12)} />
          </label>
          <label htmlFor="pro">
            <img src="./images/pro-icon.svg" />
            <div className="plan-info">
              <h3>Pro</h3>
              <p>{formData.monthly == false ? '$15/mo' : '$150/yr'}</p>
              <p className="yearly">2 months free</p>
            </div>
            <input checked={formData.plan == 'Pro'} type="radio" name="plan" id="pro" onChange={(e) => handleChange(e, 'Pro', 15)} />
          </label>
        </div>
        <div className="monthly">
          <p>Monthly</p>
          <input className="switch" checked={formData.monthly == true} type="checkbox" name="monthly" onChange={handleCheckboxChange} />
          <p>Yearly</p>
        </div>
      </div>
    </div>
  )
}