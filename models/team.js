import Mongoose from "mongoose";

const Schema = Mongoose.Schema;

const teamsSchema = new Schema({
    name: String,
    players: [String],
    winLastGame: Boolean,
    score: Number
}, {
    timestamps: true
})


const Team = Mongoose.model('Team', teamsSchema)

export{
    Team
}