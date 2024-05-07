import { model, Document, Schema } from 'mongoose'

export interface IComment extends Document{
    username: string
    text: string
    likes: number
}

const commentSchema = new Schema({
    username: {
        type: String,
        unique: false
    },
    text: {
        type: String,
        unique: true
    },
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model<IComment>('Comment', commentSchema)