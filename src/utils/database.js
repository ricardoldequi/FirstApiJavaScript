import mongoose from "mongoose";

const URI = 'mongodb+srv://101488:101488@cluster0.jqynfdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set("strictQuery", false)
        global.mongoose = await mongoose.connect(URI)
        .then(()=>console.log('connected to mongodb'))
        .catch(e=>console.log(e));
    }
}

export default databaseConnection


const userSchema = new mongoose.Schema({
    name: String
  });

  