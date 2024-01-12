import '../styles/preferenceTour.scss'
import { preferenceData, publicHolidays } from '../data'
import {useDispatch, useSelector} from 'react-redux'
import { countTotalBookingAmount, setPreference } from '../features/booking/bookingSlice'
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {format} from 'date-fns'


const CardData = ({cardData, day, selectedDate}) => {
    const {pref, pricing}  = useSelector(state => state.booking)
    const dispatch = useDispatch()
    let price;
    const formatDateToFull = selectedDate && format(selectedDate, 'PPP')
    const publicHoliday = publicHolidays.includes(formatDateToFull)
    
    if(day === 'Sat' || day === 'Sun') {
        price = cardData.price.weekend.adult
    } else if(publicHoliday) {
        price = cardData.price.weekend.adult
    } else{
        price = cardData.price.weekday.adult
    }
    return (
        <div className="prefrenceTabCard">
        <h1>{cardData.title}</h1>
        <div className="content">
             <p>MYR {price}</p>
            
            <button onClick={() => {
                dispatch(setPreference({pref: cardData.title}))
            }}>{pref === cardData.title ? "✔ Selected": "Select"}</button>
        </div>
        <ul>
            {
                cardData.details.map((d, index) => (
                    <li key={index}>{d}</li>
                ))
            }
        </ul>
    </div>
    )
}

const PreferenceTour = ({data, day, selectedDate}) => {
  return (
    <section className='prefrenceTab'>
        <h1>Select your preference</h1>
        <div className="prefrenceTabCardContainer">
            {
                data.map((data,i) => (
                    <CardData key={i} cardData={data} day={day} selectedDate={selectedDate} />
                ))
            }
            
        </div>
    </section>
  )
}

export default PreferenceTour