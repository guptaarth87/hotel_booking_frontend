import gallary_img from './Assets/landing/gallary_img.jpg';
import room_img from './Assets/landing/room_img.jpg';
import video1 from './Assets/landing/landing_video1.mp4';




import ac_delux1 from './Assets/rooms images/ac delux/1.jpg'
import ac_delux2 from './Assets/rooms images/ac delux/2.jpg'
import ac_delux3 from './Assets/rooms images/ac delux/3.jpg'

import ac_family_sofa1 from './Assets/rooms images/ac family sofa/1.jpg'
import ac_family_sofa2 from './Assets/rooms images/ac family sofa/2.jpg'
import ac_family_sofa3 from './Assets/rooms images/ac family sofa/3.jpg'

import conference_room1 from './Assets/rooms images/conference room/1.jpg'
import conference_room2 from './Assets/rooms images/conference room/2.jpg'
import conference_room3 from './Assets/rooms images/conference room/3.jpg'

import executive_ac1 from './Assets/rooms images/executive ac/1.jpg'
import executive_ac2 from './Assets/rooms images/executive ac/2.jpg'
import executive_ac3 from './Assets/rooms images/executive ac/3.jpg'

import executive_sofa1 from './Assets/rooms images/executive sofa/1.jpg'
import executive_sofa2 from './Assets/rooms images/executive sofa/2.jpg'
import executive_sofa3 from './Assets/rooms images/executive sofa/3.jpg'

import party_hall1 from './Assets/rooms images/party hall/1.jpg'
import party_hall2 from './Assets/rooms images/party hall/2.jpg'
import party_hall3 from './Assets/rooms images/party hall/3.jpg'
// galary
import img1 from './Assets/Galary/1.jpg';
import img2 from './Assets/Galary/2.jpg';
import img3 from './Assets/Galary/3.jpg';
import img4 from './Assets/Galary/4.jpg';
import img5 from './Assets/Galary/5.jpg';

//Remember not to edit images and names of rooms 
//You can edit
//1. tag_line
//2. description
//3. price
//4. room_section_data1
//5. room_section_data2
//6. gallary_section_data1
//7. gallary_section_data2
//8. BasicInfo
//9.  Phone no
//10. Address
//11. NoteData
//For change in images go to Assets folder in src folder and change images

export const rooms_data = [
    {
        "type_of_room":"Executive Sofa AC Room",
        "img_url":executive_sofa1,
        "images":[executive_sofa1,executive_sofa2,executive_sofa3],
        "tag_line":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perspiciatis.",
        "description": "Hotel Delux room: A lavish, upscale accommodation featuring luxurious amenities and elegant decor. Equipped with modern comforts, a spacious layout, and scenic views, providing a sophisticated and comfortable stay for guests." ,
        "price":1750
    },
    {
        "type_of_room":"Family Sofa AC Room",
        "img_url":ac_family_sofa1,
        "images":[ac_family_sofa1,ac_family_sofa2,ac_family_sofa3],
        "tag_line":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perspiciatis.",
        "description": "Hotel Delux room: A lavish, upscale accommodation featuring luxurious amenities and elegant decor. Equipped with modern comforts, a spacious layout, and scenic views, providing a sophisticated and comfortable stay for guests.",
        "price":1500
    },
    {
        "type_of_room":"Executive AC Room",
        "img_url":executive_ac1,
        "images":[executive_ac1,executive_ac2,executive_ac3],
        "tag_line":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perspiciatis.",
        "description": "Hotel Delux room: A lavish, upscale accommodation featuring luxurious amenities and elegant decor. Equipped with modern comforts, a spacious layout, and scenic views, providing a sophisticated and comfortable stay for guests.",
        "price":1500
    },
    {
        "type_of_room":"Deluxe AC Room",
        "img_url":ac_delux1,
        "images":[ac_delux1 , ac_delux2, ac_delux3, ],
        "tag_line":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perspiciatis.",
        "description": "Hotel Delux room: A lavish, upscale accommodation featuring luxurious amenities and elegant decor. Equipped with modern comforts, a spacious layout, and scenic views, providing a sophisticated and comfortable stay for guests.",
        "price":950
    },
    {
        "type_of_room":"Conference AC Room",
        "img_url":conference_room1,
        "images":[conference_room1 , conference_room2 , conference_room3],
        "tag_line":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perspiciatis.",
        "description": "Hotel Delux room: A lavish, upscale accommodation featuring luxurious amenities and elegant decor. Equipped with modern comforts, a spacious layout, and scenic views, providing a sophisticated and comfortable stay for guests.",
        "price":1000
    },
    {
        "type_of_room":"Party hall",
        "img_url":party_hall1,
        "images":[party_hall1 ,party_hall2 , party_hall3],
        "tag_line":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perspiciatis.",
        "description": "Hotel Delux room: A lavish, upscale accommodation featuring luxurious amenities and elegant decor. Equipped with modern comforts, a spacious layout, and scenic views, providing a sophisticated and comfortable stay for guests.",
        "price":10000
    }
   
]

export const LandingpageData ={
    "video1":video1,
    "room_section_img":room_img,
    "room_section_data1":" Lorem ipsum dolor sit amet consectetur adipisicing elit. debitis sint, rerum consectetur distinctio ut nisi! Possimus autem quis voluptates aliquam fugit dignissimos reprehenderit delectus magnam.",
    "room_section_data2":"excepturi beatae debitis sint, rerum consectetur distinctio ut nisi! Possimus autem quis voluptates aliquam fugit dignissimos reprehenderit delectus magnam.",
    "gallary_section_img":gallary_img,
    "gallary_section_data1": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam praesentium architecto impedit dolor repudiandae, et",
     "gallary_section_data2":"excepturi beatae debitis sint, rerum consectetur distinctio ut nisi! Possimus autem quis voluptates aliquam fugit dignissimos reprehenderit delectus magnam."
}

export const BasicInfo = {
    "name": "Hotel Amar Shanti",
    "address" :"Jhabua road ,Aspatal chauraha ,  Meghnagar",
    "phone_no":"+91 9752450044",
}

export const NoteData = [
    "1. Booking of the room will be confirmed after payment of at least 50% of the total amount.",
    "2. Check-out time of room is 24 hours",
    "3. Don’t forget to carry your Identity (Linke Aadhaar card, pan card etc)",
    "4.There are extra charges for extra bed that is 500/-",
    "5. There are extra charges for extra driver bed that is 250/-"
]

export const GallaryImages = {
    "img1":img1,
    "img2":img2,
    "img3":img3,
    "img4":img4,
    "img5":img5,
}