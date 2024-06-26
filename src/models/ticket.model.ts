import { Schema, model, Types } from 'mongoose';

const TicketSchema = new Schema({
    ticketName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    event: {
        type: Types.ObjectId,
        ref: 'event',
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Ticket = model('ticket', TicketSchema);
export default Ticket;