import  dontenv from  'dotenv';
import  mongoose from 'mongoose';

dontenv.config();


const password = process.env.DB_PASSWORD;
const MongUri  = `mongodb+srv://sa:${password}@mongobase.jei6j2t.mongodb.net/mongoBase?retryWrites=true&w=majority`;



const connectDB = async () => {
    try {
        await mongoose.connect(MongUri)
            console.log("Banco  conectado")
    } catch (error) {
        console.log(`Erro ao conectar banco - error: ${error.message}`)
    }
}
connectDB();


export default mongoose;
