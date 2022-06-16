import { Schema, model } from "mongoose"

interface IAlbum {
    userId: number,
    id: string,
    title: string
};

const albumSchema = new Schema<IAlbum>({
    userId: { type: Number, required: true },
    id: { type: String, required: true},
    title: {  type: String}
});

const Album = model<IAlbum>('Album', albumSchema);

export default Album;