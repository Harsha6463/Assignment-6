import React, { useState, useEffect } from 'react';

function Formdata() {
    const Name = (name) => name.trim().length > 0;
    const Email = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const Password = (password) => password.length >= 8;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formValid, setFormValid] = useState({
    name: false,
    email: false,
    password: false,
  });





  useEffect(() => {
    setFormValid({
      name: Name(formData.name),
      email: Email(formData.email),
      password: Password(formData.password),
    });
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };




  return (
    <div>
    <form>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {!formValid.name && <span>Name is required</span>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {!formValid.email && <span > Email required </span>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {!formValid.password && <span >Enter the password</span>}
      </div>

      <div className='btn'>
      <button type="submit" >
        Submit
      </button>
      </div>
    </form>
    
    </div>
  );
}

export default Formdata;
