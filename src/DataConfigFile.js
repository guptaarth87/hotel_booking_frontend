import delux_ac from './Assets/landing/delux_ac.jpg';
import executive_ac from './Assets/landing/executive_ac.jpg';
import family_sofa from './Assets/landing/family_sofa_room.jpg';
import party_hall from './Assets/landing/party_hall.jpg';
import conference_room from './Assets/landing/conference_room.jpg';
import executive_sofa from './Assets/landing/executive_sofa.jpg';
import video1 from './Assets/landing/landing_video1.mp4';

// galary
import img1 from './Assets/Galary/1.jpg';
import img2 from './Assets/Galary/2.jpg';
import img3 from './Assets/Galary/3.jpg';
import img4 from './Assets/Galary/4.jpg';
import img5 from './Assets/Galary/5.jpg';

export const rooms_data = [
    {
        "type_of_room":"Executive Sofa AC Room",
        "img_url":executive_sofa,
        "images":[delux_ac , executive_ac , family_sofa],
        "description": "Hotel Delux room: A lavish, upscale accommodation featuring luxurious amenities and elegant decor. Equipped with modern comforts, a spacious layout, and scenic views, providing a sophisticated and comfortable stay for guests." ,
        "price":1750
    },
    {
        "type_of_room":"Family Sofa AC Room",
        "img_url":family_sofa,
        "images":[delux_ac , executive_ac , family_sofa],
        "description": "Hotel Delux room: A lavish, upscale accommodation featuring luxurious amenities and elegant decor. Equipped with modern comforts, a spacious layout, and scenic views, providing a sophisticated and comfortable stay for guests.",
        "price":1500
    },
    {
        "type_of_room":"Executive AC Room",
        "img_url":executive_ac,
        "images":[delux_ac , executive_ac , family_sofa],
        "description": "Hotel Delux room: A lavish, upscale accommodation featuring luxurious amenities and elegant decor. Equipped with modern comforts, a spacious layout, and scenic views, providing a sophisticated and comfortable stay for guests.",
        "price":1500
    },
    {
        "type_of_room":"Deluxe AC Room",
        "img_url":delux_ac,
        "images":[delux_ac , executive_ac , family_sofa],
        "description": "Hotel Delux room: A lavish, upscale accommodation featuring luxurious amenities and elegant decor. Equipped with modern comforts, a spacious layout, and scenic views, providing a sophisticated and comfortable stay for guests.",
        "price":950
    },
    {
        "type_of_room":"Conference AC Room",
        "img_url":conference_room,
        "images":[delux_ac , executive_ac , family_sofa],
        "description": "Hotel Delux room: A lavish, upscale accommodation featuring luxurious amenities and elegant decor. Equipped with modern comforts, a spacious layout, and scenic views, providing a sophisticated and comfortable stay for guests.",
        "price":1000
    },
    {
        "type_of_room":"Party hall",
        "img_url":party_hall,
        "images":[delux_ac , executive_ac , family_sofa],
        "description": "Hotel Delux room: A lavish, upscale accommodation featuring luxurious amenities and elegant decor. Equipped with modern comforts, a spacious layout, and scenic views, providing a sophisticated and comfortable stay for guests.",
        "price":10000
    }
   
]

export const LandingpageData ={
    "video1":video1,
    "room_section_img":delux_ac,
    "room_section_data1":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam praesentium architecto impedit dolor repudiandae, et,excepturi beatae debitis sint, rerum consectetur distinctio ut nisi! Possimus autem quis voluptates aliquam fugit dignissimos reprehenderit delectus magnam.",
    "room_section_data2":"excepturi beatae debitis sint, rerum consectetur distinctio ut nisi! Possimus autem quis voluptates aliquam fugit dignissimos reprehenderit delectus magnam.",
    "gallary_section_img":conference_room,
    "gallary_section_data1": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam praesentium architecto impedit dolor repudiandae, et",
     "gallary_section_data2":"excepturi beatae debitis sint, rerum consectetur distinctio ut nisi! Possimus autem quis voluptates aliquam fugit dignissimos reprehenderit delectus magnam."
}

export const BasicInfo = {
    "address" :"Jhabua road ,Aspatal chauraha ,  Meghnagar",
    "phone_no":"+91 9752450044",
}

export const GallaryImages = {
    "img1":img1,
    "img2":img2,
    "img3":img3,
    "img4":img4,
    "img5":img5,
}