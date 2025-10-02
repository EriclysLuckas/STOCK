import  dontenv from  'dotenv';
import  mongoose from 'mongoose';

dontenv.config();



const MongUri = process.env.MONG_URI.replace('${db_password}', process.env.db_password);


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
