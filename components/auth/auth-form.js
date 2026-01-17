import { useRef, useState } from 'react';
import classes from './auth-form.module.css';
import {signIn} from 'next-auth/react'

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const emailInputRef = useRef()
  const passwordInputRef = useRef();

  async function createUser(email, password){
    const response = await fetch('/api/auth/signup',{
        method:'POST',
        headers: { 
         'Content-Type':  'application/json'
        },
        body:JSON.stringify({email: email, password: password})
    })

    const data = await response.json();
    if(!response.ok){
      throw new Error(data.message);
    }

    return data;
  }

  async function handleSubmit(event){
    event.preventDefault();

    const enteredEmailInput = emailInputRef.current.value;
    const enteredPasswordInput = passwordInputRef.current.value;

    if(isLogin){
     const result = await signIn('credentials', 
        {redirect: false,
         email: enteredEmailInput,
         password:  enteredPasswordInput
        });

      console.log("result", result);
    }else{
      try{
        const result = await createUser(enteredEmailInput, enteredPasswordInput);
        console.log(result);
      }catch(error){
        console.log(error);
      }

    }
  }

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);

   
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
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
