import mongoose from "mongoose"


const uri = "mongodb+srv://aashishkaushikVibewrite:Vibewrite7017@vibewrite.1kgvct4.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("mongoDB connected succesfully ")
}).catch((err) => {
    console.log(err.message)
})