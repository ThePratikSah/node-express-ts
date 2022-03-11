import {Router} from 'express';
import { addNewSubTask, addNewTodos, getAllTodos, updateSubTask, updateTodo } from '../controller/todos.controller';

const router = Router();

// GET /todos -> returns all the todos | max 10
router.get('/todos', getAllTodos);

// POST /todos -> creates a new todo
router.post("/todos", addNewTodos);

// PUT /todos/:id -> updates a todo
router.put("/todos/:id", updateTodo);

// POST /todos/:id/subtasks -> creates a new subtask
router.post("/todos/:id/subtasks", addNewSubTask);

// PUT /todos/:id/subtasks/:subtaskId -> updates a subtask
router.put("/todos/:id/subtasks/:subtaskId", updateSubTask);

export default router;