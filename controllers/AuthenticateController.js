const Task = require('../models/Task')
const jwt = require('jsonwebtoken');
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')
const login =  asyncWrapper(async (req, res) => {
    try {
        const {username: name
        ,password: password } = req.body;
        console.log("Login", name)

        const id = new Date().getDate();

        const token = jwt.sign({id,name},process.env.JWT_SECRET,{expiresIn: '30d' });

        res.status(200).json({msg:'User Created' , token})
    } catch (error) {
        res.status(500).json({message: error})
    }
})

const createTask =  asyncWrapper( async (req, res) => {

    const task = await Task.create(req.body)

    res.status(201).json({task})
})

const getTask = asyncWrapper(async (req, res,next) => {

    const {id: taskId} = req.params
    const task = await Task.findOne({_id: taskId})
    if (!task) {
        console.log('TaskController')
        return next(createCustomError(`No Task with Id: ${taskId}`, 404))
    }
    res.status(200).json({task})

})

const updateTask = asyncWrapper( async (req,res)=>{
    try {
        const {id: taskId} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskId}, req.body, {
            new:true,
            runValidators:true
        })

        console.log('update',req.body)
        if(!task){
            return res.status(404).json({message:`Not Found`})
        }

        res.status(200).json({task})

    } catch (error) {
        res.status(400).json({message: error})
    }

})

const deleteTask = asyncWrapper( async (req,res) =>{
    try {
        const {id: taskId} = req.params
        const task = await Task.findOneAndDelete({_id: taskId})
        if(!task){
            return next(createCustomError(`No Task with Id: ${taskId}`,404))
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(400).json({message:error})
    }

})

module.exports = {login}