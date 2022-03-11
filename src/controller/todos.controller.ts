import { RequestHandler } from 'express';
// import prisma from '../../prisma';

const getAllTodos: RequestHandler = async (req, res, next) => {
  try {
    // const allTasks = await prisma.task.findMany({
    //   include: {
    //     Subtask: true,
    //   },
    // });
  } catch (error) {
    next(error);
  }
}

const addNewTodos: RequestHandler = async (req, res, next) => {
  try {
    // await prisma.task.create({
    //   data: {
    //     title: req.body.title,
    //     status: "TODO"
    //   }
    // })
  } catch (error) {
    next(error);
  }
}

const updateTodo: RequestHandler = async (req, res, next) => {
  try {
    // const post = await prisma.task.update({
    //   where: {
    //     id: 1
    //   },
    //   data: {
    //     status: "DONE"
    //   }
    // })
  }
  catch (error) {
    next(error);
  }
}

const addNewSubTask: RequestHandler = async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error);
  }
}

const updateSubTask: RequestHandler = async (req, res, next) => {
  try {
  }
  catch (error) {
    next(error);
  }
}

export {getAllTodos, addNewTodos, updateTodo, addNewSubTask, updateSubTask};