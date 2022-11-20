import { Document } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class Car extends Document {
  @Prop({ unique: true, index: true })
  name: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
