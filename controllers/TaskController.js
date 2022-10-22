const Task = require('../models/Task')

const getTaskList =  async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const createTask =  async (req, res) => {

    const task = await Task.create(req.body)

    res.status(201).json({task})
}

const getTask = async (req,res)=>{
    try{
        const {id:taskId} = req.params
        const task = await Task.findOne({_id:taskId})
        if(!task){
            return res.status(404).json({message: `Not Found`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(400).json({message:error})
    }
}

const updateTask = async (req,res)=>{
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

}

const deleteTask = async (req,res) =>{
    try {
        const {id: taskId} = req.params
        const task = await Task.findOneAndDelete({_id: taskId})
        if(!task){
            return res.status(404).json({message: `Not Found`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(400).json({message:error})
    }

}

module.exports = {getTaskList,createTask,getTask,updateTask,deleteTask}