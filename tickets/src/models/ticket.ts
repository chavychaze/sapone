import mongoose from 'mongoose';

/**
 * An Interface that describe the properties
 * that are required to create a new Ticket
 */
interface TicketAttrs {
  title: string;
  price: number;
  userId: string;
}

/**
 * An Interface that describes the properties
 * that a Ticket Document has
 */
interface TicketDoc extends mongoose.Document {
  title: string;
  price: number;
  userId: string;
}

/**
 * An Interface that describe the porperties
 * that a Ticket Model has
 */
interface TicketModel extends mongoose.Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc;
}

const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
      versionKey: false,
    },
  },
);

ticketSchema.statics.build = (attrs: TicketAttrs) => {
  return new Ticket(attrs);
};

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);

export { Ticket };
