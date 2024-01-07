import React from 'react';

function RegistrationForm() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="registerUsername">
          Username
          <input type="text" name="name" id="registerUsername" />
        </label>
        <label htmlFor="registrPassword">
          Password
          <input type="password" name="password" id="registrPassword" />
        </label>
        <label htmlFor="registerEmail">
          Email address
          <input type="email" name="email" id="registerEmail" />
        </label>
        <button type="submit">Registration</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
