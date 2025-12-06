function handler(req, res){
    if(req.method === 'POST'){

        const email = req.body.email
        const feedback = req.body.feedback
    }
    res.status(200).json({message: 'This is awesome'})
}

export default handler;