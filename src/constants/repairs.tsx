import { iphonerepair, smartphonerepair, macbookrepair } from "../assets";

export const repairs = [
    {
        id: 'iphone_repair',
        title: "iPhone Repair",
        description: "At MAX REPAIR, you can get help with your iPhone in no time",
        listTitle: "We can FIX:",
        listofrepairs: [
            {
                id: 1,
                repair: "Broken screen",
            },
            {
                id: 2,
                repair: "Charging portcharging port",
            },
            {
                id: 3,
                repair: "Faulty battery",
            },
            {
                id: 4,
                repair: "camera malfunctioning",
            },
            {
                id: 5,
                repair: "power/volume button",
            },
            {
                id: 6,
                repair: "liquid damage",
            },
            {
                id: 7,
                repair: "no power-related issues (motherboard repair)",
            },
        ],
        inquiry: [
            {
                id: 1,
                description: "For any inquiry, don’t hesitate to give us a call or send us an email:",
                phonenumber: "905 517 9610",
                email: "mailto:max@pcmaxrepair.ca",
            }
        ],
        image: iphonerepair,
    },
    {
        id: 'smartphone_repair',
        title: "Smartphone Repair",
        description: "At MAX REPAIR, you can get help with your Smartphone in no time.",
        extradescription: "We are specialized in Samsung, Huawei, Xiaomi, Google, and OnePlus.",
        listTitle: "We can FIX:",
        listofrepairs: [
            {
                id: 1,
                repair: "Broken screen",
            },
            {
                id: 2,
                repair: "Charging portcharging port",
            },
            {
                id: 3,
                repair: "Faulty battery",
            },
            {
                id: 4,
                repair: "camera malfunctioning",
            },
            {
                id: 5,
                repair: "power/volume button",
            },
            {
                id: 6,
                repair: "liquid damage",
            },
            {
                id: 7,
                repair: "no power-related issues (motherboard repair)",
            },
        ],
        inquiry: [
            {
                id: 1,
                description: "For any inquiry, don’t hesitate to give us a call or send us an email:",
                phonenumber: "905 517 9610",
                email: "mailto:max@pcmaxrepair.ca",
            }
        ],
        image: smartphonerepair,
    },
    {
        id: 'macbook_repair',
        title: "Smartphone Repair",
        description: "At MAX REPAIR, you can get help with simple upgrades on your mac to a motherboard level repairs.",
        extradescription: "We are specialized in Samsung, Huawei, Xiaomi, Google, and OnePlus.",
        listTitle: "We can troubleshoot and FIX:",
        listofrepairs: [
            {
                id: 1,
                repair: "software/driver issues with Mac OS",
            },
            {
                id: 2,
                repair: "MACBOOK HDD/SSD replacement and OS reinstallation and Data transfer",
            },
            {
                id: 3,
                repair: "Faulty battery",
            },
            {
                id: 4,
                repair: "Dc/Power jack repair",
            },
            {
                id: 5,
                repair: "LCD screen replacement/repair",
            },
            {
                id: 6,
                repair: "liquid damage cleaning and repair.",
            },
            {
                id: 7,
                repair: "Keyboard and trackpad repair.",
            },
            {
                id: 8,
                repair: "Virus cleaning", 
            },
            {
                id: 9,
                repair: "We can recover your lost data or simple transfer it.",
            },
        ],
        inquiry: [
            {
                id: 1,
                description: "For any inquiry, don’t hesitate to give us a call or send us an email:",
                phonenumber: "905 517 9610",
                email: "mailto:max@pcmaxrepair.ca",
            }
        ],
        image: macbookrepair,
    },
]



