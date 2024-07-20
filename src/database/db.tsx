import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        // Create Connection
        const connection = await mongoose.connect('mongodb+srv://gkumar:HQuJ8ckRJ5ejUSMr@cluster0.s3v9ntg.mongodb.net/', {dbName: 'EmployeeDB'})

        // Console Database connected Successfully
        console.log("*** Database connected Successfully ***");
    } catch (error) {
        console.log(error);
        // Console Error 
        console.log("### Database Connection Failed ###");
    }
}