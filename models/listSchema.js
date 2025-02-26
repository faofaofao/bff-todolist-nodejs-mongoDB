import mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    complete:{
        type: Boolean,
        default: false,
    }
})

const List = mongoose.model('newToDoList', listSchema)

export default List;