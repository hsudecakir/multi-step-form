export default function Ons({formData, setFormData}){

  function handleChange(e, selected ,price){
    setFormData({
      ...formData,
      [e.target.name]:{
        ...formData.ons,
        [selected]: !formData.ons[selected]
      },
      totalOnsPrice: formData.monthly == false ? formData.totalOnsPrice + price : formData.totalOnsPrice + (price * 10)
    })
    console.log(e.target.name);
  }

  return(
    <>
      <div className="form-info">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="add-ons">
        <div className={`add-ons-item ${formData.ons.service == true ? 'selected' : ''}`}>
          <div className="add-ons-item__wrapper">
            <label htmlFor="service">
              <input checked={formData.ons.service == true} type="checkbox" name="ons" id="service" onChange={(e) => handleChange(e, 'service', 1)} />
            </label>
            <div className="add-ons-item-text">
              <h3>Online service</h3>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <p className="price">{formData.monthly == false ? '+$1/mo' : '+$10/yr'}</p>
        </div>
        <div className={`add-ons-item ${formData.ons.storage == true ? 'selected' : ''}`}>
          <div className="add-ons-item__wrapper">
            <label htmlFor="storage">
              <input checked={formData.ons.storage == true} type="checkbox" name="ons" id="storage" onChange={(e) => handleChange(e, 'storage', 2)} />
            </label>
            <div className="add-ons-item-text">
              <h3>Larger storage</h3>
              <p>Extra 1TB of cloud save</p>
            </div>
            </div>
          <p className="price">{formData.monthly == false ? '+$2/mo' : '+$20/yr'}</p>
        </div>
        <div className={`add-ons-item ${formData.ons.custom == true ? 'selected' : ''}`}>
          <div className="add-ons-item__wrapper">
            <label htmlFor="custom">
              <input checked={formData.ons.custom == true} type="checkbox" name="ons" id="custom" onChange={(e) => handleChange(e, 'custom', 2)} />
            </label>
            <div className="add-ons-item-text">
              <h3>Customizable profile</h3>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <p className="price">{formData.monthly == false ? '+$2/mo' : '+$20/yr'}</p>
        </div>
      </div>
    </>
  )
}