import express from "express";



const router = express.Router();



router.get('/',async (req,res)=>{
	try {
        res.status(200).send('jeton ok')
    } catch (error) {
        res.status(500).send(error.message)
    }
})


export default router