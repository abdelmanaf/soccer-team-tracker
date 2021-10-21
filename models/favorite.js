import Mongoose from "mongoose";

const Schema = Mongoose.Schema;

const favoriteSchema = new Schema({
    teamName: String,
    addedBy: String
}, {
    timestamps: true
})


const Favorite = Mongoose.model('Favorite', favoriteSchema)

export{
    Favorite
}