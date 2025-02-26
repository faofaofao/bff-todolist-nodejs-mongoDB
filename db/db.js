import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI
    )
    console.log('Conexión exitosa a MongoDB')
  } catch (error) {
    console.error('Error de conexión a MongoDB', error)
  }
}

export default connectDB