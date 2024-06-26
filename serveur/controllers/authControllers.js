export const login = (req,res)=>{
    try {
        console.log("2334");
        res.status(200).send('ok')
    } catch (error) {
        res.status(500).send(error.message)
    }
}