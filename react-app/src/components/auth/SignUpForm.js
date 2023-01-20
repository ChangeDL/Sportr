import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'
import Logo from '../../assets/misc/Logo.png'

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [full_name, setFullName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [disable, setDisable] = useState(true)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])





  useEffect(() => {
    const errors = []
    if (username.length < 4) errors.push("Username must be at least 4 characters or more.")
    if (username.length > 25) errors.push("Username is too long please make it less then 25 characters")
    if (password.length < 8) errors.push("Password must be at least 8 characters or more.")
    if (password !== repeatPassword) errors.push("Repeated Password doesn't match Password.")
    if (full_name.length === 0 || !letters.includes(full_name[0])) errors.push('Please enter your full name')
    if (full_name.length !== 0 && full_name.length < 4) errors.push('Full names but be at least 4 characters long')
    if (full_name.length > 40) errors.push('Please enter your full name at a length less than 40 characters')
    if (errors.length > 0) setDisable(true)
    if (errors.length === 0) setDisable(false)

    setErrors(errors)
  }, [username, password, repeatPassword, full_name, disable])

  const onSignUp = async (e) => {
    e.preventDefault();
    if (errors.length > 0) return setErrors([])
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username.toLowerCase(), full_name, email.toLowerCase(), password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateFullName = (e) => {
    setFullName(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='background-for-signup-and-login'>

      <div className='whole-sign-up-container'>
        <div className='sign-up-form'>
          <div className='logo-and-sign-up-message'>
            <img className='logo-sign-up-form' src={Logo} alt='Sportr Logo' />
            <span>Sign up for Sportr</span>
          </div>

          <form onSubmit={onSignUp}>
            <div className='errors-for-sign-up'>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div className='all-sign-up-form-inputs-labels'>
              <input
                placeholder='User Name'
                className='sign-up-form-inputs-only'
                type='text'
                name='username'
                onChange={updateUsername}
                value={username}
                required={true}
              ></input>
            </div>
            <div className='all-sign-up-form-inputs-labels'>
              <input
                placeholder='Full Name'
                className='sign-up-form-inputs-only'
                type='text'
                name='fullName'
                onChange={updateFullName}
                value={full_name}
                required={true}
              ></input>
            </div>
            <div className='all-sign-up-form-inputs-labels'>
              <input
                placeholder='Email'
                className='sign-up-form-inputs-only'
                type='email'
                name='email'
                onChange={updateEmail}
                value={email}
                required={true}
              ></input>
            </div>
            <div className='all-sign-up-form-inputs-labels'>
              <input
                placeholder='Password'
                className='sign-up-form-inputs-only'
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
                required={true}
              ></input>
            </div>
            <div className='all-sign-up-form-inputs-labels'>
              <input
                placeholder='Repeat Password'
                className='sign-up-form-inputs-only'
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
            <div className='sign-up-submit-button-div'>
              <button disabled={disable} className='sign-up-submit-button' type='submit'>Sign Up</button>
            </div>
            <div className='terms-of-service-sign-up-div'>
              <span className='terms-of-service-sign-up'>By signing up, you agree with Sportr's <Link to='/page-in-development' style={{ textDecoration: 'none', color: 'rgb(0,130,199)' }}>Terms of Services</Link> and <Link to='/page-in-development' style={{ textDecoration: 'none', color: 'rgb(0,130,199)' }}>Privacy Policy</Link></span>
            </div>
            <div className='sign-up-form-gray-line-before-already-member' />
            <div className='already-a-member-sign-up'> Already a Sportr member? <Link to='/login' style={{ textDecoration: 'none', color: 'rgb(0,130,199)' }}>Log in here.</Link></div>
          </form>
        </div>
        <div className='extra-links-bottom-of-sign-up'>
          <Link to='/page-in-development' style={{ textDecoration: 'none', color: 'white' }}>Help</Link>
          <Link to='/page-in-development' style={{ textDecoration: 'none', color: 'white' }}>Privacy</Link>
          <Link to='/page-in-development' style={{ textDecoration: 'none', color: 'white' }}>Terms</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
