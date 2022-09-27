import '../css/App.css'
const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-form">
        <h2>Sign Up!</h2>
        <section>
          <label for="firstname">First name :</label>
          <input type="text" name='firstname' placeholder='Ex: Jhon'/>
          <label for="lastname">Last Name :</label>
          <input type="text" name='lastname' placeholder='Ex: Doe'/>
        </section>
        <section>
          <label for="Email">Email :</label>
          <input type="text" name='Email' placeholder='example@domain.com'/>
          <label for="cm_email">Confirm email :</label>
          <input type="text" name='cm_email' placeholder='example@domain.com'/>
        </section>
        <section>
          <label for="password">Password :</label>
          <input type="text" name='password'/>
          <label for="cm_password">Confirm password :</label>
          <input type="text" name='cm_password'/>
        </section>
        <section>
          <button className=''>Reset inputs</button>
          <button>Submit inputs</button>
        </section>
      </div>
    </div>
  );
};

export default Signup;
