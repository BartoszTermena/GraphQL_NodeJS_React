const Event = require('../../models/event');
const Booking = require('../../models/booking');
const { transformBooking, transformEvent } = require('./merge');




module.exports = {
    bookings: async () => {
        try {
            const bookings = await Booking.find();
            return bookings.map(booking => {
                return transformBooking(booking)
            })
        } catch (err) {
            throw err;
        }
    },
    bookEvent: async args => {
        const fetchedEvent = await Event.findOne({
            _id: args.eventId
        });
        const booking = new Booking({
            user: '5c2caa7b2ca43a0bf4661e78',
            event: fetchedEvent
        });
        const result = await booking.save();
        return transformBooking(result)
    },
    cancelBooking: async args => {
        try {
            const booking = await Booking.findById(args.bookingId).populate('event')
            const event = {
                ...booking.event._doc, 
                _id: booking.event._doc.id, 
                creator: user.bind(this,booking.event._doc.creator)
            };
            await Booking.deleteOne({_id: args.bookingId});
            return event;
        } catch (err) {
            throw err;
        }
    }
};