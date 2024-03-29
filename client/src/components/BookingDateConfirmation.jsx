import React, { useState } from 'react'
import '../styles/bookingDateConfirmation.scss'
import 'react-day-picker/dist/style.css';
import './day-picker.css';
import { format,differenceInCalendarDays } from 'date-fns';
// import PaxModal from './PaxModal';
import { DayPicker, Row } from 'react-day-picker';
import { useDispatch, useSelector } from 'react-redux';
import { openPaxModel, setBookingDate } from '../features/booking/bookingSlice';
import {Navigate, useNavigate} from 'react-router-dom'
import PreferenceTour from './PreferenceTour';
import PaxModal from './PaxModal';


function isPastDate(date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props) {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return <></>;
  return <Row {...props} />;
}

const DateBtn = ({setSelectedDate, setCalenderOpen,selectedDate, calenderOpen}) => {
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    function getDayName(date) {
        return new Date(date).toLocaleDateString('en-US', {weekday: 'short'});
    }
    const day = new Date().getDay()
    const date = new Date(Date.now()).getDate()
    return (
        <div className="dateBtnContainer">
           
           <button 
           className={selectedDate?.toString() == new Date(Date.now() + 1000*60*60*24)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24))}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 *24))}
            </span>
            </button>
           <button  
            className={selectedDate?.toString() == new Date(Date.now() + 1000*60*60*24 * 2)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 * 2))}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 *2  ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 * 24 * 2))}
            </span>
            </button>
           <button 
            className={selectedDate?.toString() == new Date(Date.now() + 1000*60*60*24 *3)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 * 3))}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 *3  ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 * 24 * 3))}
            </span>
            </button>
            <button className={selectedDate?.toString() == new Date(Date.now()+ 1000 * 60 *60 * 24 * 4)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now()+ 1000 * 60 *60 * 24 * 4))}
           >
            <span>
                {new Date(Date.now()+ 1000 * 60 *60 * 24 * 4).getDate()}
            </span>
            <span>
                {getDayName(new Date(Date.now()+ 1000 * 60 *60 * 24 * 4))}
            </span>
           </button>
           <button className={calenderOpen ? "moreDates active" : "moreDates"} onClick={() => setCalenderOpen(prev => !prev)}>More Dates</button>
        </div>
    )
}

const BookingDateConfirmation = () => {
    const dispatch = useDispatch()
    const {isPaxModal, bookingDate, type, pref, prefrenceOpt} = useSelector(store => store.booking)
        const [selectedDate, setSelectedDate] = useState("")
        const [calenderOpen, setCalenderOpen] = useState(false)
        // console.log(selectedDate?.toString()?.split(' ')[0]);
        const disabledDays = [
            
          ];

        if(!type){
            return <Navigate to="/" />
        }
        const defaultMonth = new Date(Date.now());

        const navigate = useNavigate()
  return (
    <section className='bookingDateConfirmationMainContainer'>
        <div className="bookingDateWrapper">
            <h1>select date</h1>
            <DateBtn 
            setSelectedDate={setSelectedDate} 
            setCalenderOpen={setCalenderOpen} 
            selectedDate={selectedDate}
            calenderOpen={calenderOpen}
            />
            <div className="moreDatesContainer">
                <DayPicker
            style={calenderOpen === false && {display:'none'}}
            mode="single"
            selected={selectedDate} 
            fromDate={new Date()}
            components={{ Row: OnlyFutureRow }}
            hidden={isPastDate}
            onSelect={setSelectedDate}
            fromMonth={defaultMonth}
            toDate={new Date(Date.now() + 1000 *60*60*24*60)}
            disabled={disabledDays}
            />
            </div>
            {
                selectedDate && type === 'bookTypeOne' && <PreferenceTour data={prefrenceOpt} day={selectedDate?.toString()?.split(' ')[0]} selectedDate={selectedDate} /> 
            }
            {/* <PreferenceTour /> */}
            <div className="selectedDate">
                {
                    selectedDate ? <>
                    <div className='prefrenceAndDateContainer'>
                        <p>{
                            type === 'bookTypeOne' && pref 
                        }</p>
                    <p>You selected {format(selectedDate, 'PPP')}.</p>
                    </div>
                    {
                        type === 'bookTypeOne' && pref ? <button onClick={() => {
                            dispatch(setBookingDate({selectedBookingDate:selectedDate.toString(), selectedDay: selectedDate.toString()}))
                            dispatch(openPaxModel())
                            setCalenderOpen(false)
                        }}>Next</button> : <></>
                    }
                    </> : <p>Select One Date</p>
                }
            </div>
        </div>
        
       { isPaxModal && <PaxModal  selectedDate={selectedDate} />}
        
        
    </section>
  )
}

export default BookingDateConfirmation