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




});



//read one....


router.get('/search/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const db = await DbService.getDbServiceInstance();
        const result = await db.searchNameByName(name);
        res.json({ data: result })


    } catch (error) {
        console.log(error);
    }

})






//Update....

router.patch('/update', async (req, res) => {
    try {
        const { id, name } = req.body;
        const db = await DbService.getDbServiceInstance();
        const result = await db.updateNameById(id, name);
        res.json({ data: result })



    } catch (error) {
        console.log(error);
    }
})









//Delete.....

router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const db = await DbService.getDbServiceInstance();
        const result = await db.deleteRowById(id);
        res.json({ success: result })

    } catch (error) {
        console.log(error);
    }


})










module.exports = router;