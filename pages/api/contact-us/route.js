function handler (req, res){

  if(req.method === 'POST'){
    const {email, name, message} = req.body;
    // const response =  await fetch('', {
    //       method: 'POST',
    //       body: JSON.stringify(body),
    //       headers:'Content-Type: application/json'
    //   });

      const newMessage = {
        email,
        name,
        message
      }

      console.log("newMessage", newMessage);
      res.status(201).json({message: 'Successfully Added !!!'})
  }
}

export default handler;