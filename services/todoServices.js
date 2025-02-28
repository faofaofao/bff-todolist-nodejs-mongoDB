import List from '../models/todoSchema.js'

const getList = async () => {
    return await List.find();
};

const createList = async (name) => {
    return await List.create({ name }); 
};

const updateList = async (id) => {
    const update = await List.findById(id);
    update.complete = !update.complete;
    return await update.save();
};

const deleteList = async (id) => {
    return await List.findByIdAndDelete(id)
};

export {getList, createList, updateList, deleteList}
