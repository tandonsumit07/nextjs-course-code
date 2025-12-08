import classes from './newsletter-registration.module.css';
import { useRef } from 'react';



function NewsletterRegistration() {
  const enteredEmailInputRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();


    const email = enteredEmailInputRef.current.value;

    fetch('/api/newsletterregistration', {

      method: 'POST',
      body: JSON.stringify({email : email}),
      headers: {
        'Content-Type' : 'application/json'
      }

    }).then(response => response.json()).then((data)=> console.log(data));
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={enteredEmailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
