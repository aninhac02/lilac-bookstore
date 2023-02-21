import mongoose from "mongoose";

mongoose.connect("mongodb+srv://anacarolinevilela0:02anVli@cluster0.ik8wny1.mongodb.net/api_livraria")

let db = mongoose.connection;

export default db;