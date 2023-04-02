const express = require('express');

const uuid = require('uuid')
const router = express.Router();
const {login} = require('../../controllers/AuthenticateController')

// router.get('/', getTaskList)
router.post('/login',login)
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

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