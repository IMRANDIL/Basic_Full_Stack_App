const router = require('express').Router();
const DbService = require('../FetchData/Fetch');


//Create....

router.post('/insert', (req, res) => {

})



//Read.....

router.get('/getAll', async (req, res) => {
    try {
        const db = await DbService.getDbServiceInstance();
        const result = await db.getAllData();
        res.json({ data: result })
    } catch (error) {
        console.log(error);
    }




})


//Update....




//Delete.....












module.exports = router;