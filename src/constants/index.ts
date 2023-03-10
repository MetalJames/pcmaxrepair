import { MdPhoneIphone, MdPhoneAndroid, MdLaptopMac, MdLaptopWindows, MdMemory, MdTabletMac, MdOutlineWaterDrop, MdOutlineVideogameAsset, MdDevicesOther, MdCheck } from 'react-icons/md';
import { apple, google, microsoft, nintendo, playstation, samsung, xbox } from '../assets/brandswecanfix';

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
            {
                id: "otherelectronicsrepair",
                title: "Other Electronics Repair",
                sublink: '/otherelectronic_repair',
            },
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

export const faq_questions = [
    {
        id: 1,
        title: "Computer/Laptop/MacBook Repair",
        questions: [
            {
                id: 1,
                question: "My computer is too old. I just want to get the information off it. Can you help?",
                answer: "Yes! We can transfer information to external drive. We do specialize in data transfers and data recovery as well."
            },
            {
                id: 2,
                question: "My screen is broken on my macbook/laptop. Can you fix it?",
                answer: "Yes! As long as we can source the screen for your macbook/laptop, we can fix it."
            },
            {
                id: 3,
                question: "I spilled water on my laptop/macbook. Is there a hope?",
                answer: "Yes! We can fix liquid damage logicboards/motherboards at a high success rate. All our repairs have warranty as well."
            },
            {
                id: 4,
                question: "My laptop hinge is broken. I cannot open or close my computer properly. Is that something you can fix?",
                answer: "Yes! We can fix it or replace it. It depent how badly its damaged but, YES, we can do that!"
            },
        ]
    },
    {
        id: 2,
        title: "IPhone/Phone Repairs",
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
        ]
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
        ]
    },
];

export const whychooseus = [
    {
        id: 'why-choose-us-1',
        title: 'Free Diagnostics',
        description: 'Bring your device to our store and get a free diagnosis of your gadget.',
        logo: MdCheck,
    },
    {
        id: 'why-choose-us-2',
        title: 'On the Spot Service',
        description: 'We offer on spot services for a lot of minor issues like battery replacement and general breakdowns.',
        logo: MdCheck,
    },
    {
        id: 'why-choose-us-3',
        title: 'Warranties on Services / Repairs',
        description: 'Services and repairs come with warranties to help you get best experience possible.',
        logo: MdCheck,
    },
    {
        id: 'why-choose-us-4',
        title: 'Quality Parts',
        description: 'All our parts from reliable sources and always come.',
        logo: MdCheck,
    },
    {
        id: 'why-choose-us-5',
        title: 'REFERRED BY MANY',
        description: 'With our happy customers, we are getting a lot of referrals, check out our reviews on Google.',
        logo: MdCheck,
    },
    {
        id: 'why-choose-us-6',
        title: 'No fix - no fee!',
        description: 'We always can provide you with the solution but if it is too expensive or you dont want to fix it - you dont pay.',
        logo: MdCheck,
    },
];

export const ourservices = [
    {
        id: 'our-services-1',
        title: 'iPhone Repair',
        description: 'At MAX REPAIR, you can get help with your iPhone in no time.',
        logo: MdPhoneIphone,
    },
    {
        id: 'our-services-2',
        title: 'Smartphone Repair',
        description: 'We offer on spot services for a lot of minor issues like battery replacement and general breakdowns.',
        logo: MdPhoneAndroid,
    },
    {
        id: 'our-services-3',
        title: 'iPad / Tablet Repair',
        description: 'Whether your iPad or Tablet has a broken screen or maybe your battery no longer holds the charge, or you have software issues, or any other issue that interrupts smooth performance, we will take care of it.',
        logo: MdTabletMac,
    },
    {
        id: 'our-services-4',
        title: 'Macbook Repair',
        description: 'At MAX REPAIR, you can get help with simple upgrades on your mac to a motherboard level repairs.',
        logo: MdLaptopMac,
    },
    {
        id: 'our-services-5',
        title: 'Laptop Repair',
        description: 'We are specialized in Asus, Acer, Lenovo, Dell, Toshiba, Chromebook, MSI, HP, and any other brands.',
        logo: MdLaptopWindows,
    },
    {
        id: 'our-services-6',
        title: 'Logic Board Repair',
        description: 'With 20+ years of expirience we have very high success rate of repair logic board. Bring it in - and we will help',
        logo: MdMemory,
    },
    {
        id: 'our-services-7',
        title: 'Liquid Damage Repair',
        description: 'We can fix liquid damage logicboards/motherboards at a high success rate.',
        logo: MdOutlineWaterDrop,
    },
    {
        id: 'our-services-8',
        title: 'Gaming Console Repair',
        description: 'At MAX REPAIR, you can repair your PS4, Nintendo, XBOX the same day.',
        logo: MdOutlineVideogameAsset,
    },
    {
        id: 'our-services-9',
        title: 'Other Electronics Repair',
        description: 'If you can not see your device in the listing, no worries - give us a call and ask, we will be able to help you',
        logo: MdDevicesOther,
    },
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