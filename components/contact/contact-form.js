import classes from './contact-us.module.css'
import handler from '../../pages/api/contact-us/route'
import { useRef } from 'react';

export default function ContactUsForm(){
   const nameInputRef = useRef('name');
   const emailInputRef = useRef('email');
   const messageInputRef = useRef('message');
    function SubmitHandler(event){
        event.preventDefault();
       
        const message = {
            email: emailInputRef.current.value,
            name: nameInputRef.current.value,
            message: messageInputRef.current.value
        };

        fetch('/api/contact-us', {
            method: 'POST',
            body: JSON.stringify(message),
            headers:'Content-Type: application/json'
        });

    }
    return (
    <section className= {classes.contact}>
        <h1>
            How can I help you?
        </h1>
        <form className={classes.form} onSubmit={SubmitHandler}>
        <div className= {classes.controls}>
            <div className= {classes.control}>
            <label htmlFor="email" > Your Email</label>
            <input type="email" name="email" id="email" required  ref={emailInputRef} /> 
            </div>
            <div className= {classes.control}>
            <label htmlFor="name"> Your Name</label>
            <input type="text" name="name" id="name" required ref={nameInputRef} /> 
            </div>
        </div>
        <div className= {classes.control}>
            <label htmlFor="message"> Message</label>
            <textarea name="message" id="message"  rows={5} ref={messageInputRef} /> 
        </div>
        <div className= {classes.actions} >
            <button> Submit</button>
        </div>
        </form>
    </section> 
    )
}