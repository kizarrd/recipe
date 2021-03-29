import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is requried"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    ingredients: { // do this with array later. 
        type: String,
        required: "Ingredients are required"
    },
    recipe: {
        type: String,
        required: "Recipe is required"
    },
    // likes: {
    //     type: Number,
    //     default: 0
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const model = mongoose.model("Recipe", RecipeSchema);
export default model;