import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'
import Logo from '../../assets/misc/Logo.png'


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const demoUser = async (e) => {
    e.preventDefault()

    const demoEmail = 'demo@aa.io'
    const demoPassword = 'password'

    return await dispatch(login(demoEmail, demoPassword))
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
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
            <span>Log in to Sportr</span>
          </div>

          <form onSubmit={onLogin}>
            <div className='errors-for-sign-up'>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div className='all-sign-up-form-inputs-labels'>
              <input
                className='sign-up-form-inputs-only'
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div className='all-sign-up-form-inputs-labels'>
              <input
                className='sign-up-form-inputs-only'
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
              />

            </div>
            <div className='sign-up-submit-button-div'>
              <button className='login-submit-button' type='submit'>Sign in</button>
              <button className='login-submit-button' onClick={event => demoUser(event)}>Demo User</button>
            </div>
            <div className='terms-of-service-sign-up-div'>
              <Link to='/page-in-development' style={{ textDecoration: 'none', color: 'rgb(0,130,199)', fontSize: '.85em' }}>Forgot Password?</Link>
            </div>
            <div className='sign-up-form-gray-line-before-already-member' />
            <div className='already-a-member-sign-up'> Not a Sportr member? <Link to='/sign-up' style={{ textDecoration: 'none', color: 'rgb(0,130,199)' }}>Sign up here.</Link></div>
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

export default LoginForm;
