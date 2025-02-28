import express from 'express';
import { getTodo, createTodo, deleteTodo, updateTodo} from "../controller/todoController.js";

const router = express.Router();

router.get('/', getTodo);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;