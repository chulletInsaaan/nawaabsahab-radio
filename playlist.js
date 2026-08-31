// playlist.js
const playlists = {
    "Coocking pc": [
        {
        id: "dZWtj7drMcE",
        title: "Salaam Namaste",
        artist: "Vishal-Shekhar, Kunal Ganjawala, Vasundhara Das, Jaideep Sahni",
        thumb: "https://img.youtube.com/vi/dZWtj7drMcE/hqdefault.jpg"
    },
    {
        id: "yHVHI-NX3ak",
        title: "Pehli Mohabbat",
        artist: "Darshan Raval",
        thumb: "https://img.youtube.com/vi/yHVHI-NX3ak/hqdefault.jpg"
    },
    {
        id: "nhwmc8mN7AI",
        title: "Mere Nishaan",
        artist: "Darshan Raval",
        thumb: "https://img.youtube.com/vi/nhwmc8mN7AI/hqdefault.jpg"
    },
    {
        id: "BKTdhaxWAZ4",
        title: "Swami Ji Please",
        artist: "Priyanka Meher, Rongpaz",
        thumb: "https://img.youtube.com/vi/BKTdhaxWAZ4/hqdefault.jpg"
    },
    {
        id: "BQ2o2UtOce4",
        title: "Kuch To Hua Hai",
        artist: "Shankar-Ehsaan-Loy, Alka Yagnik, Shaan",
        thumb: "https://img.youtube.com/vi/BQ2o2UtOce4/hqdefault.jpg"
    },
    {
        id: "WmE6f-eABV4",
        title: "Jingle Jingle",
        artist: "Pritam, Mohit Chauhan, Master Saleem, Farhid, Anvita Dutt",
        thumb: "https://img.youtube.com/vi/WmE6f-eABV4/hqdefault.jpg"
    },
    {
        id: "uNTJ1NAvHD8",
        title: "Sunday - Trending Version",
        artist: "Aditya A, NAALAYAK, Ronit Vinta",
        thumb: "https://img.youtube.com/vi/uNTJ1NAvHD8/hqdefault.jpg"
    },
    {
        id: "xVdMD61utMs",
        title: "Agar Main Kahoon",
        artist: "Shankar-Ehsaan-Loy, Alka Yagnik, Udit Narayan",
        thumb: "https://img.youtube.com/vi/xVdMD61utMs/hqdefault.jpg"
    },
    {
        id: "2dE8EzFwgTY",
        title: "Main Aisa Kyon Hoon",
        artist: "Shankar-Ehsaan-Loy, Shaan",
        thumb: "https://img.youtube.com/vi/2dE8EzFwgTY/hqdefault.jpg"
    },
    {
        id: "W16VGhAZziY",
        title: "Kufar",
        artist: "Diljit Dosanjh, MixSingh, Raj Ranjodh",
        thumb: "https://img.youtube.com/vi/W16VGhAZziY/hqdefault.jpg"
    },
    {
        id: "BFfOtbp-vd8",
        title: "Rockabye (feat. Sean Paul & Anne-Marie)",
        artist: "Clean Bandit, Anne-Marie, Sean Paul",
        thumb: "https://img.youtube.com/vi/BFfOtbp-vd8/hqdefault.jpg"
    },
    {
        id: "pspkrExqxWY",
        title: "Tum Se (From \"Teri Baaton Mein Aisa Uljha Jiya\")",
        artist: "Sachin-Jigar, Raghav Chaitanya, Varun Jain, Indraneel",
        thumb: "https://img.youtube.com/vi/pspkrExqxWY/hqdefault.jpg"
    },
    {
        id: "6adnW--HY6A",
        title: "Tajdar-E-Haram - Coke Studio Season 8",
        artist: "Atif Aslam",
        thumb: "https://img.youtube.com/vi/6adnW--HY6A/hqdefault.jpg"
    },
    {
        id: "TNvHJHTacjI",
        title: "Naina (From \"Crew\")",
        artist: "Diljit Dosanjh, Badshah, Raj Ranjodh",
        thumb: "https://img.youtube.com/vi/TNvHJHTacjI/hqdefault.jpg"
    },
    {
        id: "0o0WbQV6OZQ",
        title: "London Boy",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/0o0WbQV6OZQ/hqdefault.jpg"
    },
    {
        id: "CnBX7_ErLvA",
        title: "Summer High",
        artist: "AP Dhillon",
        thumb: "https://img.youtube.com/vi/CnBX7_ErLvA/hqdefault.jpg"
    },
    {
        id: "tIjUfo30r4M",
        title: "Boyfriend",
        artist: "Karan Aujla, Ikky",
        thumb: "https://img.youtube.com/vi/tIjUfo30r4M/hqdefault.jpg"
    },
    {
        id: "xFGZH3BzP2g",
        title: "Bairan",
        artist: "Banjaare",
        thumb: "https://img.youtube.com/vi/xFGZH3BzP2g/hqdefault.jpg"
    },
    {
        id: "YrJ6OZ7VVWc",
        title: "Zaroor",
        artist: "Aparshakti Khurana, Savi Kahlon",
        thumb: "https://img.youtube.com/vi/YrJ6OZ7VVWc/hqdefault.jpg"
    },
    {
        id: "ixMvWTRX-Qk",
        title: "Sk8er Boi",
        artist: "Avril Lavigne",
        thumb: "https://img.youtube.com/vi/ixMvWTRX-Qk/hqdefault.jpg"
    },
    {
        id: "babzie5qi5E",
        title: "Good Girls Go Bad (feat. Leighton Meester)",
        artist: "Cobra Starship, Leighton Meester",
        thumb: "https://img.youtube.com/vi/babzie5qi5E/hqdefault.jpg"
    },
    {
        id: "VzvsSrRXUrM",
        title: "Sahiba",
        artist: "Aditya Rikhari",
        thumb: "https://img.youtube.com/vi/VzvsSrRXUrM/hqdefault.jpg"
    },
    {
        id: "sZvn_-S24uw",
        title: "By My Side",
        artist: "AP Dhillon, Shinda Kahlon",
        thumb: "https://img.youtube.com/vi/sZvn_-S24uw/hqdefault.jpg"
    },
    {
        id: "MKDLqsAsWw8",
        title: "Unse Jaake Kehdo",
        artist: "Justh",
        thumb: "https://img.youtube.com/vi/MKDLqsAsWw8/hqdefault.jpg"
    },
    {
        id: "g0C61gaBKJ8",
        title: "DESIRES",
        artist: "AP Dhillon, Gurinder Gill",
        thumb: "https://img.youtube.com/vi/g0C61gaBKJ8/hqdefault.jpg"
    },
    {
        id: "nma-wCZNmM8",
        title: "Naam Tera",
        artist: "Ndee Kundu",
        thumb: "https://img.youtube.com/vi/nma-wCZNmM8/hqdefault.jpg"
    },
    {
        id: "sLva5MIY7ZY",
        title: "Woh Ladki Hai Kahan",
        artist: "Shaan, Kavita Krishnamurthy",
        thumb: "https://img.youtube.com/vi/sLva5MIY7ZY/hqdefault.jpg"
    },
    {
        id: "FLUzI9gszcQ",
        title: "Pal Pal",
        artist: "Asira",
        thumb: "https://img.youtube.com/vi/FLUzI9gszcQ/hqdefault.jpg"
    },
    {
        id: "e-S1k9-soT4",
        title: "Cold Heart - PNAU Remix",
        artist: "Elton John, Dua Lipa, PNAU",
        thumb: "https://img.youtube.com/vi/e-S1k9-soT4/hqdefault.jpg"
    },
    {
        id: "BzDK4uzzqT8",
        title: "Afsos",
        artist: "Anuv Jain, AP Dhillon",
        thumb: "https://img.youtube.com/vi/BzDK4uzzqT8/hqdefault.jpg"
    },
    {
        id: "4kw6TSAVXA8",
        title: "Simple Song",
        artist: "Miley Cyrus",
        thumb: "https://img.youtube.com/vi/4kw6TSAVXA8/hqdefault.jpg"
    },
    {
        id: "HvoOWUDsANw",
        title: "I Wanna See You Dance - From \"Kho Gaye Hum Kahan\"",
        artist: "Sachin-Jigar, Saba Azad, Ankur Tewari",
        thumb: "https://img.youtube.com/vi/HvoOWUDsANw/hqdefault.jpg"
    }
        // Add more songs here...
    ],
    "Workout Mix": [
        {
        id: "dZWtj7drMcE",
        title: "Salaam Namaste",
        artist: "Vishal-Shekhar, Kunal Ganjawala, Vasundhara Das, Jaideep Sahni",
        thumb: "https://img.youtube.com/vi/dZWtj7drMcE/hqdefault.jpg"
    },
    {
        id: "yHVHI-NX3ak",
        title: "Pehli Mohabbat",
        artist: "Darshan Raval",
        thumb: "https://img.youtube.com/vi/yHVHI-NX3ak/hqdefault.jpg"
    },
    {
        id: "nhwmc8mN7AI",
        title: "Mere Nishaan",
        artist: "Darshan Raval",
        thumb: "https://img.youtube.com/vi/nhwmc8mN7AI/hqdefault.jpg"
    },
    {
        id: "BKTdhaxWAZ4",
        title: "Swami Ji Please",
        artist: "Priyanka Meher, Rongpaz",
        thumb: "https://img.youtube.com/vi/BKTdhaxWAZ4/hqdefault.jpg"
    },
    {
        id: "BQ2o2UtOce4",
        title: "Kuch To Hua Hai",
        artist: "Shankar-Ehsaan-Loy, Alka Yagnik, Shaan",
        thumb: "https://img.youtube.com/vi/BQ2o2UtOce4/hqdefault.jpg"
    },
    {
        id: "WmE6f-eABV4",
        title: "Jingle Jingle",
        artist: "Pritam, Mohit Chauhan, Master Saleem, Farhid, Anvita Dutt",
        thumb: "https://img.youtube.com/vi/WmE6f-eABV4/hqdefault.jpg"
    },
    {
        id: "uNTJ1NAvHD8",
        title: "Sunday - Trending Version",
        artist: "Aditya A, NAALAYAK, Ronit Vinta",
        thumb: "https://img.youtube.com/vi/uNTJ1NAvHD8/hqdefault.jpg"
    },
    {
        id: "xVdMD61utMs",
        title: "Agar Main Kahoon",
        artist: "Shankar-Ehsaan-Loy, Alka Yagnik, Udit Narayan",
        thumb: "https://img.youtube.com/vi/xVdMD61utMs/hqdefault.jpg"
    },
    {
        id: "2dE8EzFwgTY",
        title: "Main Aisa Kyon Hoon",
        artist: "Shankar-Ehsaan-Loy, Shaan",
        thumb: "https://img.youtube.com/vi/2dE8EzFwgTY/hqdefault.jpg"
    },
    {
        id: "W16VGhAZziY",
        title: "Kufar",
        artist: "Diljit Dosanjh, MixSingh, Raj Ranjodh",
        thumb: "https://img.youtube.com/vi/W16VGhAZziY/hqdefault.jpg"
    },
    {
        id: "BFfOtbp-vd8",
        title: "Rockabye (feat. Sean Paul & Anne-Marie)",
        artist: "Clean Bandit, Anne-Marie, Sean Paul",
        thumb: "https://img.youtube.com/vi/BFfOtbp-vd8/hqdefault.jpg"
    },
    {
        id: "pspkrExqxWY",
        title: "Tum Se (From \"Teri Baaton Mein Aisa Uljha Jiya\")",
        artist: "Sachin-Jigar, Raghav Chaitanya, Varun Jain, Indraneel",
        thumb: "https://img.youtube.com/vi/pspkrExqxWY/hqdefault.jpg"
    },
    {
        id: "6adnW--HY6A",
        title: "Tajdar-E-Haram - Coke Studio Season 8",
        artist: "Atif Aslam",
        thumb: "https://img.youtube.com/vi/6adnW--HY6A/hqdefault.jpg"
    },
    {
        id: "TNvHJHTacjI",
        title: "Naina (From \"Crew\")",
        artist: "Diljit Dosanjh, Badshah, Raj Ranjodh",
        thumb: "https://img.youtube.com/vi/TNvHJHTacjI/hqdefault.jpg"
    },
    {
        id: "0o0WbQV6OZQ",
        title: "London Boy",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/0o0WbQV6OZQ/hqdefault.jpg"
    },
    {
        id: "CnBX7_ErLvA",
        title: "Summer High",
        artist: "AP Dhillon",
        thumb: "https://img.youtube.com/vi/CnBX7_ErLvA/hqdefault.jpg"
    },
    {
        id: "tIjUfo30r4M",
        title: "Boyfriend",
        artist: "Karan Aujla, Ikky",
        thumb: "https://img.youtube.com/vi/tIjUfo30r4M/hqdefault.jpg"
    },
    {
        id: "xFGZH3BzP2g",
        title: "Bairan",
        artist: "Banjaare",
        thumb: "https://img.youtube.com/vi/xFGZH3BzP2g/hqdefault.jpg"
    },
    {
        id: "YrJ6OZ7VVWc",
        title: "Zaroor",
        artist: "Aparshakti Khurana, Savi Kahlon",
        thumb: "https://img.youtube.com/vi/YrJ6OZ7VVWc/hqdefault.jpg"
    },
    {
        id: "ixMvWTRX-Qk",
        title: "Sk8er Boi",
        artist: "Avril Lavigne",
        thumb: "https://img.youtube.com/vi/ixMvWTRX-Qk/hqdefault.jpg"
    },
    {
        id: "babzie5qi5E",
        title: "Good Girls Go Bad (feat. Leighton Meester)",
        artist: "Cobra Starship, Leighton Meester",
        thumb: "https://img.youtube.com/vi/babzie5qi5E/hqdefault.jpg"
    },
    {
        id: "VzvsSrRXUrM",
        title: "Sahiba",
        artist: "Aditya Rikhari",
        thumb: "https://img.youtube.com/vi/VzvsSrRXUrM/hqdefault.jpg"
    },
    {
        id: "sZvn_-S24uw",
        title: "By My Side",
        artist: "AP Dhillon, Shinda Kahlon",
        thumb: "https://img.youtube.com/vi/sZvn_-S24uw/hqdefault.jpg"
    },
    {
        id: "MKDLqsAsWw8",
        title: "Unse Jaake Kehdo",
        artist: "Justh",
        thumb: "https://img.youtube.com/vi/MKDLqsAsWw8/hqdefault.jpg"
    },
    {
        id: "g0C61gaBKJ8",
        title: "DESIRES",
        artist: "AP Dhillon, Gurinder Gill",
        thumb: "https://img.youtube.com/vi/g0C61gaBKJ8/hqdefault.jpg"
    },
    {
        id: "nma-wCZNmM8",
        title: "Naam Tera",
        artist: "Ndee Kundu",
        thumb: "https://img.youtube.com/vi/nma-wCZNmM8/hqdefault.jpg"
    },
    {
        id: "sLva5MIY7ZY",
        title: "Woh Ladki Hai Kahan",
        artist: "Shaan, Kavita Krishnamurthy",
        thumb: "https://img.youtube.com/vi/sLva5MIY7ZY/hqdefault.jpg"
    },
    {
        id: "FLUzI9gszcQ",
        title: "Pal Pal",
        artist: "Asira",
        thumb: "https://img.youtube.com/vi/FLUzI9gszcQ/hqdefault.jpg"
    },
    {
        id: "e-S1k9-soT4",
        title: "Cold Heart - PNAU Remix",
        artist: "Elton John, Dua Lipa, PNAU",
        thumb: "https://img.youtube.com/vi/e-S1k9-soT4/hqdefault.jpg"
    },
    {
        id: "BzDK4uzzqT8",
        title: "Afsos",
        artist: "Anuv Jain, AP Dhillon",
        thumb: "https://img.youtube.com/vi/BzDK4uzzqT8/hqdefault.jpg"
    },
    {
        id: "4kw6TSAVXA8",
        title: "Simple Song",
        artist: "Miley Cyrus",
        thumb: "https://img.youtube.com/vi/4kw6TSAVXA8/hqdefault.jpg"
    },
    {
        id: "HvoOWUDsANw",
        title: "I Wanna See You Dance - From \"Kho Gaye Hum Kahan\"",
        artist: "Sachin-Jigar, Saba Azad, Ankur Tewari",
        thumb: "https://img.youtube.com/vi/HvoOWUDsANw/hqdefault.jpg"
    }
        // Add more songs here...
    ],
    "Coocking pccc": [
        {
        id: "dZWtj7drMcE",
        title: "Salaam Namaste",
        artist: "Vishal-Shekhar, Kunal Ganjawala, Vasundhara Das, Jaideep Sahni",
        thumb: "https://img.youtube.com/vi/dZWtj7drMcE/hqdefault.jpg"
    },
    {
        id: "yHVHI-NX3ak",
        title: "Pehli Mohabbat",
        artist: "Darshan Raval",
        thumb: "https://img.youtube.com/vi/yHVHI-NX3ak/hqdefault.jpg"
    },
    {
        id: "nhwmc8mN7AI",
        title: "Mere Nishaan",
        artist: "Darshan Raval",
        thumb: "https://img.youtube.com/vi/nhwmc8mN7AI/hqdefault.jpg"
    },
    {
        id: "BKTdhaxWAZ4",
        title: "Swami Ji Please",
        artist: "Priyanka Meher, Rongpaz",
        thumb: "https://img.youtube.com/vi/BKTdhaxWAZ4/hqdefault.jpg"
    },
    {
        id: "BQ2o2UtOce4",
        title: "Kuch To Hua Hai",
        artist: "Shankar-Ehsaan-Loy, Alka Yagnik, Shaan",
        thumb: "https://img.youtube.com/vi/BQ2o2UtOce4/hqdefault.jpg"
    },
    {
        id: "WmE6f-eABV4",
        title: "Jingle Jingle",
        artist: "Pritam, Mohit Chauhan, Master Saleem, Farhid, Anvita Dutt",
        thumb: "https://img.youtube.com/vi/WmE6f-eABV4/hqdefault.jpg"
    },
    {
        id: "uNTJ1NAvHD8",
        title: "Sunday - Trending Version",
        artist: "Aditya A, NAALAYAK, Ronit Vinta",
        thumb: "https://img.youtube.com/vi/uNTJ1NAvHD8/hqdefault.jpg"
    },
    {
        id: "xVdMD61utMs",
        title: "Agar Main Kahoon",
        artist: "Shankar-Ehsaan-Loy, Alka Yagnik, Udit Narayan",
        thumb: "https://img.youtube.com/vi/xVdMD61utMs/hqdefault.jpg"
    },
    {
        id: "2dE8EzFwgTY",
        title: "Main Aisa Kyon Hoon",
        artist: "Shankar-Ehsaan-Loy, Shaan",
        thumb: "https://img.youtube.com/vi/2dE8EzFwgTY/hqdefault.jpg"
    },
    {
        id: "W16VGhAZziY",
        title: "Kufar",
        artist: "Diljit Dosanjh, MixSingh, Raj Ranjodh",
        thumb: "https://img.youtube.com/vi/W16VGhAZziY/hqdefault.jpg"
    },
    {
        id: "BFfOtbp-vd8",
        title: "Rockabye (feat. Sean Paul & Anne-Marie)",
        artist: "Clean Bandit, Anne-Marie, Sean Paul",
        thumb: "https://img.youtube.com/vi/BFfOtbp-vd8/hqdefault.jpg"
    },
    {
        id: "pspkrExqxWY",
        title: "Tum Se (From \"Teri Baaton Mein Aisa Uljha Jiya\")",
        artist: "Sachin-Jigar, Raghav Chaitanya, Varun Jain, Indraneel",
        thumb: "https://img.youtube.com/vi/pspkrExqxWY/hqdefault.jpg"
    },
    {
        id: "6adnW--HY6A",
        title: "Tajdar-E-Haram - Coke Studio Season 8",
        artist: "Atif Aslam",
        thumb: "https://img.youtube.com/vi/6adnW--HY6A/hqdefault.jpg"
    },
    {
        id: "TNvHJHTacjI",
        title: "Naina (From \"Crew\")",
        artist: "Diljit Dosanjh, Badshah, Raj Ranjodh",
        thumb: "https://img.youtube.com/vi/TNvHJHTacjI/hqdefault.jpg"
    },
    {
        id: "0o0WbQV6OZQ",
        title: "London Boy",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/0o0WbQV6OZQ/hqdefault.jpg"
    },
    {
        id: "CnBX7_ErLvA",
        title: "Summer High",
        artist: "AP Dhillon",
        thumb: "https://img.youtube.com/vi/CnBX7_ErLvA/hqdefault.jpg"
    },
    {
        id: "tIjUfo30r4M",
        title: "Boyfriend",
        artist: "Karan Aujla, Ikky",
        thumb: "https://img.youtube.com/vi/tIjUfo30r4M/hqdefault.jpg"
    },
    {
        id: "xFGZH3BzP2g",
        title: "Bairan",
        artist: "Banjaare",
        thumb: "https://img.youtube.com/vi/xFGZH3BzP2g/hqdefault.jpg"
    },
    {
        id: "YrJ6OZ7VVWc",
        title: "Zaroor",
        artist: "Aparshakti Khurana, Savi Kahlon",
        thumb: "https://img.youtube.com/vi/YrJ6OZ7VVWc/hqdefault.jpg"
    },
    {
        id: "ixMvWTRX-Qk",
        title: "Sk8er Boi",
        artist: "Avril Lavigne",
        thumb: "https://img.youtube.com/vi/ixMvWTRX-Qk/hqdefault.jpg"
    },
    {
        id: "babzie5qi5E",
        title: "Good Girls Go Bad (feat. Leighton Meester)",
        artist: "Cobra Starship, Leighton Meester",
        thumb: "https://img.youtube.com/vi/babzie5qi5E/hqdefault.jpg"
    },
    {
        id: "VzvsSrRXUrM",
        title: "Sahiba",
        artist: "Aditya Rikhari",
        thumb: "https://img.youtube.com/vi/VzvsSrRXUrM/hqdefault.jpg"
    },
    {
        id: "sZvn_-S24uw",
        title: "By My Side",
        artist: "AP Dhillon, Shinda Kahlon",
        thumb: "https://img.youtube.com/vi/sZvn_-S24uw/hqdefault.jpg"
    },
    {
        id: "MKDLqsAsWw8",
        title: "Unse Jaake Kehdo",
        artist: "Justh",
        thumb: "https://img.youtube.com/vi/MKDLqsAsWw8/hqdefault.jpg"
    },
    {
        id: "g0C61gaBKJ8",
        title: "DESIRES",
        artist: "AP Dhillon, Gurinder Gill",
        thumb: "https://img.youtube.com/vi/g0C61gaBKJ8/hqdefault.jpg"
    },
    {
        id: "nma-wCZNmM8",
        title: "Naam Tera",
        artist: "Ndee Kundu",
        thumb: "https://img.youtube.com/vi/nma-wCZNmM8/hqdefault.jpg"
    },
    {
        id: "sLva5MIY7ZY",
        title: "Woh Ladki Hai Kahan",
        artist: "Shaan, Kavita Krishnamurthy",
        thumb: "https://img.youtube.com/vi/sLva5MIY7ZY/hqdefault.jpg"
    },
    {
        id: "FLUzI9gszcQ",
        title: "Pal Pal",
        artist: "Asira",
        thumb: "https://img.youtube.com/vi/FLUzI9gszcQ/hqdefault.jpg"
    },
    {
        id: "e-S1k9-soT4",
        title: "Cold Heart - PNAU Remix",
        artist: "Elton John, Dua Lipa, PNAU",
        thumb: "https://img.youtube.com/vi/e-S1k9-soT4/hqdefault.jpg"
    },
    {
        id: "BzDK4uzzqT8",
        title: "Afsos",
        artist: "Anuv Jain, AP Dhillon",
        thumb: "https://img.youtube.com/vi/BzDK4uzzqT8/hqdefault.jpg"
    },
    {
        id: "4kw6TSAVXA8",
        title: "Simple Song",
        artist: "Miley Cyrus",
        thumb: "https://img.youtube.com/vi/4kw6TSAVXA8/hqdefault.jpg"
    },
    {
        id: "HvoOWUDsANw",
        title: "I Wanna See You Dance - From \"Kho Gaye Hum Kahan\"",
        artist: "Sachin-Jigar, Saba Azad, Ankur Tewari",
        thumb: "https://img.youtube.com/vi/HvoOWUDsANw/hqdefault.jpg"
    }
        // Add more songs here...
    ],
    "Workout Mixing": [
        {
        id: "dZWtj7drMcE",
        title: "Salaam Namaste",
        artist: "Vishal-Shekhar, Kunal Ganjawala, Vasundhara Das, Jaideep Sahni",
        thumb: "https://img.youtube.com/vi/dZWtj7drMcE/hqdefault.jpg"
    },
    {
        id: "yHVHI-NX3ak",
        title: "Pehli Mohabbat",
        artist: "Darshan Raval",
        thumb: "https://img.youtube.com/vi/yHVHI-NX3ak/hqdefault.jpg"
    },
    {
        id: "nhwmc8mN7AI",
        title: "Mere Nishaan",
        artist: "Darshan Raval",
        thumb: "https://img.youtube.com/vi/nhwmc8mN7AI/hqdefault.jpg"
    },
    {
        id: "BKTdhaxWAZ4",
        title: "Swami Ji Please",
        artist: "Priyanka Meher, Rongpaz",
        thumb: "https://img.youtube.com/vi/BKTdhaxWAZ4/hqdefault.jpg"
    },
    {
        id: "BQ2o2UtOce4",
        title: "Kuch To Hua Hai",
        artist: "Shankar-Ehsaan-Loy, Alka Yagnik, Shaan",
        thumb: "https://img.youtube.com/vi/BQ2o2UtOce4/hqdefault.jpg"
    },
    {
        id: "WmE6f-eABV4",
        title: "Jingle Jingle",
        artist: "Pritam, Mohit Chauhan, Master Saleem, Farhid, Anvita Dutt",
        thumb: "https://img.youtube.com/vi/WmE6f-eABV4/hqdefault.jpg"
    },
    {
        id: "uNTJ1NAvHD8",
        title: "Sunday - Trending Version",
        artist: "Aditya A, NAALAYAK, Ronit Vinta",
        thumb: "https://img.youtube.com/vi/uNTJ1NAvHD8/hqdefault.jpg"
    },
    {
        id: "xVdMD61utMs",
        title: "Agar Main Kahoon",
        artist: "Shankar-Ehsaan-Loy, Alka Yagnik, Udit Narayan",
        thumb: "https://img.youtube.com/vi/xVdMD61utMs/hqdefault.jpg"
    },
    {
        id: "2dE8EzFwgTY",
        title: "Main Aisa Kyon Hoon",
        artist: "Shankar-Ehsaan-Loy, Shaan",
        thumb: "https://img.youtube.com/vi/2dE8EzFwgTY/hqdefault.jpg"
    },
    {
        id: "W16VGhAZziY",
        title: "Kufar",
        artist: "Diljit Dosanjh, MixSingh, Raj Ranjodh",
        thumb: "https://img.youtube.com/vi/W16VGhAZziY/hqdefault.jpg"
    },
    {
        id: "BFfOtbp-vd8",
        title: "Rockabye (feat. Sean Paul & Anne-Marie)",
        artist: "Clean Bandit, Anne-Marie, Sean Paul",
        thumb: "https://img.youtube.com/vi/BFfOtbp-vd8/hqdefault.jpg"
    },
    {
        id: "pspkrExqxWY",
        title: "Tum Se (From \"Teri Baaton Mein Aisa Uljha Jiya\")",
        artist: "Sachin-Jigar, Raghav Chaitanya, Varun Jain, Indraneel",
        thumb: "https://img.youtube.com/vi/pspkrExqxWY/hqdefault.jpg"
    },
    {
        id: "6adnW--HY6A",
        title: "Tajdar-E-Haram - Coke Studio Season 8",
        artist: "Atif Aslam",
        thumb: "https://img.youtube.com/vi/6adnW--HY6A/hqdefault.jpg"
    },
    {
        id: "TNvHJHTacjI",
        title: "Naina (From \"Crew\")",
        artist: "Diljit Dosanjh, Badshah, Raj Ranjodh",
        thumb: "https://img.youtube.com/vi/TNvHJHTacjI/hqdefault.jpg"
    },
    {
        id: "0o0WbQV6OZQ",
        title: "London Boy",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/0o0WbQV6OZQ/hqdefault.jpg"
    },
    {
        id: "CnBX7_ErLvA",
        title: "Summer High",
        artist: "AP Dhillon",
        thumb: "https://img.youtube.com/vi/CnBX7_ErLvA/hqdefault.jpg"
    },
    {
        id: "tIjUfo30r4M",
        title: "Boyfriend",
        artist: "Karan Aujla, Ikky",
        thumb: "https://img.youtube.com/vi/tIjUfo30r4M/hqdefault.jpg"
    },
    {
        id: "xFGZH3BzP2g",
        title: "Bairan",
        artist: "Banjaare",
        thumb: "https://img.youtube.com/vi/xFGZH3BzP2g/hqdefault.jpg"
    },
    {
        id: "YrJ6OZ7VVWc",
        title: "Zaroor",
        artist: "Aparshakti Khurana, Savi Kahlon",
        thumb: "https://img.youtube.com/vi/YrJ6OZ7VVWc/hqdefault.jpg"
    },
    {
        id: "ixMvWTRX-Qk",
        title: "Sk8er Boi",
        artist: "Avril Lavigne",
        thumb: "https://img.youtube.com/vi/ixMvWTRX-Qk/hqdefault.jpg"
    },
    {
        id: "babzie5qi5E",
        title: "Good Girls Go Bad (feat. Leighton Meester)",
        artist: "Cobra Starship, Leighton Meester",
        thumb: "https://img.youtube.com/vi/babzie5qi5E/hqdefault.jpg"
    },
    {
        id: "VzvsSrRXUrM",
        title: "Sahiba",
        artist: "Aditya Rikhari",
        thumb: "https://img.youtube.com/vi/VzvsSrRXUrM/hqdefault.jpg"
    },
    {
        id: "sZvn_-S24uw",
        title: "By My Side",
        artist: "AP Dhillon, Shinda Kahlon",
        thumb: "https://img.youtube.com/vi/sZvn_-S24uw/hqdefault.jpg"
    },
    {
        id: "MKDLqsAsWw8",
        title: "Unse Jaake Kehdo",
        artist: "Justh",
        thumb: "https://img.youtube.com/vi/MKDLqsAsWw8/hqdefault.jpg"
    },
    {
        id: "g0C61gaBKJ8",
        title: "DESIRES",
        artist: "AP Dhillon, Gurinder Gill",
        thumb: "https://img.youtube.com/vi/g0C61gaBKJ8/hqdefault.jpg"
    },
    {
        id: "nma-wCZNmM8",
        title: "Naam Tera",
        artist: "Ndee Kundu",
        thumb: "https://img.youtube.com/vi/nma-wCZNmM8/hqdefault.jpg"
    },
    {
        id: "sLva5MIY7ZY",
        title: "Woh Ladki Hai Kahan",
        artist: "Shaan, Kavita Krishnamurthy",
        thumb: "https://img.youtube.com/vi/sLva5MIY7ZY/hqdefault.jpg"
    },
    {
        id: "FLUzI9gszcQ",
        title: "Pal Pal",
        artist: "Asira",
        thumb: "https://img.youtube.com/vi/FLUzI9gszcQ/hqdefault.jpg"
    },
    {
        id: "e-S1k9-soT4",
        title: "Cold Heart - PNAU Remix",
        artist: "Elton John, Dua Lipa, PNAU",
        thumb: "https://img.youtube.com/vi/e-S1k9-soT4/hqdefault.jpg"
    },
    {
        id: "BzDK4uzzqT8",
        title: "Afsos",
        artist: "Anuv Jain, AP Dhillon",
        thumb: "https://img.youtube.com/vi/BzDK4uzzqT8/hqdefault.jpg"
    },
    {
        id: "4kw6TSAVXA8",
        title: "Simple Song",
        artist: "Miley Cyrus",
        thumb: "https://img.youtube.com/vi/4kw6TSAVXA8/hqdefault.jpg"
    },
    {
        id: "HvoOWUDsANw",
        title: "I Wanna See You Dance - From \"Kho Gaye Hum Kahan\"",
        artist: "Sachin-Jigar, Saba Azad, Ankur Tewari",
        thumb: "https://img.youtube.com/vi/HvoOWUDsANw/hqdefault.jpg"
    }
        // Add more songs here...
    ],
    "Workout Mixx": [
        {
            id: "kJQP7kiw5Fk",
            title: "Chaiyya Chaiyya",
            artist: "Sukhwinder Singh",
            thumb: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg"
        }
        // Add more songs here...
    ]
        // Add more songs here...
    ]

};



