import { iphonerepair, smartphonerepair, ipadtabletrepair, macbookrepair, laptoprepair, logicboardrepair, liquiddamangerepair, playstationrepair } from "../assets";

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
                repair: "Camera malfunctioning",
            },
            {
                id: 5,
                repair: "Power/volume button",
            },
            {
                id: 6,
                repair: "liquid damage",
            },
            {
                id: 7,
                repair: "No power-related issues (motherboard repair)",
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
                repair: "Charging port",
            },
            {
                id: 3,
                repair: "Faulty battery",
            },
            {
                id: 4,
                repair: "Camera malfunctioning",
            },
            {
                id: 5,
                repair: "Power/volume button",
            },
            {
                id: 6,
                repair: "liquid damage",
            },
            {
                id: 7,
                repair: "No power-related issues (motherboard repair)",
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
        id: 'ipadtablet_repair',
        title: "iPad / Tablet Repair",
        description: "At MAX REPAIR, you can get help with your Apple iPad, Microsoft, or any Tablet in no time",
        extradescription: "We are specialized in Apple iPad's, Microsoft Surface/Book, Samsung, Huawei, Google.",
        listTitle: "We can FIX:",
        listofrepairs: [
            {
                id: 1,
                repair: "Broken screen",
            },
            {
                id: 2,
                repair: "Charging port",
            },
            {
                id: 3,
                repair: "Faulty battery",
            },
            {
                id: 4,
                repair: "Camera malfunctioning",
            },
            {
                id: 5,
                repair: "Power/volume button",
            },
            {
                id: 6,
                repair: "liquid damage",
            },
            {
                id: 7,
                repair: "No power-related issues (motherboard repair)",
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
        image: ipadtabletrepair,
    },
    {
        id: 'macbook_repair',
        title: "MacBook Repair",
        description: "At MAX REPAIR, you can get help with simple upgrades on your mac to a motherboard level repairs.",
        listTitle: "We can troubleshoot and FIX in any MAC:",
        listofrepairs: [
            {
                id: 1,
                repair: "Software/driver issues with Mac OS",
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
    {
        id: 'laptop_repair',
        title: "Laptop Repair",
        description: "At MAX REPAIR, you can get help with simple upgrades on your laptop to a motherboard level repairs.",
        extradescription: "We are specialized in Asus, Acer, Lenovo, Dell, Toshiba, Chromebook, MSI, and HP.",
        listTitle: "We can troubleshoot and FIX:",
        listofrepairs: [
            {
                id: 1,
                repair: "Software/driver issues with Windows OS",
            },
            {
                id: 2,
                repair: "Laptop HDD/SSD replacement and OS reinstallation and Data transfer",
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
        image: laptoprepair,
    },
    {
        id: 'logicboard_repair',
        title: "Logic Board / Motherboard Repair",
        description: "Logic Board failure can be a challenging task to take care of. Here, at MaxRepair we can dill with it!",
        extradescription: "We are specialized in microsoldering and any components replacement in Apple, Gigabyte, Asus, Acer, Lenovo, Dell, MSI, HP, and many others logic boards",
        listTitle: "We can troubleshoot and FIX many logic board issues like:",
        listofrepairs: [
            {
                id: 1,
                repair: "Your device is not powering up at all, not giving any sense of life",
            },
            {
                id: 2,
                repair: "Randomly crashing and restarting, or turning off itself",
            },
            {
                id: 3,
                repair: "Overheating and getting laggy, freezing when playing games or doing some heavy stuff",
            },
            {
                id: 4,
                repair: "No backlight/image on the screen",
            },
            {
                id: 5,
                repair: "Not recognizing battery or battery not charging",
            },
            {
                id: 6,
                repair: "USB ports, and HDMI port not working",
            },
            {
                id: 7,
                repair: "Any other microsoldering repairs that your faulty logic board can require",
            },
        ],
        logicboardfailure: "If one component fails it usually cause the whole motherboard to fails. Replacing the faulty components is not as easy it may sound because. To be able to do that one has to know which IC (integrated chip) or filter is faulty.",
        inquiry: [
            {
                id: 1,
                description: "For any inquiry, don’t hesitate to give us a call or send us an email:",
                phonenumber: "905 517 9610",
                email: "mailto:max@pcmaxrepair.ca",
            }
        ],
        image: logicboardrepair,
    },
    {
        id: 'liquiddamege_repair',
        title: "Liquid Damage Repair",
        description: "Liquid damage reapir(cleaning) require special tools(ultrasonic cleaner, isopropil alcohol, ect) and has to be done in short manner of time. As long you wait as less chances you have to fix your device.",
        extradescription: "In any situation involving the submersion or splashing of an electronic device in any liquid, the first step is to disconnect any power source as soon as this is safely possible.",
        listTitle: "We can clean your divece and FIX liquid damage:",
        listofrepairs: [
            {
                id: 1,
                repair: "Your device is not powering up at all, not giving any sense of life",
            },
            {
                id: 2,
                repair: "Randomly crashing and restarting, or turning off itself",
            },
            {
                id: 3,
                repair: "Overheating and getting laggy, freezing when playing games or doing some heavy stuff",
            },
            {
                id: 4,
                repair: "No backlight/image on the screen",
            },
            {
                id: 5,
                repair: "Not recognizing battery or battery not charging",
            },
            {
                id: 6,
                repair: "USB ports, and HDMI port not working",
            },
            {
                id: 7,
                repair: "Any other microsoldering repairs that your faulty logic board can require",
            },
        ],
        logicboardfailure: "If one component fails it usually cause the whole motherboard to fails. Replacing the faulty components is not as easy it may sound because. To be able to do that one has to know which IC (integrated chip) or filter is faulty.",
        inquiry: [
            {
                id: 1,
                description: "For any inquiry, don’t hesitate to give us a call or send us an email:",
                phonenumber: "905 517 9610",
                email: "mailto:max@pcmaxrepair.ca",
            }
        ],
        image: liquiddamangerepair,
    },
    {
        id: 'gamingconsole_repair',
        title: "PlayStaion Repair",
        description: "At MAX REPAIR, you can repair your PS4, PS4, PS3 the same day",
        listTitle: "We can fix:",
        listofrepairs: [
            {
                id: 1,
                repair: "Software issue, not booting up issue",
            },
            {
                id: 2,
                repair: "HDMI replacement, USB port repair",
            },
            {
                id: 3,
                repair: "Overheating and getting laggy, freezing when playing games or doing some heavy stuff",
            },
            {
                id: 4,
                repair: "No power issue (power supply replacement)",
            },
            {
                id: 5,
                repair: "Game reading issue repair (lens/laser/disk drive replacement)",
            },
            {
                id: 6,
                repair: "Controller not connecting to the console repair, WIFI repair",
            },
            {
                id: 7,
                repair: "Motherboard related issue repair, liquid damage repairs",
            },
            {
                id: 8,
                repair: "Controller repair (micro USB port damaged, buttons not working)",
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
        image: playstationrepair,
    },
]



