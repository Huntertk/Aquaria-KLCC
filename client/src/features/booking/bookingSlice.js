import { createSlice } from "@reduxjs/toolkit";
import { setBookingDetailsFromLocalStorage, getBookingDetailsFromLocalStorage } from "../../utils/localStorage";
import { toast } from 'react-toastify';


const initialState = {
    adultCount:0,
    childCount:0,
    seniorCount:0,
    adultTotal: 0,
    childTotal: 0,
    seniorTotal: 0,
    generalCount:0,
    generalTotal:0,
    totalAmount: 0,
    isPaxModal: false,
    loading: false,
    totalAmount: 0,
    bookingDate: "",
    name:"", 
    email:"",
    mobileNumber:"",
    bookingResponse: "",
    responseClientUrl:"",
    type:"",
    totalBookingsCount: 0,
    bookingDay: "",
    bookingId:"",
    pref:"",
    bookingTitle:"",
    pricing:{}
}


const bookingSlice = createSlice({
    name:'booking',
    initialState: getBookingDetailsFromLocalStorage() || initialState,
    reducers:{
        adultCountIncrease : (state, action) => {
            state.adultCount = state.adultCount + 1
        },
        adultCountDecrease : (state, action) => {
            state.adultCount = state.adultCount - 1
        },


        generalCountIncrease : (state, action) => {
            state.generalCount = state.generalCount + 1
        },
        generalCountDecrease : (state, action) => {
            state.generalCount = state.generalCount - 1
        },
        childCountIncrease : (state, action) => {
            state.childCount = state.childCount + 1
        },
        childCountDecrease : (state, action) => {
            state.childCount = state.childCount - 1
        },
        infantCountIncrease : (state, action) => {
            state.infantCount = state.infantCount + 1
        },
        infantCountDecrease : (state, action) => {
            state.infantCount = state.infantCount - 1
        },
        seniorCountIncrease : (state, action) => {
            state.seniorCount = state.seniorCount + 1
        },
        seniorCountDecrease : (state, action) => {
            state.seniorCount = state.seniorCount - 1
        },

        generalTotalAmount: (state) => {
            state.generalTotal = state.generalCount * 75
        },
        adultTotalAmount: (state) => {
            // 
            //First
            if(state.type === 'bookTypeOne'){
                if(state.pref === "Malaysian Citizens") {
                    if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                        state.adultTotal = state.adultCount *  state.pricing.malaysian.weekends.adult
                        return 
                    }else{
                        state.adultTotal = state.adultCount *  state.pricing.malaysian.weekdays.adult
                        return 

                    }
                } else if(state.pref === "Non Malaysian Citizens"
                ){
                    if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                        state.adultTotal = state.adultCount *  state.pricing.nonMalaysian.weekends.adult
                        return 
                    }else{
                        state.adultTotal = state.adultCount *  state.pricing.nonMalaysian.weekdays.adult
                        return 

                    } 
                }
            } 
        },
        childTotalAmount: (state) => {
            //First
            if(state.type === 'bookTypeOne'){
                if(state.pref === "Malaysian Citizens") {
                    if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                        state.childTotal = state.childCount *  state.pricing.malaysian.weekends.child
                        return 
                    }else{
                        state.childTotal = state.childCount *  state.pricing.malaysian.weekdays.child
                        return 

                    }
                } else if(state.pref === "Non Malaysian Citizens"
                ){
                    if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                        state.childTotal = state.childCount *  state.pricing.nonMalaysian.weekends.child
                        return 
                    }else{
                        state.childTotal = state.childCount *  state.pricing.nonMalaysian.weekdays.child
                        return 

                    } 
                }
            } 
        },
        seniorTotalAmount: (state) => {
            //First
            if(state.type === 'bookTypeOne'){
                if(state.pref === "Malaysian Citizens") {
                    if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                        state.seniorTotal = state.seniorCount *  state.pricing.malaysian.weekends.senior
                        return 
                    }else{
                        state.seniorTotal = state.seniorCount *  state.pricing.malaysian.weekdays.senior
                        return 

                    }
                } else if(state.pref === "Non Malaysian Citizens"
                ){
                    if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                        state.seniorTotal = state.seniorCount *  state.pricing.nonMalaysian.weekends.senior
                        return 
                    }else{
                        state.seniorTotal = state.seniorCount *  state.pricing.nonMalaysian.weekdays.senior
                        return 

                    } 
                }
            } 
        },

        setPreference: (state, action) => {
            state.pref = action.payload.pref
            // setBookingDetailsFromLocalStorage(state)
        },
        countTotalBookingAmount: (state, action) => {
            state.totalAmount = state.adultTotal + state.childTotal + state.seniorTotal + state.generalTotal
            state.bookingResponse = ""
            // setBookingDetailsFromLocalStorage(state)
        },
        setBookingDate: (state, action) => {
            state.bookingDate = action.payload.selectedBookingDate
            state.bookingResponse = ""
            state.bookingDay = action.payload.selectedDay.split(' ')[0]
            // setBookingDetailsFromLocalStorage(state)
        },
        openPaxModel: (state) => {
            state.isPaxModal = true
        },
        closePaxModel: (state) => {
            state.isPaxModal = false
        }, 
        cancelBooking: (state) => {
            setBookingDetailsFromLocalStorage(initialState)
            toast.warning("Booking Cancel")
            return state = initialState
        }, 
        bookingStart: (state,action) =>{
            state.loading  = true
            state.bookingResponse = ""
            
        },
        bookingSucess: (state, action) => {
            state.loading  = false
            state.name = action.payload.name
            state.email = action.payload.email
            state.mobileNumber = action.payload.mobileNumber
            state.bookingResponse = action.payload.bookingResponse
            state.totalBookingsCount = action.payload.totalBookingsCount
            state.responseClientUrl = action.payload.responseClientUrl
            console.log(state);
            setBookingDetailsFromLocalStorage(state)
        },
        bookingFailed: (state, action) => {
            state.loading = false
            toast.error("Booking Failed")
        },
        bookingConfirm: (state, action) => {
            setBookingDetailsFromLocalStorage(initialState)
            return state = initialState
        },
        choosingBooking: (state, action) => {
            state.type = action.payload.type
            state.bookingTitle = action.payload.title
            state.pricing = action.payload.pricing
            // setBookingDetailsFromLocalStorage(state)
        },
        settingBookingResponse: (state, action) => {
            state.bookingResponse = ""
            state.bookingId = action.payload.createBookingId
            setBookingDetailsFromLocalStorage(state)
        },
        initialRender: (state) => {
            setBookingDetailsFromLocalStorage(initialState)
            return state = initialState
        },
    }
})

export const {
    adultCountIncrease, 
    adultCountDecrease, 
    childCountIncrease, 
    childCountDecrease,
    infantCountDecrease,
    infantCountIncrease,
    seniorCountDecrease,
    seniorCountIncrease,
    adultTotalAmount,
    childTotalAmount,
    infantTotalAmount,
    seniorTotalAmount,
    countTotalBookingAmount, 
    setBookingDate,
    openPaxModel,
    closePaxModel,
    cancelBooking,
    bookingFailed,
    bookingSucess,
    bookingStart,
    bookingConfirm,
    choosingBooking,
    settingBookingResponse,
    initialRender,
    setPreference,
    generalCountDecrease,
    generalCountIncrease,
    generalTotalAmount
} = bookingSlice.actions

export default bookingSlice.reducer