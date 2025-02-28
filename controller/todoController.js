import { getList, createList, deleteList, updateList } from '../services/todoServices.js';

const getTodo = async (req, res) => {
    try {
        const data = await getList();
        res.status(200).json(data);
    } catch (error) {
        console.error('No se pudo obtener la lista solicitada', error);
    }
};

const createTodo = async (req, res) => {
    try {
        const { name } = req.body;
        const newTodo = await createList(name);
        res.status(201).json(newTodo);
    } catch (error) {
        console.error('Error al crear nuevo documento en BBDD', error);
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteList(id);
        res.json({message: 'Tarea Eliminada'});
    } catch (error) {
        console.error('No se encuentra la tarea o no se puede eliminar', error);
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const update = await updateList(id);
        res.json(update);
    } catch (error) {
        console.error('Documento no se puede actualizar', error);
    }
};

export {getTodo, createTodo, deleteTodo, updateTodo}



