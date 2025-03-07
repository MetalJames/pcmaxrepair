import { MdPhoneIphone, MdPhoneAndroid, MdLaptopMac, MdLaptopWindows, MdMemory, MdTabletMac, MdOutlineWaterDrop, MdOutlineVideogameAsset, MdDevicesOther, MdCheck } from 'react-icons/md';
import { apple, google, microsoft, nintendo, playstation, samsung, xbox } from '../assets/brandswecanfix';
import { computerrepairfaq, generalquestionfaq, iphonerepairfaq, AboutUsImg } from '../assets';
import { slideriphone, sliderlogicboard, slidermacbook, sliderplaystation } from '../assets/sliderimg';

export const navLinks = [
    {
        id: "home",
        title: "Home",
        link: "/",
    },
    {
        id: "aboutus",
        title: "About Us",
        link: "/about_us",
    },
    {
        id: "services",
        title: "Services",
        links: [
            {
                id: "iphonerepair",
                title: "iPhone Repair",
                sublink: '/iphone_repair',
            },
            {
                id: "smartphonerepair",
                title: "Smartphone Repair",
                sublink: '/smartphone_repair',
            },
            {
                id: "ipadtabletrepair",
                title: "iPad / Tablet Repair",
                sublink: '/ipadtablet_repair',
            },
            {
                id: "macbookrepair",
                title: "MacBook Repair",
                sublink: '/macbook_repair',
            },
            {
                id: "laptoprepair",
                title: "Laptop Repair",
                sublink: '/laptop_repair',
            },
            {
                id: "logicboardrepair",
                title: "Logic Board Repair",
                sublink: '/logicboard_repair',
            },
            {
                id: "liquiddamagerepair",
                title: "Liquid Damage Repair",
                sublink: '/liquiddamege_repair',
            },
            {
                id: "gamingconsolerepair",
                title: "Gaming Console Repair",
                sublink: '/gamingconsole_repair',
            },
            // {
            //     id: "otherelectronicsrepair",
            //     title: "Other Electronics Repair",
            //     sublink: '/otherelectronic_repair',
            // },
        ]
    },
    {
        id: "faq",
        title: "FAQ",
        link: "/faq",
    },
    {
        id: "contactus",
        title: "Contact Us",
        link: "/contact_us",
    },
];

export const openhours = [
    {
        id: 'Monday',
        hours: '12:00 AM – 5:00 PM',
    },
    {
        id: 'Tuesday',
        hours: '9:00 AM – 6:00 PM',
    },
    {
        id: 'Wednesday',
        hours: '9:00 AM – 6:00 PM',
    },
    {
        id: 'Thursday',
        hours: '9:00 AM – 6:00 PM',
    },
    {
        id: 'Friday',
        hours: '9:00 AM – 6:00 PM',
    },
    {
        id: 'Saturday',
        hours: '10:00 AM – 4:00 PM',
    },
    {
        id: 'Sunday',
        hours: '10:00 AM – 3:00 PM',
    },
]

export const slidercontent = [
    {
        id: 'repair_iphone',
        title: 'iPhone Repair\nFast & Reliable',
        description: 'We fix screens, batteries & more.\nVisit us in Port Credit.',
        img: slideriphone,
        link: '/iphone_repair',
    },
    {
        id: 'repair_logicboard',
        title: 'Logic Board Repair\nExpert Fixes',
        description: 'Chip-level repairs for all devices.\nLocated in Port Credit.',
        img: sliderlogicboard,
        link: '/logicboard_repair',
    },
    {
        id: 'repair_macbooklaptop',
        title: 'MacBook & Laptop Repair\nQuality Service',
        description: 'Screen, keyboard & motherboard fixes.\nFast repairs in Port Credit.',
        img: slidermacbook,
        link: '/macbook_repair',
    },
    {
        id: 'repair_console',
        title: 'Gaming Console Repair\nPS & Switch & XBOX',
        description: 'Fix overheating, HDMI & power issues.\nProfessional service in Port Credit.',
        img: sliderplaystation,
        link: '/gamingconsole_repair',
    },
    // {
    //     id: 'repair_iphone',
    //     title: 'iPhone Repair \nPort Credit',
    //     description: 'What needs to be done - we can do! \nAny repair on iPhones in Port Credit',
    //     img: slideriphone,
    //     link: '/iphone_repair',
    // },
    // {
    //     id: 'repair_logicboard',
    //     title: 'Logic Board \nRepair Port Credit',
    //     description: 'What needs to be done - we can do! \nAny repair on Logic Board in Port Credit',
    //     img: sliderlogicboard,
    //     link: '/logicboard_repair',
    // },
    // {
    //     id: 'repair_macbooklaptop',
    //     title: 'MacBook or Laptop \nRepair Port Credit',
    //     description: 'What needs to be done - we can do! \nAny repair on Mac or Laptop in Port Credit',
    //     img: slidermacbook,
    //     link: '/macbook_repair',
    // },
    // {
    //     id: 'repair_console',
    //     title: 'Gaming Console \nRepair Port Credit',
    //     description: 'What needs to be done - we can do! \nAny repair on Gaming Console in Port Credit',
    //     img: sliderplaystation,
    //     link: '/gamingconsole_repair',
    // },
]

export const aboutus = [
    {
        id: 'about-us',
        title: 'About Us',
        description: 'Hi there. We are MaxRepair, an Electronics repair store in Port Credit, Mississauga. Our Google review will tell you about us much better than we can! But in any case, we are the friendly repair store that can help you at any time you need this the most. We can take care of your gadgets in no time. With 20+ years of experience, we can provide you with the best solution possible out there. We are located at 106 Lakeshore Road East, Mississauga, ON, L5G 1E3, so dont wait and bring us your device! If you have any questions - just give us a call at (905) 517-9610!',
        img: AboutUsImg,
    },
]

export const faq_questions = [
    {
        id: 1,
        title: "Computer/Laptop/MacBook Repair",
        questions: [
            {
                id: 1.1,
                question: "My computer is too old. I just want to get the information off it. Can you help?",
                answer: "Yes! We can transfer information to external drive. We do specialize in data transfers and data recovery as well."
            },
            {
                id: 1.2,
                question: "My screen is broken on my macbook/laptop. Can you fix it?",
                answer: "Yes! As long as we can source the screen for your macbook/laptop, we can fix it."
            },
            {
                id: 1.3,
                question: "I spilled water on my laptop/macbook. Is there a hope?",
                answer: "Yes! We can fix liquid damage logicboards/motherboards at a high success rate. All our repairs have warranty as well."
            },
            {
                id: 1.4,
                question: "My laptop hinge is broken. I cannot open or close my computer properly. Is that something you can fix?",
                answer: "Yes! We can fix it or replace it. It depent how badly its damaged but, YES, we can do that!"
            },
        ],
        img: computerrepairfaq,
    },
    {
        id: 2,
        title: "IPhone/Smartphone Repairs",
        questions: [
            {
                id: 2.1,
                question: "My phone screen broke, what is process? how long does it take to replace it?",
                answer: "It all depends on the model of your phone. For most iPhones and Samsung devices, we have parts in stock. Typically we can turn a broken screen between 30 min to 1 hour. Worst case if we have part in stock a few hours.If we do not have part in stock, we can order the part for you for next day, usually. If you do not want to leave your phone overnight, you can just bring it in next day and we will repair the phone same day."
            },
            {
                id: 2.2,
                question: "My phone battery broke, what is process? how long does it take to replace it?",
                answer: "Yes. we can replace bad battery."
            },
            {
                id: 2.3,
                question: "Do you do microsoldering or logic board repairs on phones?",
                answer: "Yes. This is what we specialize in. We have the equipment and know how to fix most issues with logicboards."
            },
            {
                id: 2.4,
                question: "My phone has a problem. can you fix it?",
                answer: "More than likely yes. Please contact us and mention model and problem and we will let you know if we can repair it."
            },
            {
                id: 2.5,
                question: "I dropped my phone in water. what are my options?",
                answer: "Yes. we can fix water damage devices. Depending on the severity of the damage, we either will be able to fix the device completely, or at least get out the information you dearly need from your device. Again, we are a no fix no fee place. If we cant fix it for any reason, you dont pay."
            },
        ],
        img: iphonerepairfaq,
    },
    {
        id: 3,
        title: "General Questions",
        questions: [
            {
                id: 3.1,
                question: "What is your diagnostic fee to look at my device?",
                answer: "We dont charge for diagnostic. Diagnostics are free of charge."
            },
            {
                id: 3.2,
                question: "How long does the diagnostic take?",
                answer: "It all depends on the problem you are having with your device. Typically from a few hours to maximum 2 days."
            },
            {
                id: 3.3,
                question: "Do I need an appointment to bring in my device?",
                answer: "No appointment is required for any device. We are walk-in only."
            },
            {
                id: 3.4,
                question: "I have an electronic device that is not listed on your website. can you still help me?",
                answer: "Yes. There is a possibility. Please contact us and let us know your problem. If the issue is related to soldering, there is a high chance we can help you."
            },
            {
                id: 3.5,
                question: "What if you cant fix my device?",
                answer: "We do have a high success rate on repairs. But, if for any reason we cant fix your device, you dont pay!"
            },
            {
                id: 3.6,
                question: "Do you offer any warranty on your repairs?",
                answer: "Yes, absolutely. We give a 60 day warranty , unless specified on all repairs. The warranty covers any manufacture defect. It does not cover any physical damage or liquid damage."
            },
            {
                id: 3.7,
                question: "I left my device in for repair. i would like to get an update on it.",
                answer: "Best method to get an update on a repair would be to calling us (during business hours) directly at +1-905-517-9610"
            },
            {
                id: 3.8,
                question: "What are your store hours?",
                answer: "We are open Mon:10:00 AM - 2:00 PM, Tue to Fri:9:00 AM - 6:00 PM, Sat:10:00 AM - 4:00 PM, and also Sun:10:00 AM - 3:00 PM"
            },
        ],
        img: generalquestionfaq,
    },
];

export const whychooseus = [
    {
        id: 'why-choose-us-1',
        title: 'No fix - no fee!',
        description: 'If your device unrepairable - you dont pay.',
        logo: MdCheck,
    },
    {
        id: 'why-choose-us-2',
        title: 'Free Diagnostics',
        description: 'Estimate cost of repair for free!',
        logo: MdCheck,
    },
    {
        id: 'why-choose-us-3',
        title: 'Our Warranties',
        description: 'We provide warranty for our services and repairs.',
        logo: MdCheck,
    },
    {
        id: 'why-choose-us-4',
        title: 'REFERRED BY MANY',
        description: 'Check out our reviews on Google.',
        logo: MdCheck,
    },
];

export const ourservices = [
    {
        id: 'our-services-1',
        title: 'iPhone Repair',
        description: 'At MAX REPAIR, you can get help with your iPhone in no time.',
        Icon: MdPhoneIphone,
        link: '/iphone_repair',
    },
    {
        id: 'our-services-2',
        title: 'Smartphone Repair',
        description: 'We offer on spot services for a lot of minor issues like battery replacement and general breakdowns.',
        Icon: MdPhoneAndroid,
        link: '/smartphone_repair',
    },
    {
        id: 'our-services-3',
        title: 'iPad / Tablet Repair',
        description: 'Whether your iPad or Tablet has a broken screen or maybe your battery no longer holds the charge, or you have software issues, or any other issue that interrupts smooth performance, we will take care of it.',
        Icon: MdTabletMac,
        link: '/ipadtablet_repair',
    },
    {
        id: 'our-services-4',
        title: 'Macbook Repair',
        description: 'At MAX REPAIR, you can get help with simple upgrades on your mac to a motherboard level repairs.',
        Icon: MdLaptopMac,
        link: '/macbook_repair',
    },
    {
        id: 'our-services-5',
        title: 'Laptop Repair',
        description: 'We are specialized in Asus, Acer, Lenovo, Dell, Toshiba, Chromebook, MSI, HP, and any other brands.',
        Icon: MdLaptopWindows,
        link: '/laptop_repair',
    },
    {
        id: 'our-services-6',
        title: 'Logic Board Repair',
        description: 'With 20+ years of expirience we have very high success rate of repair logic board. Bring it in - and we will help',
        Icon: MdMemory,
        link: '/logicboard_repair',
    },
    {
        id: 'our-services-7',
        title: 'Liquid Damage Repair',
        description: 'We can fix liquid damage logicboards/motherboards at a high success rate.',
        Icon: MdOutlineWaterDrop,
        link: '/liquiddamege_repair',
    },
    {
        id: 'our-services-8',
        title: 'Gaming Console Repair',
        description: 'At MAX REPAIR, you can repair your PS4, Nintendo, XBOX the same day.',
        Icon: MdOutlineVideogameAsset,
        link: '/gamingconsole_repair',
    },
    // {
    //     id: 'our-services-9',
    //     title: 'Other Electronics Repair',
    //     description: 'If you can not see your device in the listing, no worries - give us a call and ask, we will be able to help you',
    //     logo: MdDevicesOther,
    //     link: '/otherelectronic_repair',
    // },
];

export const brandswecanfix = [
    {
        id: 'brandswecanfix-1',
        title: 'apple',
        logo: apple,
    },
    {
        id: 'brandswecanfix-2',
        title: 'samsung',
        logo: samsung,
    },
    {
        id: 'brandswecanfix-3',
        title: 'google',
        logo: google,
    },
    {
        id: 'brandswecanfix-4',
        title: 'microsoft',
        logo: microsoft,
    },
    {
        id: 'brandswecanfix-5',
        title: 'playstation',
        logo: playstation,
    },
    {
        id: 'brandswecanfix-6',
        title: 'nintendo',
        logo: nintendo,
    },
    {
        id: 'brandswecanfix-7',
        title: 'xbox',
        logo: xbox,
    },
]