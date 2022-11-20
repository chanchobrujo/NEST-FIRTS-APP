import { Document } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class Brand extends Document {
  @Prop({ unique: true, index: true, required: true })
  name: string;

  @Prop({ unique: false, required: true })
  state: boolean;

  @Prop({ unique: false, required: true })
  insertDate: Date;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
