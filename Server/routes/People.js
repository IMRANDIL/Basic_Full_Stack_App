const router = require('express').Router();
const DbService = require('../FetchData/Fetch');


//Create....

router.post('/insert', async (req, res) => {
    try {
        const { name } = req.body;
        const db = await DbService.getDbServiceInstance();
        const result = await db.insertNewName(name);
        res.json({ data: result })
    } catch (error) {
        console.log(error);
    }

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