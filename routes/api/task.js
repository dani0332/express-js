const express = require('express');
const uuid = require('uuid')
const router = express.Router();
const {getTaskList,createTask,getTask,updateTask, deleteTask} = require('../../controllers/TaskController')

router.get('/', getTaskList)
router.get('/:id', getTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

router.post('/',createTask)

// router.post('/',(req, res) => {
//     res.send(req.body)
//     const newMember = {
//       id: uuid.v4(),
//         name: req.body.name,
//         email: req.body.email
//     }
//     if(!newMember.name){
//         return res.status(400).json({message: 'Please include name and email'})
//     }
//
//     members.push(newMember);
//     console.log(newMember)
//     res.json(members)
// })
module.exports = router;