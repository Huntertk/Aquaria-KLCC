import '../styles/preferenceTour.scss'
import { preferenceData } from '../data'
import {useDispatch, useSelector} from 'react-redux'
import { countTotalBookingAmount, setPreference } from '../features/booking/bookingSlice'
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const CardData = ({data, day}) => {
    const {pref, pricing}  = useSelector(state => state.booking)
    const dispatch = useDispatch()
    console.log(data.title);
    console.log(day);
    console.log(pricing);
    return (
        <div className="prefrenceTabCard">
        <h1>{data.title}</h1>
        <div className="content">
        
            {day === 'Sat' && data.title === 'Non Malaysian Citizens'  && <p>MYR {day === 'Sat'  && pricing.nonMalaysian.weekends.adult}</p>}
            {day === 'Sun' && data.title === 'Non Malaysian Citizens'  && <p>MYR {day === 'Sun'  && pricing.nonMalaysian.weekends.adult}</p>}

            {day === 'Mon' && data.title === 'Non Malaysian Citizens'  && <p>MYR {day === 'Mon'  && pricing.nonMalaysian.weekdays.adult}</p>}
            {day === 'Tue' && data.title === 'Non Malaysian Citizens'  && <p>MYR {day === 'Tue'  && pricing.nonMalaysian.weekdays.adult}</p>}
            {day === 'Wed' && data.title === 'Non Malaysian Citizens'  && <p>MYR {day === 'Wed'  && pricing.nonMalaysian.weekdays.adult}</p>}
            {day === 'Thu' && data.title === 'Non Malaysian Citizens'  && <p>MYR {day === 'Thu'  && pricing.nonMalaysian.weekdays.adult}</p>}
            {day === 'Fri' && data.title === 'Non Malaysian Citizens'  && <p>MYR {day === 'Fri'  && pricing.nonMalaysian.weekdays.adult}</p>}


            {day === 'Sat' && data.title === 'Malaysian Citizens'  && <p>MYR {day === 'Sat'  && pricing.malaysian.weekends.adult}</p>}
            {day === 'Sun' && data.title === 'Malaysian Citizens'  && <p>MYR {day === 'Sun'  && pricing.malaysian.weekends.adult}</p>}

            {day === 'Mon' && data.title === 'Malaysian Citizens'  && <p>MYR {day === 'Mon'  && pricing.malaysian.weekdays.adult}</p>}
            {day === 'Tue' && data.title === 'Malaysian Citizens'  && <p>MYR {day === 'Tue'  && pricing.malaysian.weekdays.adult}</p>}
            {day === 'Wed' && data.title === 'Malaysian Citizens'  && <p>MYR {day === 'Wed'  && pricing.malaysian.weekdays.adult}</p>}
            {day === 'Thu' && data.title === 'Malaysian Citizens'  && <p>MYR {day === 'Thu'  && pricing.malaysian.weekdays.adult}</p>}
            {day === 'Fri' && data.title === 'Malaysian Citizens'  && <p>MYR {day === 'Fri'  && pricing.malaysian.weekdays.adult}</p>}


            <button onClick={() => {
                dispatch(setPreference({pref: data.title}))
                dispatch(countTotalBookingAmount({totalAmount: data.price}))
            }}>{pref === data.title ? "✔ Selected": "Select"}</button>
        </div>
        <ul>
            {
                data.details.map((d, index) => (
                    <li key={index}>{d}</li>
                ))
            }
        </ul>
    </div>
    )
}

const PreferenceTour = ({day}) => {
  return (
    <section className='prefrenceTab'>
        <h1>Select your preference</h1>
        <div className="prefrenceTabCardContainer">
            {
                preferenceData.map((data) => (
                    <CardData key={data.id} data={data} day={day} />
                ))
            }
            
        </div>
    </section>
  )
}

export default PreferenceTour