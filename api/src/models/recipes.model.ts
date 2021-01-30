// recipes-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'recipes';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name: { type: String, required: true },
    duree: { type: Number, required: false },
    url: { type: String, required: false },
    quantite: { type: String, required: false },
    instructions: {content:{type:String},required:false,type:Array},
    ingredients: {unit:{type:String},ingredientId:{type:String},quantite:{type:Number},required:false,type:Array},
    type: {type: String, enum:['link','details'], required: true}

  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
