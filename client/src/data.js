import { v4 as uuidv4 } from 'uuid';

//First

import outdoorThemeParkImgOne from './assets/images/outdoorThemeParkImgOne.avif'
import outdoorThemeParkImgTwo from './assets/images/outdoorThemeParkImgTwo.avif'
import outdoorThemeParkImgThree from './assets/images/outdoorThemeParkImgThree.avif'
import outdoorThemeParkImgFour from './assets/images/outdoorThemeParkImgFour.avif'
import outdoorThemeParkImgFive from './assets/images/outdoorThemeParkImgFive.avif'
import outdoorThemeParkImgSix from './assets/images/outdoorThemeParkImgSix.avif'
import outdoorThemeParkImgSeven from './assets/images/outdoorThemeParkImgSeven.avif'

//Second
import gentingAwanaskyWayImgOne from './assets/images/gentingAwanaskyWayImgOne.avif'
import gentingAwanaskyWayImgTwo from './assets/images/gentingAwanaskyWayImgTwo.avif'
import gentingAwanaskyWayImgThree from './assets/images/gentingAwanaskyWayImgThree.avif'
import gentingAwanaskyWayImgFour from './assets/images/gentingAwanaskyWayImgFour.avif'
import gentingAwanaskyWayImgFive from './assets/images/gentingAwanaskyWayImgFive.avif'
import gentingAwanaskyWayImgSix from './assets/images/gentingAwanaskyWayImgSix.avif'
import gentingAwanaskyWayImgSeven from './assets/images/gentingAwanaskyWayImgSeven.avif'
import gentingAwanaskyWayImgEight from './assets/images/gentingAwanaskyWayImgEight.avif'
import gentingAwanaskyWayImgNine from './assets/images/gentingAwanaskyWayImgNine.avif'
import gentingAwanaskyWayImgTen from './assets/images/gentingAwanaskyWayImgTen.avif'

//Third
import gentingSkyWorldsThemeParkSkytropolisIndoorThemeParkImgOne from './assets/images/gentingSkyWorldsThemeParkSkytropolisIndoorThemeParkImgOne.avif'
import gentingSkyWorldsThemeParkSkytropolisIndoorThemeParkImgTwo from './assets/images/gentingSkyWorldsThemeParkSkytropolisIndoorThemeParkImgTwo.avif'
import gentingSkyWorldsThemeParkSkytropolisIndoorThemeParkImgThree from './assets/images/gentingSkyWorldsThemeParkSkytropolisIndoorThemeParkImgThree.avif'
import gentingSkyWorldsThemeParkSkytropolisIndoorThemeParkImgFour from './assets/images/gentingSkyWorldsThemeParkSkytropolisIndoorThemeParkImgFour.avif'
import gentingSkyWorldsThemeParkSkytropolisIndoorThemeParkImgFive from './assets/images/gentingSkyWorldsThemeParkSkytropolisIndoorThemeParkImgFive.avif'
import gentingSkyWorldsThemeParkSkytropolisIndoorThemeParkImgSix from './assets/images/gentingSkyWorldsThemeParkSkytropolisIndoorThemeParkImgSix.avif'
import gentingSkyWorldsThemeParkSkytropolisIndoorThemeParkImgSeven from './assets/images/gentingSkyWorldsThemeParkSkytropolisIndoorThemeParkImgSeven.avif'

//Fourth
import gentingAwanaSkyWayOnewaySkyworldOutdoorThemeParkTicketsImgOne from './assets/images/gentingAwanaSkyWayOnewaySkyworldOutdoorThemeParkTicketsImgOne.avif'
import gentingAwanaSkyWayOnewaySkyworldOutdoorThemeParkTicketsImgTwo from './assets/images/gentingAwanaSkyWayOnewaySkyworldOutdoorThemeParkTicketsImgTwo.avif'
import gentingAwanaSkyWayOnewaySkyworldOutdoorThemeParkTicketsImgThree from './assets/images/gentingAwanaSkyWayOnewaySkyworldOutdoorThemeParkTicketsImgThree.avif'
import gentingAwanaSkyWayOnewaySkyworldOutdoorThemeParkTicketsImgFour from './assets/images/gentingAwanaSkyWayOnewaySkyworldOutdoorThemeParkTicketsImgFour.avif'

//Fifth
import gentingAwanaSkywayOnewaySkyworldOutdoorSkytropolisIndoorThemeParkImgOne from './assets/images/gentingAwanaSkywayOnewaySkyworldOutdoorSkytropolisIndoorThemeParkImgOne.avif'
import gentingAwanaSkywayOnewaySkyworldOutdoorSkytropolisIndoorThemeParkImgTwo from './assets/images/gentingAwanaSkywayOnewaySkyworldOutdoorSkytropolisIndoorThemeParkImgTwo.avif'
import gentingAwanaSkywayOnewaySkyworldOutdoorSkytropolisIndoorThemeParkImgThree from './assets/images/gentingAwanaSkywayOnewaySkyworldOutdoorSkytropolisIndoorThemeParkImgThree.avif'
import gentingAwanaSkywayOnewaySkyworldOutdoorSkytropolisIndoorThemeParkImgFour from './assets/images/gentingAwanaSkywayOnewaySkyworldOutdoorSkytropolisIndoorThemeParkImgFour.avif'




export const cardData = [
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/B6CTYdHx/Whats-App-Image-2023-12-07-at-09-42-16-1.jpg",
            "https://i.postimg.cc/k4CNyn6J/Whats-App-Image-2023-12-07-at-09-42-16-2.jpg",
            "https://i.postimg.cc/N0m7Ty0C/Whats-App-Image-2023-12-07-at-09-42-15-1.jpg",
            "https://i.postimg.cc/VvGj1n7v/Whats-App-Image-2023-12-07-at-09-42-16.jpg"
        ],
        title:" Aquaria KLCC",
        desc:"Surpass the long queues and head straight to Kuala Lumpur’s Aquaria KLCC, listed among one of Asia's top five aquariums.",
        type:"bookTypeOne",
        price: 45,
        preference:[
            {
                id: uuidv4(),
                prefType:"Malaysian Citizens",
                prefPrice: 45,
                prefDetails:[
                    "Skip-the-line admission into Aquaria KLCC",
                    "Access to all exhibits",
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                id: uuidv4(),
                prefType:"Non Malaysian Citizens",
                prefPrice: 61,
                prefDetails:[
                    "Skip-the-line admission into Aquaria KLCC",
                    "Access to all exhibits",
                    "Valid only for Non-Malaysian Citizens"
                ]
            },
            {
                id: uuidv4(),
                prefType:"Family Discount Pack: Malaysian Citizen",
                prefPrice: 150,
                prefDetails:[
                    "Valid for 2 adults and 2 children",
                    "Skip-the-line admission into Aquaria KLCC",
                    "Access to all exhibits",
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                id: uuidv4(),
                prefType:"Family Discount Pack: Non-Malaysian Citizen",
                prefPrice: 200,
                prefDetails:[
                    "Valid for 2 adults and 2 children",
                    "Skip-the-line admission into Aquaria KLCC",
                    "Access to all exhibits",
                    "Valid only for Non-Malaysian Citizens"
                ]
            },
        ]
        

    },
    
]






export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/0yL0bG9J/Whats-App-Image-2023-12-07-at-09-42-15-2.jpg",
        desc:"An advanced oceanarium, featuring more than 5,000 diverse aquatic andterrestrial creatures in their native environments, all housed within anexpansive 60,000 square-foot area."
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/N0m7Ty0C/Whats-App-Image-2023-12-07-at-09-42-15-1.jpg",
        desc:"Introducing a Living Ocean exhibit that includes a 90-meter transparent tunnel walkway, providing visitors with a firsthand encounter with over 7distinct species of sharks, including Sand Tiger sharks, Giant Stingrays, Marine turtles, and schools of other fishes"
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/B6CTYdHx/Whats-App-Image-2023-12-07-at-09-42-16-1.jpg",
        desc:"Embarking on a journey of exploration, visitors discover the rich biospherefound in Malaysia and beyond. The adventure unfolds through diverselandscapes, from jungle streams and mangroves to coastal shores andthe depths of the oceans."
    },    
]



export const thingsTodo = [
    {
        id: uuidv4(),
        title:"Feed the sea creatures",
        desc:"Tourists at the aquarium can observe professional feedings for piranhas, chameleons, giant stingrays, eels, sharks, and various other marine species.",
        image: "https://i.postimg.cc/j2Zh5Gjs/Picture.png"
    },
    {
        id: uuidv4(),
        title:"Take a leisurely walk through the Living Ocean exhibit",
        desc:"Embark on a stroll through the 90-meter transparent tunnel at Aquaria KLCC, where you can observe sea turtles, sharks, eels, and other captivating marineanimals swimming around you.",
        image: "https://i.postimg.cc/N0m7Ty0C/Whats-App-Image-2023-12-07-at-09-42-15-1.jpg"
    },
    {
        id: uuidv4(),
        title:"Greet the playful otters at the Otter Den",
        desc:"This area is among the initial sections you'll discover at the marine park. Additionally, the otters are recognized as some of the most adorablelandanimals at Aquaria!",
        image: "https://i.postimg.cc/9fRgkFQy/Otter.jpg"
    },
    {
        id: uuidv4(),
        title:"Witness the marvel of peculiar creatures in the Weird and Wonderful exhibition.",
        desc:"Experience enchantment as you encounter bioluminescent fish and agiant octopus in this gallery illuminated by vibrant neon lights.",
        image: "https://i.postimg.cc/3x6n25FN/Insect.jpg    "
    },
    {
        id: uuidv4(),
        title:"Engage in a hands-on experience and get up close and personal with a variety of critters at the Touch Pool",
        desc:"Explore the distinctive textures of marine animals, ranging frombamboosharks to horseshoe crabs, in this engaging exhibition.",
        image: "https://i.postimg.cc/2jFcMtr9/pox5ytttbdetmuughdnv.jpg"
    },
]


export const preferenceData = [
    
    {
        id: uuidv4(),
        title: "Combo: 1-Day Pass + Two-Way Standard Gondola Ride",
        price: 171,
        details:[
            "Access to Genting Awana SkyWay standard gondola", 
            "Two-way ride",
            "1-day admission to Genting SkyWorlds Theme Park"
        ]
    },
    {
        id: uuidv4(),
        title: "1-Day Pass",
        price: 151,
        details:["1-day admission to Genting SkyWorlds Theme Park"]
    },
    {
        id: uuidv4(),
        title: "1-Day Pass with Photo",
        price: 179,
        details:[
            "Photo opportunity",
            "1-day admission to Genting SkyWorlds Theme Park"
        ]
    },
    {
        id: uuidv4(),
        title: "Combo: Genting SkyWorlds Theme Park + Skytropolis Indoor Theme Park Tickets",
        price: 215,
        details:[
            "Admission to Genting Skytropolis",
            "Admission to Genting SkyWorlds",
            "Complimentary up to 6 VQ reservations"
        ]
    }
]





export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"Can I bring food inside Aquaria KLCC?",
        ans:"No. Food and drinks is prohibited inside"
    },
    {
        id: uuidv4(),
        ques:"Do I have to book a time slot to enter Aquaria KLCC?",
        ans:"No, you may enter anytime within the operation hours."
    },
    {
        id: uuidv4(),
        ques:"When is the Best Time to Visit Genting SkyWorlds?",
        ans:"The park operates daily from 11:00 AM to 6:00 PM. For a more relaxed experience, consider avoiding the peak season from June to September. Optimal times are during the off-season from September to November and January to March, while April and May can be warmer."
    },
    {
        id: uuidv4(),
        ques:"Does my 2 years old baby need to buy ticket to enter Aquaria KLCC?",
        ans:"No, 2 years old and below can enter for FREE."
    },
    {
        id: uuidv4(),
        ques:"Can I bring stroller/wheelchair inside Aquaria KLCC?",
        ans:"Yes, you may bring."
    },
    {
        id: uuidv4(),
        ques:"How long can I stay inside Aquaria KLCC?",
        ans:"You may stay as long as you want, no time limit."
    },
    {
        id: uuidv4(),
        ques:". What is the last entry time for Aquaria KLCC?",
        ans:"7pm is the last entry time, everyday."
    },
    {
        id: uuidv4(),
        ques:"Can I bring camera inside the Aquaria KLCC?",
        ans:"Yes you may bring but please love the marine life and never use your Flash as it might disturb them. Monopods and Tripods are not allowed."
    },
    {
        id: uuidv4(),
        ques:"How can I park my car if I bring my own vehicle?",
        ans:"You may park it at Suria KLCC Basement parking."
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "10 am to 8pm, Opens everyday", 
        ]
    },
    {
        id: uuidv4(),
        ques:"For Your Concern",
        ans:[
            "Adult age: 13 to 59 years old.",
            "Child age is 3 to 12 years old",
            "Senior Citizen age is 60 years and above."
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter"]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:["You may use the tickets within 30 days frompurchased date."]
    },
]


export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]