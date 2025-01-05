export default function InfoForm({formData, setFormData, required}){

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return(
    <>
      <div className="form-info">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="info-form">
        <div className={`info-form-input-container ${required.includes('fullName') ? 'error' : ''}`}>
          <div className="info-form-text">
            <p>Name</p>
            <p className="error-text">This field is required</p>
          </div>
          <input type="text" placeholder="e.g. Stephen King" name="fullName" value={formData.fullName} onChange={handleChange} autoComplete="off" />
        </div>
        <div className={`info-form-input-container ${required.includes('email') ? 'error' : ''}`}>
          <div className="info-form-text">
            <p>Email Address</p>
            <p className="error-text">This field is required</p>
          </div>
          <input type="email" placeholder="e.g. stephenking@lorem.com" name="email" value={formData.email} onChange={handleChange} autoComplete="off" />
        </div>
        <div className={`info-form-input-container ${required.includes('phoneNumber') ? 'error' : ''}`}>
          <div className="info-form-text">
            <p>Phone Number</p>
            <p className="error-text">This field is required</p>
          </div>
          <input type="number" placeholder="e.g. +1 234 567 890" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
      </div>
    </>
  )
}