import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI as string;

        // Log de ayuda para tu compañero
        console.log("-----------------------------------------");
        console.log("🔍 Intentando conectar a:", uri || "VACIÓ (Undefined)");
        console.log("-----------------------------------------");

        if(!uri){
            throw Error('❌ MONGO_URI no esta en el archivo .env')
        }
        await mongoose.connect(uri);
        console.log('✅ Conectado a MongoDB');
    } catch (err: any) {
        console.log('❌ Error de Conexión', err.message );
        process.exit(1);
    }
}

export default connectDB;