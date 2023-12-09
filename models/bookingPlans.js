import mongoose from 'mongoose'

const bookingPlanSchema = new mongoose.Schema({
    title:{
        type: String
    },
    desc:{
        type: String
    },
    type:{
        type: String
    },
    image:{
        type:[String]
    },
    pricing: {
        malaysian:{
            weekends:{
                adult:{type:Number},
                child:{type:Number},
                senior:{type:Number},
            },
            weekdays:{
                adult:{type:Number},
                child:{type:Number},
                senior:{type:Number},
            }
        },
        nonMalaysian:{
            weekends:{
                adult:{type:Number},
                child:{type:Number},
                senior:{type:Number},
            },
            weekdays:{
                adult:{type:Number},
                child:{type:Number},
                senior:{type:Number},
            }
        }
    },
}, {timestamps: true})

const BookingPlan = mongoose.model('bookingPlan', bookingPlanSchema)
export default BookingPlan