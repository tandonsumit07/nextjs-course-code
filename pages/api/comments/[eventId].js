function handler(req, res){
    if(req.method === 'POST'){
        const email = req.body.email;
        const name = req.body.name;
        const comment = req.body.comment;
        res.status(201).json({ message: `you're successfully subscribed with ${email}`})
    }

}

export default handler;