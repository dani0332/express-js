const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
require('express-async-errors');
const {BadRequestError} = require('../errors')
const getTaskList =  async (req, res) => {
    // throw new Error("testing async error")
    try {
        console.log('getTaskList',req.user)

        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const createTask =  asyncWrapper( async (req, res) => {

    const task = await Task.create(req.body)

    res.status(201).json({task})
})

const getTask = async (req, res,next) => {

    const {id: taskId} = req.params
    const task = await Task.findOne({_id: taskId})
    if (!task) {
        console.log('getTask')
        throw new BadRequestError(`No Task with Id: ${taskId}`)
    }
    res.status(200).json({task})

}

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

module.exports = {getTaskList,createTask,getTask,updateTask,deleteTask}