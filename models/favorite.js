import Mongoose from "mongoose";

const Schema = Mongoose.Schema;

const favoriteSchema = new Schema({
    teamName: [{ 
        type: Schema.Types.ObjectId, 
        ref: "Team" 
    }],
    addedBy: [{ 
        type: Schema.Types.ObjectId, 
        ref: "User" 
    }]
}, {
    timestamps: true
})


const Favorite = Mongoose.model('Favorite', favoriteSchema)

export{
    Favorite
}