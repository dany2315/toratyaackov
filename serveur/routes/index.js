import express from "express";



const router = express.Router();



router.get('/a',async (req,res)=>{
	try {
        console.log('aiiie');
        res.status(200).send('jeton ok')
    } catch (error) {
        res.status(500).send(error.message)
    }
})


export default router