import { useState, useRef } from 'react';
import classes from './auth-form.module.css';
import {signIn} from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils';



async function createUser(email, password){
  const result = await fetch('/api/auth/signup', {

    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: {'Content-Type': 'application/json' }
  })

  if(!result.ok){
    throw new Error('Something went wrong');
  }
  return result;
}

function AuthForm() {
  const emailInputRef = useRef('email');
  const passwordInputRef = useRef('password');

  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event){
    event.preventDefault();
    if(isLogin){
      const result = await signIn('credentials', {
        redirect: false,
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value

      });
      console.log(result);
    }
    else{
      try {
          const result = await createUser(emailInputRef.current.value, passwordInputRef.current.value);
          console.log(result);
      }catch(error){
          console.log(error);
      }

    }

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
