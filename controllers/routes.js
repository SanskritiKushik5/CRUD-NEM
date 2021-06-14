const router = require('express').Router()
const tasks = require('../modals/taskModal');

router.get('/', (req, res) => {
    res.render('index')
});

router.post('/add', (req, res) => {
    const task = req.body.task;
    tasks({ task: task }).save(function(err, doc){
        if(err){
            console.log(err);
        }
        res.redirect('/')
    })

});



module.exports = router;