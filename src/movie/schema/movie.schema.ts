import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export interface IMovie extends Document {
  title: string;
  year?: number;
  imdbId?: string;
  poster?: string;
  userId: Types.ObjectId | string;
}

@Schema()
export class Movie {
  @Prop({ required: true })
  title: string;

  @Prop()
  year?: number;

  @Prop()
  imdbId?: string;

  @Prop()
  poster?: string;

  @Prop()
  userId: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);