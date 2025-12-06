import {useRef} from 'react'

function HomePage() {
  
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function handleSubmit(event){
    event.preventDefault();
    const enterEmail = emailInputRef.current.value;
    const enterFeedback = feedbackInputRef.current.value;

    const requestBody = {
      email: enterEmail,
      feedback: enterFeedback
    }

    fetch('/api/feedback',{
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(response => response.json()).then((data) => console.log(data));

    fetch('/api/feedback',{
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(response => response.json()).then((data) => console.log(data));

  }
  
  return (
    
    <div>
      <form onSubmit={handleSubmit}>
      <h1>The Home Page</h1>
      <div>
      <labe htmlFor ="email">Email</labe>
      <input type="email" name="email" ref={emailInputRef} />
      </div>
      <div>
      <labe htmlFor ="feedback">Feedback</labe>
      <textarea name="feedback" rows="5" ref={feedbackInputRef} ></textarea>
      </div>
      <br/>
      <div>
        <button>
          Send Feedback
        </button>
      </div>
      </form>
    </div>
    
    
  );
}

export default HomePage;
