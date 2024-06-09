const express = require('express')

const router = express.Router()


// All workouts
router.get('/', (req, res)=>{
    res.json({msg: "Get all workouts."})
});


// Single workout
router.get('/:id', (req, res)=>{
    const {id} = req.params;
    res.json({msg: "Get a single workout with id " + id})
});


// POST a workout
router.post('/', (req, res) => {
    res.json({msg: "Create a new workout"})
})


// Delete a workout`
router.delete('/:id', (req, res) => {
    res.json({msg: "Delete a workout"})
})




// Update a workout
router.patch('/:id', (req, res) => {
    res.json({msg: "Update a workout"})
})


module.exports = router