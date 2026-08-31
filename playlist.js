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
    "M": [
        {
        id: "dfnCAmr569k",
        title: "End Game",
        artist: "Taylor Swift,Ed Sheeran,Future",
        thumb: "https://img.youtube.com/vi/dfnCAmr569k/hqdefault.jpg"
    },
    {
        id: "Qhl0bocazGQ",
        title: "Chal Diye Tum Kahan (From  Kabhi Main Kabhi Tum )",
        artist: "AUR",
        thumb: "https://img.youtube.com/vi/Qhl0bocazGQ/hqdefault.jpg"
    },
    {
        id: "8HxbqAsppwU",
        title: "Afterglow",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/8HxbqAsppwU/hqdefault.jpg"
    },
    {
        id: "xYLxUJ9v6KU",
        title: "I Did Something Bad",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/xYLxUJ9v6KU/hqdefault.jpg"
    },
    {
        id: "6Z3QJ4L1Bg0",
        title: "This Is Why We Can't Have Nice Things",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/6Z3QJ4L1Bg0/hqdefault.jpg"
    },
    {
        id: "EgT_us6AsDg",
        title: "Love You Like A Love Song",
        artist: "Selena Gomez & The Scene",
        thumb: "https://img.youtube.com/vi/EgT_us6AsDg/hqdefault.jpg"
    },
    {
        id: "Jb2stN7kH28",
        title: "Our Song",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/Jb2stN7kH28/hqdefault.jpg"
    },
    {
        id: "VsKoOH6DVys",
        title: "London Boy",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/VsKoOH6DVys/hqdefault.jpg"
    },
    {
        id: "3u6lLWGjFLY",
        title: "Naina (From  Crew )",
        artist: "Diljit Dosanjh,Badshah,Raj Ranjodh",
        thumb: "https://img.youtube.com/vi/3u6lLWGjFLY/hqdefault.jpg"
    },
    {
        id: "Ix5z1bRz4Sc",
        title: "Good Girls Go Bad (feat. Leighton Meester)",
        artist: "Cobra Starship,Leighton Meester",
        thumb: "https://img.youtube.com/vi/Ix5z1bRz4Sc/hqdefault.jpg"
    },
    {
        id: "n2dVFdqMYGA",
        title: "Sahiba",
        artist: "Aditya Rikhari",
        thumb: "https://img.youtube.com/vi/n2dVFdqMYGA/hqdefault.jpg"
    },
    {
        id: "Z6ekRJpCnGI",
        title: "One In a Million",
        artist: "Hannah Montana",
        thumb: "https://img.youtube.com/vi/Z6ekRJpCnGI/hqdefault.jpg"
    },
    {
        id: "igIfiqqVHtA",
        title: "Enchanted (Taylor's Version)",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/igIfiqqVHtA/hqdefault.jpg"
    },
    {
        id: "dvXr8UyvAVU",
        title: "Rock Star",
        artist: "Hannah Montana",
        thumb: "https://img.youtube.com/vi/dvXr8UyvAVU/hqdefault.jpg"
    },
    {
        id: "98WtmW-lfeE",
        title: "Teenage Dream",
        artist: "Katy Perry",
        thumb: "https://img.youtube.com/vi/98WtmW-lfeE/hqdefault.jpg"
    },
    {
        id: "X2BYmmTI04I",
        title: "She Looks So Perfect",
        artist: "5 Seconds of Summer",
        thumb: "https://img.youtube.com/vi/X2BYmmTI04I/hqdefault.jpg"
    },
    {
        id: "uEKVZQCEBUc",
        title: "Take Me to the River (I Will Swim)",
        artist: "Alex Yurkiv,Thelma Costolo",
        thumb: "https://img.youtube.com/vi/uEKVZQCEBUc/hqdefault.jpg"
    },
    {
        id: "WMweEpGlu_U",
        title: "Butter",
        artist: "BTS",
        thumb: "https://img.youtube.com/vi/WMweEpGlu_U/hqdefault.jpg"
    },
    {
        id: "FDh1TYJPpbo",
        title: "Chori Chori",
        artist: "Sona Mohapatra,Arijit Singh",
        thumb: "https://img.youtube.com/vi/FDh1TYJPpbo/hqdefault.jpg"
    },
    {
        id: "3-BcH7KowGE",
        title: "New Romantics (Taylor's Version)",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/3-BcH7KowGE/hqdefault.jpg"
    },
    {
        id: "j13oJajXx0M",
        title: "You're So Vain",
        artist: "Carly Simon",
        thumb: "https://img.youtube.com/vi/j13oJajXx0M/hqdefault.jpg"
    },
    {
        id: "P0KasU0HXD0",
        title: "Chaandaniya",
        artist: "Mohan Kannan,Yashita Sharma,Shankar-Ehsaan-Loy,Amitabh Bhattacharya",
        thumb: "https://img.youtube.com/vi/P0KasU0HXD0/hqdefault.jpg"
    },
    {
        id: "e3EZ2YRoihU",
        title: "Dil Ye Bekarar Kyun Hai",
        artist: "Pritam,Mohit Chauhan,Shreya Ghoshal",
        thumb: "https://img.youtube.com/vi/e3EZ2YRoihU/hqdefault.jpg"
    },
    {
        id: "p2EdDiiVHh4",
        title: "Dil Nu",
        artist: "AP Dhillon,Shinda Kahlon",
        thumb: "https://img.youtube.com/vi/p2EdDiiVHh4/hqdefault.jpg"
    },
    {
        id: "1pc60L6mBt0",
        title: "Abhi Kuch Dino Se",
        artist: "Pritam,Mohit Chauhan",
        thumb: "https://img.youtube.com/vi/1pc60L6mBt0/hqdefault.jpg"
    },
    {
        id: "Myw7_Zy_MeU",
        title: "Gehra Hua",
        artist: "Shashwat Sachdev,Arijit Singh,Irshad Kamil,Armaan Khan",
        thumb: "https://img.youtube.com/vi/Myw7_Zy_MeU/hqdefault.jpg"
    },
    {
        id: "AbkEmIgJMcU",
        title: "Pal Pal (with Talwiinder)",
        artist: "Afusic,Talwiinder,AliSoomroMusic",
        thumb: "https://img.youtube.com/vi/AbkEmIgJMcU/hqdefault.jpg"
    },
    {
        id: "OxXKDGO-MYQ",
        title: "LAAVAN",
        artist: "Jasmine Sandlas,Mofusion",
        thumb: "https://img.youtube.com/vi/OxXKDGO-MYQ/hqdefault.jpg"
    },
    {
        id: "DMLrGfMxOQA",
        title: "I Am In Love",
        artist: "Pritam,KK,Dominique,Neelesh Misra",
        thumb: "https://img.youtube.com/vi/DMLrGfMxOQA/hqdefault.jpg"
    },
    {
        id: "p2JF1FNISXk",
        title: "G.N.O. - Girl's Night Out",
        artist: "Miley Cyrus",
        thumb: "https://img.youtube.com/vi/p2JF1FNISXk/hqdefault.jpg"
    },
    {
        id: "F_jIFDLu30Y",
        title: "Choomantar",
        artist: "Sohail Sen,Benny Dayal,Aditi Singh Sharma,Irshad Kamil",
        thumb: "https://img.youtube.com/vi/F_jIFDLu30Y/hqdefault.jpg"
    },
    {
        id: "60vIVA5AZ9M",
        title: "Slow Motion Angreza",
        artist: "Shankar-Ehsaan-Loy,Sukhwinder Singh,Loy Mendonsa,Shankar Mahadevan",
        thumb: "https://img.youtube.com/vi/60vIVA5AZ9M/hqdefault.jpg"
    },
    {
        id: "o1RducJbUdc",
        title: "Tum Hi Ho Bandhu",
        artist: "Pritam,Neeraj Shridhar,Kavita Seth",
        thumb: "https://img.youtube.com/vi/o1RducJbUdc/hqdefault.jpg"
    },
    {
        id: "Xt4fLHbuqyA",
        title: "More Than Words (Glee Cast Version)",
        artist: "Glee Cast",
        thumb: "https://img.youtube.com/vi/Xt4fLHbuqyA/hqdefault.jpg"
    },
    {
        id: "tCXGJQYZ9JA",
        title: "Delicate",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/tCXGJQYZ9JA/hqdefault.jpg"
    },
    {
        id: "toBzXCCYX2E",
        title: "The Bitch Is Back",
        artist: "Ella Bright",
        thumb: "https://img.youtube.com/vi/toBzXCCYX2E/hqdefault.jpg"
    },
    {
        id: "ZnpsSJ2Tg5Q",
        title: "Koi Aap Jaisa",
        artist: "Madhushree,Jayesh Gandhi,Kunal Ganjawala",
        thumb: "https://img.youtube.com/vi/ZnpsSJ2Tg5Q/hqdefault.jpg"
    },
    {
        id: "IIg8H60bRJo",
        title: "Woh Ladki Hai Kahan",
        artist: "Shaan,Kavita Krishnamurthy",
        thumb: "https://img.youtube.com/vi/IIg8H60bRJo/hqdefault.jpg"
    },
    {
        id: "3DcoC8p9az8",
        title: "Training Season",
        artist: "Dua Lipa",
        thumb: "https://img.youtube.com/vi/3DcoC8p9az8/hqdefault.jpg"
    },
    {
        id: "pAzFRfzwT-g",
        title: "Gotta Go My Own Way",
        artist: "Zac Efron,Vanessa Hudgens,Disney",
        thumb: "https://img.youtube.com/vi/pAzFRfzwT-g/hqdefault.jpg"
    },
    {
        id: "uEssK8o3jKg",
        title: "Florida!!! (feat. Florence + The Machine)",
        artist: "Taylor Swift,Florence + The Machine",
        thumb: "https://img.youtube.com/vi/uEssK8o3jKg/hqdefault.jpg"
    },
    {
        id: "kknKs7cAcO8",
        title: "Play Date",
        artist: "Melanie Martinez",
        thumb: "https://img.youtube.com/vi/kknKs7cAcO8/hqdefault.jpg"
    },
    {
        id: "F2m4HPLvj-4",
        title: "Jaiye Sajana",
        artist: "Shashwat Sachdev,Jasmine Sandlas,Satinder Sartaaj",
        thumb: "https://img.youtube.com/vi/F2m4HPLvj-4/hqdefault.jpg"
    },
    {
        id: "fEaF31ojyjQ",
        title: "Naam Tera",
        artist: "Ndee Kundu",
        thumb: "https://img.youtube.com/vi/fEaF31ojyjQ/hqdefault.jpg"
    },
    {
        id: "w3MMMgxjLFk",
        title: "Dum Dum",
        artist: "Salim–Sulaiman,Benny Dayal,Himani Kapoor,Amitabh Bhattacharya",
        thumb: "https://img.youtube.com/vi/w3MMMgxjLFk/hqdefault.jpg"
    },
    {
        id: "2JgvVfOfoWI",
        title: "Style (Taylor's Version)",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/2JgvVfOfoWI/hqdefault.jpg"
    },
    {
        id: "QcIy9NiNbmo",
        title: "Bad Blood (feat. Kendrick Lamar) (Taylor's Version)",
        artist: "Taylor Swift,Kendrick Lamar",
        thumb: "https://img.youtube.com/vi/QcIy9NiNbmo/hqdefault.jpg"
    },
    {
        id: "ia1iuXbEaYQ",
        title: "Rare",
        artist: "Selena Gomez",
        thumb: "https://img.youtube.com/vi/ia1iuXbEaYQ/hqdefault.jpg"
    },
    {
        id: "Gigpglm3XNw",
        title: "Kaafi Hai Na (From  Musafir Cafe )",
        artist: "Garvit - Priyansh,Priyansh Srivastava,Jonita Gandhi,Garvit Soni,Aniket Shukla",
        thumb: "https://img.youtube.com/vi/Gigpglm3XNw/hqdefault.jpg"
    },
    {
        id: "hdzPbvBBB9g",
        title: "Just Chill",
        artist: "Sonu Nigam,Jayesh Gandhi,Amrita Kak",
        thumb: "https://img.youtube.com/vi/hdzPbvBBB9g/hqdefault.jpg"
    },
    {
        id: "Hovtm2c2sD4",
        title: "Pehli Baar",
        artist: "Sukriti Kakar,Siddharth Mahadevan",
        thumb: "https://img.youtube.com/vi/Hovtm2c2sD4/hqdefault.jpg"
    },
    {
        id: "tBuvxvrKWZo",
        title: "Chale Jaise Hawaien (From  Main Hoon Na )",
        artist: "KK,Vasundhara Das",
        thumb: "https://img.youtube.com/vi/tBuvxvrKWZo/hqdefault.jpg"
    },
    {
        id: "t36ZzmpZSzs",
        title: "Aaj Ki Raat",
        artist: "Alisha Chinai,Mahalakshmi Iyer,Sonu Nigam",
        thumb: "https://img.youtube.com/vi/t36ZzmpZSzs/hqdefault.jpg"
    },
    {
        id: "YPlIhgAX9AQ",
        title: "Offo",
        artist: "Aditi Singh Sharma,Amitabh Bhattacharya,Shankar-Ehsaan-Loy",
        thumb: "https://img.youtube.com/vi/YPlIhgAX9AQ/hqdefault.jpg"
    },
    {
        id: "Nnop2walGmM",
        title: "Tum Se (From  Teri Baaton Mein Aisa Uljha Jiya )",
        artist: "Sachin-Jigar,Raghav Chaitanya,Varun Jain,Indraneel",
        thumb: "https://img.youtube.com/vi/Nnop2walGmM/hqdefault.jpg"
    },
    {
        id: "Zrp68sXgyWA",
        title: "Gimme! Gimme! Gimme! (A Man After Midnight) - From 'Mamma Mia!' Original Motion Picture Soundtrack",
        artist: "Amanda Seyfried,Ashley Lilley,Rachel McDowall",
        thumb: "https://img.youtube.com/vi/Zrp68sXgyWA/hqdefault.jpg"
    },
    {
        id: "rg18Kf4en2o",
        title: "Karma",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/rg18Kf4en2o/hqdefault.jpg"
    }
        // Add more songs here...
    ],
    "Cousins": [
        
            {
        id: "MhXCj8E9CZU",
        title: "Samjho Na",
        artist: "Aditya Rikhari",
        thumb: "https://img.youtube.com/vi/MhXCj8E9CZU/hqdefault.jpg"
    },
    {
        id: "AbkEmIgJMcU",
        title: "Pal Pal (with Talwiinder)",
        artist: "Afusic,Talwiinder,AliSoomroMusic",
        thumb: "https://img.youtube.com/vi/AbkEmIgJMcU/hqdefault.jpg"
    },
    {
        id: "oafxkMv4xnc",
        title: "Bairan",
        artist: "Banjaare",
        thumb: "https://img.youtube.com/vi/oafxkMv4xnc/hqdefault.jpg"
    },
    {
        id: "OxXKDGO-MYQ",
        title: "LAAVAN",
        artist: "Jasmine Sandlas,Mofusion",
        thumb: "https://img.youtube.com/vi/OxXKDGO-MYQ/hqdefault.jpg"
    },
    {
        id: "PKDANm2KWX4",
        title: "Maahi",
        artist: "Madhur Sharma,Chirag Soni,Vishal Pande",
        thumb: "https://img.youtube.com/vi/PKDANm2KWX4/hqdefault.jpg"
    },
    {
        id: "fCFqEI0PCa8",
        title: "Teri Hogaiyaan - From  Broken But Beautiful Season 2 ",
        artist: "Vishal Mishra",
        thumb: "https://img.youtube.com/vi/fCFqEI0PCa8/hqdefault.jpg"
    },
    {
        id: "RLtPW0GQTnI",
        title: "Chain Aap Ko",
        artist: "Shaan,Sadhana Sargam",
        thumb: "https://img.youtube.com/vi/RLtPW0GQTnI/hqdefault.jpg"
    },
    {
        id: "2JgvVfOfoWI",
        title: "Style (Taylor's Version)",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/2JgvVfOfoWI/hqdefault.jpg"
    },
    {
        id: "B7SkAq_94J8",
        title: "Pehla Pyaar (From  Kabir Singh )",
        artist: "Armaan Malik",
        thumb: "https://img.youtube.com/vi/B7SkAq_94J8/hqdefault.jpg"
    },
    {
        id: "dbdtBQ16CXc",
        title: "Pappu Can't Dance",
        artist: "Benny Dayal,Naresh Iyer,Satish Chakravarthy,Aslam,Blaaze,Tanvi Shah,Bhargavi Pillai",
        thumb: "https://img.youtube.com/vi/dbdtBQ16CXc/hqdefault.jpg"
    },
    {
        id: "tBuvxvrKWZo",
        title: "Chale Jaise Hawaien (From  Main Hoon Na )",
        artist: "KK,Vasundhara Das",
        thumb: "https://img.youtube.com/vi/tBuvxvrKWZo/hqdefault.jpg"
    },
    {
        id: "nFgsBxw-zWQ",
        title: "Aayi Nai (From  Stree 2 )",
        artist: "Sachin-Jigar,Pawan Singh,Simran Choudhary,Divya Kumar,Amitabh Bhattacharya",
        thumb: "https://img.youtube.com/vi/nFgsBxw-zWQ/hqdefault.jpg"
    },
    {
        id: "YPlIhgAX9AQ",
        title: "Offo",
        artist: "Aditi Singh Sharma,Amitabh Bhattacharya,Shankar-Ehsaan-Loy",
        thumb: "https://img.youtube.com/vi/YPlIhgAX9AQ/hqdefault.jpg"
    },
    {
        id: "3u6lLWGjFLY",
        title: "Naina (From  Crew )",
        artist: "Diljit Dosanjh,Badshah,Raj Ranjodh",
        thumb: "https://img.youtube.com/vi/3u6lLWGjFLY/hqdefault.jpg"
    },
    {
        id: "WMweEpGlu_U",
        title: "Butter",
        artist: "BTS",
        thumb: "https://img.youtube.com/vi/WMweEpGlu_U/hqdefault.jpg"
    }
        
        
    ],
    "Collecting": [
        {
        id: "cj84OtodGmA",
        title: "Laaree Chootee",
        artist: "Call",
        thumb: "https://img.youtube.com/vi/cj84OtodGmA/hqdefault.jpg"
    },
    {
        id: "ex24cVik7R8",
        title: "Sajni",
        artist: "Jal",
        thumb: "https://img.youtube.com/vi/ex24cVik7R8/hqdefault.jpg"
    },
    {
        id: "rCoPr8UwRMc",
        title: "Waalian",
        artist: "Harnoor",
        thumb: "https://img.youtube.com/vi/rCoPr8UwRMc/hqdefault.jpg"
    },
    {
        id: "9udS0mpi1L4",
        title: "Udaarian",
        artist: "Satinder Sartaaj",
        thumb: "https://img.youtube.com/vi/9udS0mpi1L4/hqdefault.jpg"
    },
    {
        id: "ID_NOT_FOUND",
        title: "36 Mere Vargiya",
        artist: "Jasmine Sandlas",
        thumb: "https://img.youtube.com/vi/ID_NOT_FOUND/hqdefault.jpg"
    },
    {
        id: "g5U7AqetuEA",
        title: "BIBA",
        artist: "Farasat Anees,Slick Trick,Toshi",
        thumb: "https://img.youtube.com/vi/g5U7AqetuEA/hqdefault.jpg"
    },
    {
        id: "sTC1ZHBeR9U",
        title: "Faida Chak Gayi",
        artist: "Garry Sandhu",
        thumb: "https://img.youtube.com/vi/sTC1ZHBeR9U/hqdefault.jpg"
    },
    {
        id: "QhfW9oQBa28",
        title: "Badnam Gabru",
        artist: "Masoom Sharma,Manisha Sharma",
        thumb: "https://img.youtube.com/vi/QhfW9oQBa28/hqdefault.jpg"
    },
    {
        id: "9ljeq5i62o0",
        title: "Sachiyan Yaariyan",
        artist: "Ravneet Singh,Shriya Jain",
        thumb: "https://img.youtube.com/vi/9ljeq5i62o0/hqdefault.jpg"
    },
    {
        id: "YykjpeuMNEk",
        title: "Hymn for the Weekend",
        artist: "Coldplay",
        thumb: "https://img.youtube.com/vi/YykjpeuMNEk/hqdefault.jpg"
    },
    {
        id: "1fwJ8H5wWCU",
        title: "Numb Little Bug",
        artist: "Em Beihold",
        thumb: "https://img.youtube.com/vi/1fwJ8H5wWCU/hqdefault.jpg"
    },
    {
        id: "fO9xunnaEVc",
        title: "Apsraa",
        artist: "Jaani,Asees Kaur",
        thumb: "https://img.youtube.com/vi/fO9xunnaEVc/hqdefault.jpg"
    },
    {
        id: "CV315UIeOZg",
        title: "Chaand Baaliyan",
        artist: "Aditya A",
        thumb: "https://img.youtube.com/vi/CV315UIeOZg/hqdefault.jpg"
    },
    {
        id: "ID_NOT_FOUND",
        title: "",
        artist: "",
        thumb: "https://img.youtube.com/vi/ID_NOT_FOUND/hqdefault.jpg"
    },
    {
        id: "DaXWGsYBIQA",
        title: "Tere Naal",
        artist: "Akhil Sachdeva",
        thumb: "https://img.youtube.com/vi/DaXWGsYBIQA/hqdefault.jpg"
    },
    {
        id: "XCQK6LmhYqc",
        title: "Let You Love Me",
        artist: "Rita Ora",
        thumb: "https://img.youtube.com/vi/XCQK6LmhYqc/hqdefault.jpg"
    },
    {
        id: "sFMRqxCexDk",
        title: "Choo Lo",
        artist: "The Local Train",
        thumb: "https://img.youtube.com/vi/sFMRqxCexDk/hqdefault.jpg"
    },
    {
        id: "5Eqb_-j3FDA",
        title: "Pasoori",
        artist: "Ali Sethi,Shae Gill",
        thumb: "https://img.youtube.com/vi/5Eqb_-j3FDA/hqdefault.jpg"
    },
    {
        id: "ic1l36GrNOU",
        title: "This Town",
        artist: "Niall Horan",
        thumb: "https://img.youtube.com/vi/ic1l36GrNOU/hqdefault.jpg"
    },
    {
        id: "_7kgU0lyVhw",
        title: "Akhar (From  Lahoriye  Soundtrack)",
        artist: "Amrinder Gill,Jatinder Shah",
        thumb: "https://img.youtube.com/vi/_7kgU0lyVhw/hqdefault.jpg"
    },
    {
        id: "k3zimSRKqNw",
        title: "Follow You",
        artist: "Imagine Dragons",
        thumb: "https://img.youtube.com/vi/k3zimSRKqNw/hqdefault.jpg"
    },
    {
        id: "B-oZ64A_TeQ",
        title: "Deewane Hum Nahi",
        artist: "Aditya Yadav",
        thumb: "https://img.youtube.com/vi/B-oZ64A_TeQ/hqdefault.jpg"
    },
    {
        id: "ID_NOT_FOUND",
        title: "",
        artist: "",
        thumb: "https://img.youtube.com/vi/ID_NOT_FOUND/hqdefault.jpg"
    },
    {
        id: "GCWl50HQZIM",
        title: "like my father",
        artist: "Jax",
        thumb: "https://img.youtube.com/vi/GCWl50HQZIM/hqdefault.jpg"
    },
    {
        id: "cHHLHGNpCSA",
        title: "Waiting For Love",
        artist: "Avicii",
        thumb: "https://img.youtube.com/vi/cHHLHGNpCSA/hqdefault.jpg"
    },
    {
        id: "K4I7VDyF44k",
        title: "Mann Mein Tu",
        artist: "Taha G",
        thumb: "https://img.youtube.com/vi/K4I7VDyF44k/hqdefault.jpg"
    },
    {
        id: "dPaZNGRcPK4",
        title: "Medley: Kehna Galat Galat / Halka Halka Suroor",
        artist: "Madhur Sharma,Nusrat Fateh Ali Khan",
        thumb: "https://img.youtube.com/vi/dPaZNGRcPK4/hqdefault.jpg"
    },
    {
        id: "o-7b6ctrQX0",
        title: "Kali Kali Zulfon Ke",
        artist: "Madhur Sharma",
        thumb: "https://img.youtube.com/vi/o-7b6ctrQX0/hqdefault.jpg"
    },
    {
        id: "PHULePbksEU",
        title: "Aaya Na Tu",
        artist: "Arjun Kanungo,Momina Mustehsan,Kunaal Vermaa",
        thumb: "https://img.youtube.com/vi/PHULePbksEU/hqdefault.jpg"
    },
    {
        id: "sCbbMZ-q4-I",
        title: "Lut Gaye",
        artist: "Jubin Nautiyal,Tanishk Bagchi,Manoj Muntashir,Nusrat Fateh Ali Khan",
        thumb: "https://img.youtube.com/vi/sCbbMZ-q4-I/hqdefault.jpg"
    },
    {
        id: "ID_NOT_FOUND",
        title: "",
        artist: "",
        thumb: "https://img.youtube.com/vi/ID_NOT_FOUND/hqdefault.jpg"
    },
    {
        id: "J7ck984Qhso",
        title: "Ik Lamha",
        artist: "Azaan Sami Khan",
        thumb: "https://img.youtube.com/vi/J7ck984Qhso/hqdefault.jpg"
    },
    {
        id: "M4XeKEMkYFI",
        title: "Bewajah",
        artist: "Himesh Reshammiya",
        thumb: "https://img.youtube.com/vi/M4XeKEMkYFI/hqdefault.jpg"
    },
    {
        id: "ID_NOT_FOUND",
        title: "",
        artist: "",
        thumb: "https://img.youtube.com/vi/ID_NOT_FOUND/hqdefault.jpg"
    },
    {
        id: "ynMk2EwRi4Q",
        title: "Sorry, Blame It On Me",
        artist: "Akon",
        thumb: "https://img.youtube.com/vi/ynMk2EwRi4Q/hqdefault.jpg"
    },
    {
        id: "vIaH35-MLsk",
        title: "Right Now (Na Na Na)",
        artist: "Akon",
        thumb: "https://img.youtube.com/vi/vIaH35-MLsk/hqdefault.jpg"
    },
    {
        id: "GjNY5HGcopA",
        title: "W.I.T.C.H.",
        artist: "Devon Cole",
        thumb: "https://img.youtube.com/vi/GjNY5HGcopA/hqdefault.jpg"
    },
    {
        id: "5FU5j_DvZPg",
        title: "Mere Humsafar (Original Score) [Female Version]",
        artist: "Yashal Shahid",
        thumb: "https://img.youtube.com/vi/5FU5j_DvZPg/hqdefault.jpg"
    },
    {
        id: "FvOpPeKSf_4",
        title: "Glimpse of Us",
        artist: "Joji",
        thumb: "https://img.youtube.com/vi/FvOpPeKSf_4/hqdefault.jpg"
    },
    {
        id: "yo7623fuTZk",
        title: "Patola",
        artist: "Guru Randhawa,Preet Hundal,Bohemia",
        thumb: "https://img.youtube.com/vi/yo7623fuTZk/hqdefault.jpg"
    },
    {
        id: "DIvHIjOYq3U",
        title: "Mera Dil Bhi Kitna Pagal Hai",
        artist: "Kumar Sanu,Alka Yagnik",
        thumb: "https://img.youtube.com/vi/DIvHIjOYq3U/hqdefault.jpg"
    },
    {
        id: "1Z_cClBsABE",
        title: "Daryaa",
        artist: "Ammy Virk,Shahid Mallya",
        thumb: "https://img.youtube.com/vi/1Z_cClBsABE/hqdefault.jpg"
    },
    {
        id: "7XwTlby_ie0",
        title: "Kiven Mukhde",
        artist: "Madhur Sharma",
        thumb: "https://img.youtube.com/vi/7XwTlby_ie0/hqdefault.jpg"
    },
    {
        id: "fG70qm6usR8",
        title: "TERE TE",
        artist: "AP Dhillon,Gurinder Gill",
        thumb: "https://img.youtube.com/vi/fG70qm6usR8/hqdefault.jpg"
    },
    {
        id: "S-ezhTXPVGU",
        title: "Sakhiyaan",
        artist: "Maninder Buttar",
        thumb: "https://img.youtube.com/vi/S-ezhTXPVGU/hqdefault.jpg"
    },
    {
        id: "vvRo5tOU32Q",
        title: "Tu Hi Das De",
        artist: "Mickey Singh,Simar Panag,Tedi Pagg",
        thumb: "https://img.youtube.com/vi/vvRo5tOU32Q/hqdefault.jpg"
    },
    {
        id: "iSo9l950QLo",
        title: "Shiddat Title Track",
        artist: "Manan Bhardwaj",
        thumb: "https://img.youtube.com/vi/iSo9l950QLo/hqdefault.jpg"
    },
    {
        id: "USGOWMsnIG4",
        title: "Hum Dum",
        artist: "Ankit Tiwari",
        thumb: "https://img.youtube.com/vi/USGOWMsnIG4/hqdefault.jpg"
    },
    {
        id: "CJq1hGSO89A",
        title: "Chitta",
        artist: "Manan Bhardwaj",
        thumb: "https://img.youtube.com/vi/CJq1hGSO89A/hqdefault.jpg"
    },
    {
        id: "Irw8llgSC3s",
        title: "Jug Jug Jeeve",
        artist: "Sachet Tandon,Parampara Tandon,Sachin-Jigar",
        thumb: "https://img.youtube.com/vi/Irw8llgSC3s/hqdefault.jpg"
    },
    {
        id: "P-DhwN87JDY",
        title: "Do You Know",
        artist: "Diljit Dosanjh",
        thumb: "https://img.youtube.com/vi/P-DhwN87JDY/hqdefault.jpg"
    },
    {
        id: "gVMyXehSnE8",
        title: "Dekha Tenu",
        artist: "Kisswe Music",
        thumb: "https://img.youtube.com/vi/gVMyXehSnE8/hqdefault.jpg"
    },
    {
        id: "jn77BhLMGc8",
        title: "Parshawan",
        artist: "Harnoor",
        thumb: "https://img.youtube.com/vi/jn77BhLMGc8/hqdefault.jpg"
    },
    {
        id: "ID_NOT_FOUND",
        title: "",
        artist: "",
        thumb: "https://img.youtube.com/vi/ID_NOT_FOUND/hqdefault.jpg"
    },
    {
        id: "yL8Ztpxr5iU",
        title: "Aankhein",
        artist: "Vilen",
        thumb: "https://img.youtube.com/vi/yL8Ztpxr5iU/hqdefault.jpg"
    },
    {
        id: "ID_NOT_FOUND",
        title: "",
        artist: "",
        thumb: "https://img.youtube.com/vi/ID_NOT_FOUND/hqdefault.jpg"
    },
    {
        id: "1onhvVnL8B8",
        title: "Mann Mera",
        artist: "Gajendra Verma",
        thumb: "https://img.youtube.com/vi/1onhvVnL8B8/hqdefault.jpg"
    },
    {
        id: "s8myKcqM7xc",
        title: "Saari Raat",
        artist: "Jyotica Tangri",
        thumb: "https://img.youtube.com/vi/s8myKcqM7xc/hqdefault.jpg"
    },
    {
        id: "o-7b6ctrQX0",
        title: "Kali Kali Zulfon Ke (Lo-Fi)",
        artist: "Madhur Sharma",
        thumb: "https://img.youtube.com/vi/o-7b6ctrQX0/hqdefault.jpg"
    },
    {
        id: "i96UO8-GFvw",
        title: "Aaoge Tum Kabhi",
        artist: "The Local Train",
        thumb: "https://img.youtube.com/vi/i96UO8-GFvw/hqdefault.jpg"
    },
    {
        id: "pvs0s3moFwQ",
        title: "Log Kehte Hain Pagal",
        artist: "Rahul Jai",
        thumb: "https://img.youtube.com/vi/pvs0s3moFwQ/hqdefault.jpg"
    },
    {
        id: "cqP8I5aaud8",
        title: "Insane",
        artist: "AP Dhillon,Shinda Kahlon,Gurinder Gill,Gminxr",
        thumb: "https://img.youtube.com/vi/cqP8I5aaud8/hqdefault.jpg"
    },
    {
        id: "GthYntziOWU",
        title: "Kore Kore Sapne",
        artist: "Kumar Sanu,Anuradha Paudwal",
        thumb: "https://img.youtube.com/vi/GthYntziOWU/hqdefault.jpg"
    },
    {
        id: "o8foCIoVtRc",
        title: "Ja Tujhko",
        artist: "Deepak Rathore",
        thumb: "https://img.youtube.com/vi/o8foCIoVtRc/hqdefault.jpg"
    },
    {
        id: "h5WN3pkxPF0",
        title: "Baila Conmigo (with Rauw Alejandro)",
        artist: "Selena Gomez,Rauw Alejandro",
        thumb: "https://img.youtube.com/vi/h5WN3pkxPF0/hqdefault.jpg"
    },
    {
        id: "vRXZj0DzXIA",
        title: "Ice Cream (with Selena Gomez)",
        artist: "BLACKPINK,Selena Gomez",
        thumb: "https://img.youtube.com/vi/vRXZj0DzXIA/hqdefault.jpg"
    },
    {
        id: "OSb14XGzkrs",
        title: "Paparazzi",
        artist: "Lady Gaga",
        thumb: "https://img.youtube.com/vi/OSb14XGzkrs/hqdefault.jpg"
    },
    {
        id: "nqUN530Rgtw",
        title: "Summer High",
        artist: "AP Dhillon",
        thumb: "https://img.youtube.com/vi/nqUN530Rgtw/hqdefault.jpg"
    },
    {
        id: "dCmp56tSSmA",
        title: "Born to Shine",
        artist: "Diljit Dosanjh",
        thumb: "https://img.youtube.com/vi/dCmp56tSSmA/hqdefault.jpg"
    },
    {
        id: "E1UFFYaqSRA",
        title: "Mayein Ni Meriye",
        artist: "Hansraj Raghuwanshi",
        thumb: "https://img.youtube.com/vi/E1UFFYaqSRA/hqdefault.jpg"
    },
    {
        id: "szBuxfX6AeU",
        title: "Pahado Ki Aur",
        artist: "UK Rapi Boy",
        thumb: "https://img.youtube.com/vi/szBuxfX6AeU/hqdefault.jpg"
    },
    {
        id: "mNuhKUOD_A0",
        title: "Deva Deva (From  Brahmastra )",
        artist: "Pritam,Arijit Singh,Amitabh Bhattacharya,Jonita Gandhi",
        thumb: "https://img.youtube.com/vi/mNuhKUOD_A0/hqdefault.jpg"
    },
    {
        id: "f-x83gtvqgA",
        title: "Cold Hours",
        artist: "aleemrk,Umair",
        thumb: "https://img.youtube.com/vi/f-x83gtvqgA/hqdefault.jpg"
    },
    {
        id: "p03TIGqEc8o",
        title: "1, 2, 3 (feat. Jason Derulo & De La Ghetto)",
        artist: "Sofía Reyes,Jason Derulo,De La Ghetto",
        thumb: "https://img.youtube.com/vi/p03TIGqEc8o/hqdefault.jpg"
    },
    {
        id: "6RrEQJNZwPQ",
        title: "No Love",
        artist: "Shubh",
        thumb: "https://img.youtube.com/vi/6RrEQJNZwPQ/hqdefault.jpg"
    },
    {
        id: "GxldQ9eX2wo",
        title: "Until I Found You",
        artist: "Stephen Sanchez",
        thumb: "https://img.youtube.com/vi/GxldQ9eX2wo/hqdefault.jpg"
    },
    {
        id: "NaFd8ucHLuo",
        title: "abcdefu",
        artist: "GAYLE",
        thumb: "https://img.youtube.com/vi/NaFd8ucHLuo/hqdefault.jpg"
    },
    {
        id: "vJQMhj6WYZA",
        title: "Barbaadiyan",
        artist: "Sachet Tandon,Nikhita Gandhi,Madhubanti Bagchi,Sachin-Jigar",
        thumb: "https://img.youtube.com/vi/vJQMhj6WYZA/hqdefault.jpg"
    },
    {
        id: "H5v3kku4y6Q",
        title: "As It Was",
        artist: "Harry Styles",
        thumb: "https://img.youtube.com/vi/H5v3kku4y6Q/hqdefault.jpg"
    },
    {
        id: "3ONzh3tf884",
        title: "DESIRES",
        artist: "AP Dhillon,Gurinder Gill",
        thumb: "https://img.youtube.com/vi/3ONzh3tf884/hqdefault.jpg"
    },
    {
        id: "RPFkaHG2ONA",
        title: "Meri Jaan",
        artist: "Sanjay Leela Bhansali,Neeti Mohan",
        thumb: "https://img.youtube.com/vi/RPFkaHG2ONA/hqdefault.jpg"
    },
    {
        id: "vX2cDW8LUWk",
        title: "Excuses",
        artist: "AP Dhillon,Gurinder Gill,Intense",
        thumb: "https://img.youtube.com/vi/vX2cDW8LUWk/hqdefault.jpg"
    },
    {
        id: "FLGCGc7sAUw",
        title: "Build a Bitch",
        artist: "Bella Poarch",
        thumb: "https://img.youtube.com/vi/FLGCGc7sAUw/hqdefault.jpg"
    },
    {
        id: "Cihwyr6zFcY",
        title: "Gypsy",
        artist: "G.D. Kaur,Dinesh Golan,Pranjal Dahiya,Shine",
        thumb: "https://img.youtube.com/vi/Cihwyr6zFcY/hqdefault.jpg"
    },
    {
        id: "Y-vvVsYPYms",
        title: "Rupsa Ra Moti",
        artist: "digV,Sparsh Agrawal",
        thumb: "https://img.youtube.com/vi/Y-vvVsYPYms/hqdefault.jpg"
    },
    {
        id: "Lo4_K4relMg",
        title: "SNAP",
        artist: "Rosa Linn",
        thumb: "https://img.youtube.com/vi/Lo4_K4relMg/hqdefault.jpg"
    },
    {
        id: "N6tv11_KMiM",
        title: "So Good",
        artist: "Halsey",
        thumb: "https://img.youtube.com/vi/N6tv11_KMiM/hqdefault.jpg"
    },
    {
        id: "tQsIFoAzzRs",
        title: "Valam (From  Made in China )",
        artist: "Sachin-Jigar,Arijit Singh,Priya Saraiya",
        thumb: "https://img.youtube.com/vi/tQsIFoAzzRs/hqdefault.jpg"
    },
    {
        id: "90RLzVUuXe4",
        title: "I'm Good (Blue)",
        artist: "David Guetta,Bebe Rexha",
        thumb: "https://img.youtube.com/vi/90RLzVUuXe4/hqdefault.jpg"
    },
    {
        id: "gPCCYMeXin0",
        title: "Made You Look",
        artist: "Meghan Trainor",
        thumb: "https://img.youtube.com/vi/gPCCYMeXin0/hqdefault.jpg"
    },
    {
        id: "ApXoWvfEYVU",
        title: "Sunflower - Spider-Man: Into the Spider-Verse",
        artist: "Post Malone,Swae Lee",
        thumb: "https://img.youtube.com/vi/ApXoWvfEYVU/hqdefault.jpg"
    },
    {
        id: "5jlI4uzZGjU",
        title: "Feel This Moment (feat. Christina Aguilera)",
        artist: "Pitbull,Christina Aguilera",
        thumb: "https://img.youtube.com/vi/5jlI4uzZGjU/hqdefault.jpg"
    },
    {
        id: "vEmBUhnBtFI",
        title: "Madhubala",
        artist: "Amit Trivedi",
        thumb: "https://img.youtube.com/vi/vEmBUhnBtFI/hqdefault.jpg"
    },
    {
        id: "OC9gl-UEYVo",
        title: "Ghodey Pe Sawaar (From  Qala )",
        artist: "Amit Trivedi,Amitabh Bhattacharya,Sireesha Bhagavatula",
        thumb: "https://img.youtube.com/vi/OC9gl-UEYVo/hqdefault.jpg"
    },
    {
        id: "w74c6Wnsz8g",
        title: "Lagan Laagi Re",
        artist: "Amit Trivedi,Shreya Ghoshal,Kavita Seth",
        thumb: "https://img.youtube.com/vi/w74c6Wnsz8g/hqdefault.jpg"
    },
    {
        id: "9f06QZCVUHg",
        title: "Summer Of '69",
        artist: "Bryan Adams",
        thumb: "https://img.youtube.com/vi/9f06QZCVUHg/hqdefault.jpg"
    },
    {
        id: "xFYQQPAOz7Y",
        title: "Lose Yourself",
        artist: "Eminem",
        thumb: "https://img.youtube.com/vi/xFYQQPAOz7Y/hqdefault.jpg"
    },
    {
        id: "4JipHEz53sU",
        title: "Super Bass",
        artist: "Nicki Minaj",
        thumb: "https://img.youtube.com/vi/4JipHEz53sU/hqdefault.jpg"
    },
    {
        id: "nPHfAl5gcGo",
        title: "Ring",
        artist: "Selena Gomez",
        thumb: "https://img.youtube.com/vi/nPHfAl5gcGo/hqdefault.jpg"
    },
    {
        id: "YrMpWeGach4",
        title: "Shehzada Title Track",
        artist: "Pritam,Sonu Nigam,Mayur Puri",
        thumb: "https://img.youtube.com/vi/YrMpWeGach4/hqdefault.jpg"
    },
    {
        id: "2qzcHLyv3N0",
        title: "The Joker And The Queen (feat. Taylor Swift)",
        artist: "Ed Sheeran,Taylor Swift",
        thumb: "https://img.youtube.com/vi/2qzcHLyv3N0/hqdefault.jpg"
    },
    {
        id: "qE3DfF66DNA",
        title: "Dus Bahane",
        artist: "Vishal-Shekhar,Shaan,KK",
        thumb: "https://img.youtube.com/vi/qE3DfF66DNA/hqdefault.jpg"
    },
    {
        id: "cQNeFYgMjg0",
        title: "Mai Ni Meriye",
        artist: "Mohit Chauhan",
        thumb: "https://img.youtube.com/vi/cQNeFYgMjg0/hqdefault.jpg"
    },
    {
        id: "S_5Wr-plZM4",
        title: "Jeetu Bagdwal (feat. Shraddha Kuhupriya)",
        artist: "Pandavaas,Shraddha Kuhupriya",
        thumb: "https://img.youtube.com/vi/S_5Wr-plZM4/hqdefault.jpg"
    },
    {
        id: "Ug25rwU9Le4",
        title: "Gajina Live (Pandavaas)",
        artist: "Pandavaas",
        thumb: "https://img.youtube.com/vi/Ug25rwU9Le4/hqdefault.jpg"
    },
    {
        id: "WIJAr8Hs4L4",
        title: "Chand",
        artist: "Masoom Sharma",
        thumb: "https://img.youtube.com/vi/WIJAr8Hs4L4/hqdefault.jpg"
    },
    {
        id: "LxSJrwi8oqY",
        title: "Badnam Gabru (Lofi Mix)",
        artist: "Masoom Sharma,Manisha Sharma,Sweta Chauhan",
        thumb: "https://img.youtube.com/vi/LxSJrwi8oqY/hqdefault.jpg"
    },
    {
        id: "8WWv5_k8D14",
        title: "8 Parche",
        artist: "Baani Sandhu,Gur Sidhu",
        thumb: "https://img.youtube.com/vi/8WWv5_k8D14/hqdefault.jpg"
    },
    {
        id: "AXMtX6L3bVo",
        title: "Raaton",
        artist: "Aditya Rikhari",
        thumb: "https://img.youtube.com/vi/AXMtX6L3bVo/hqdefault.jpg"
    },
    {
        id: "Ph54wQG8ynk",
        title: "Never Be the Same",
        artist: "Camila Cabello",
        thumb: "https://img.youtube.com/vi/Ph54wQG8ynk/hqdefault.jpg"
    },
    {
        id: "MldmN-0b9j4",
        title: "Main Kho Gaya",
        artist: "Kushagra,Showkidd,Diljan",
        thumb: "https://img.youtube.com/vi/MldmN-0b9j4/hqdefault.jpg"
    },
    {
        id: "KRaWnd3LJfs",
        title: "Payphone",
        artist: "Maroon 5,Wiz Khalifa",
        thumb: "https://img.youtube.com/vi/KRaWnd3LJfs/hqdefault.jpg"
    },
    {
        id: "uxTXp0-iZrY",
        title: "Pashmina",
        artist: "Amit Trivedi",
        thumb: "https://img.youtube.com/vi/uxTXp0-iZrY/hqdefault.jpg"
    },
    {
        id: "BcSejVIxB0E",
        title: "Ishq Hai",
        artist: "Anurag Saikia,Raj Shekhar,Romy,Amarabha Banerjee,Varun Jain,Madhubanti Bagchi,Mismatched - Cast",
        thumb: "https://img.youtube.com/vi/BcSejVIxB0E/hqdefault.jpg"
    },
    {
        id: "1Z_cClBsABE",
        title: "Daryaa",
        artist: "Amit Trivedi,Ammy Virk,Shahid Mallya,Shellee",
        thumb: "https://img.youtube.com/vi/1Z_cClBsABE/hqdefault.jpg"
    },
    {
        id: "NobzfIebbrE",
        title: "Manchala",
        artist: "Vishal-Shekhar,Shafqat Amanat Ali,Nupur Pant",
        thumb: "https://img.youtube.com/vi/NobzfIebbrE/hqdefault.jpg"
    },
    {
        id: "VPRjCeoBqrI",
        title: "A Sky Full of Stars",
        artist: "Coldplay",
        thumb: "https://img.youtube.com/vi/VPRjCeoBqrI/hqdefault.jpg"
    },
    {
        id: "9QpmsrYO4cc",
        title: "Tainu Khabar Nahi - From  Munjya ",
        artist: "Sachin-Jigar,Arijit Singh",
        thumb: "https://img.youtube.com/vi/9QpmsrYO4cc/hqdefault.jpg"
    },
    {
        id: "jhov7bhNJrg",
        title: "Sweetheart",
        artist: "Amit Trivedi,Dev Negi",
        thumb: "https://img.youtube.com/vi/jhov7bhNJrg/hqdefault.jpg"
    },
    {
        id: "jDErhADhhmg",
        title: "Phir Milenge Chalte Chalte",
        artist: "Salim–Sulaiman,Sonu Nigam,Jaideep Sahni",
        thumb: "https://img.youtube.com/vi/jDErhADhhmg/hqdefault.jpg"
    },
    {
        id: "jh66Pjtqr4k",
        title: "Aabaad Barbaad",
        artist: "Pritam,Arijit Singh,Sandeep Shrivastava",
        thumb: "https://img.youtube.com/vi/jh66Pjtqr4k/hqdefault.jpg"
    }
        // Add more songs here...
    ],
    "Creat": [
        {
        id: "eaP1VswBF28",
        title: "It’s Nice To Have A Friend",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/eaP1VswBF28/hqdefault.jpg"
    },
    {
        id: "XzKSPRqFg9E",
        title: "Bejeweled",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/XzKSPRqFg9E/hqdefault.jpg"
    },
    {
        id: "P0gBo4WH2xw",
        title: "Workin' On It (feat. Lennon Stella & Sasha Alex Sloan)",
        artist: "Meghan Trainor,Lennon Stella,Sasha Alex Sloan",
        thumb: "https://img.youtube.com/vi/P0gBo4WH2xw/hqdefault.jpg"
    },
    {
        id: "8VVfWipfV0A",
        title: "We Got The Party",
        artist: "Hannah Montana",
        thumb: "https://img.youtube.com/vi/8VVfWipfV0A/hqdefault.jpg"
    },
    {
        id: "rT8vvFNuMG8",
        title: "The Good Life",
        artist: "Hannah Montana",
        thumb: "https://img.youtube.com/vi/rT8vvFNuMG8/hqdefault.jpg"
    },
    {
        id: "CwXZ0BBZhOI",
        title: "We Got the Party Duet with Jonas Brothers - Live from Arrowhead Pond, Anaheim, U.S.A./2008",
        artist: "Hannah Montana,Jonas Brothers",
        thumb: "https://img.youtube.com/vi/CwXZ0BBZhOI/hqdefault.jpg"
    },
    {
        id: "yiir_lWB9aE",
        title: "Let's Get Crazy",
        artist: "Hannah Montana",
        thumb: "https://img.youtube.com/vi/yiir_lWB9aE/hqdefault.jpg"
    },
    {
        id: "JLKPUfWUjj4",
        title: "I'm Still Good",
        artist: "Hannah Montana",
        thumb: "https://img.youtube.com/vi/JLKPUfWUjj4/hqdefault.jpg"
    },
    {
        id: "H6A4TN_YSPA",
        title: "Too Cool",
        artist: "Meaghan Martin",
        thumb: "https://img.youtube.com/vi/H6A4TN_YSPA/hqdefault.jpg"
    },
    {
        id: "l8Tps3PITx4",
        title: "Bigger Than The Whole Sky",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/l8Tps3PITx4/hqdefault.jpg"
    },
    {
        id: "q7aA60tSkLE",
        title: "Pink Blue",
        artist: "Tsumyoki,Bharg",
        thumb: "https://img.youtube.com/vi/q7aA60tSkLE/hqdefault.jpg"
    },
    {
        id: "T6qDm5N9a8s",
        title: "Hard to Love",
        artist: "BLACKPINK",
        thumb: "https://img.youtube.com/vi/T6qDm5N9a8s/hqdefault.jpg"
    },
    {
        id: "OiC1rgCPmUQ",
        title: "Dance The Night - From Barbie The Album",
        artist: "Dua Lipa",
        thumb: "https://img.youtube.com/vi/OiC1rgCPmUQ/hqdefault.jpg"
    },
    {
        id: "tXa6q4x1v-Q",
        title: "Ye Fizaein",
        artist: "KK,Alka Yagnik",
        thumb: "https://img.youtube.com/vi/tXa6q4x1v-Q/hqdefault.jpg"
    },
    {
        id: "3Mai7dsZXEQ",
        title: "Mausam Hai Bada Qatil",
        artist: "Sonu Nigam",
        thumb: "https://img.youtube.com/vi/3Mai7dsZXEQ/hqdefault.jpg"
    },
    {
        id: "3-BcH7KowGE",
        title: "New Romantics (Taylor's Version)",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/3-BcH7KowGE/hqdefault.jpg"
    },
    {
        id: "3PeZuaDFTz8",
        title: "Shining Star",
        artist: "B5",
        thumb: "https://img.youtube.com/vi/3PeZuaDFTz8/hqdefault.jpg"
    },
    {
        id: "yiir_lWB9aE",
        title: "Let's Get Crazy",
        artist: "Hannah Montana",
        thumb: "https://img.youtube.com/vi/yiir_lWB9aE/hqdefault.jpg"
    },
    {
        id: "8zdg-pDF10g",
        title: "Paper Rings",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/8zdg-pDF10g/hqdefault.jpg"
    },
    {
        id: "dmZ71ee-hJQ",
        title: "Renegade - Pop Version",
        artist: "Big Red Machine,Taylor Swift",
        thumb: "https://img.youtube.com/vi/dmZ71ee-hJQ/hqdefault.jpg"
    },
    {
        id: "Po-ps8sLtDw",
        title: "Dream",
        artist: "Miley Cyrus",
        thumb: "https://img.youtube.com/vi/Po-ps8sLtDw/hqdefault.jpg"
    },
    {
        id: "2_DgMjkZtls",
        title: "You and Me Together",
        artist: "Hannah Montana",
        thumb: "https://img.youtube.com/vi/2_DgMjkZtls/hqdefault.jpg"
    },
    {
        id: "7HuktrzSImU",
        title: "Dhat Teri Ki",
        artist: "Vishal-Shekhar,Sanam Puri,Aditi Singh Sharma",
        thumb: "https://img.youtube.com/vi/7HuktrzSImU/hqdefault.jpg"
    },
    {
        id: "t4H_Zoh7G5A",
        title: "On The Floor",
        artist: "Jennifer Lopez,Pitbull",
        thumb: "https://img.youtube.com/vi/t4H_Zoh7G5A/hqdefault.jpg"
    },
    {
        id: "IR-6KE8C4VQ",
        title: "Angel Baby",
        artist: "Troye Sivan",
        thumb: "https://img.youtube.com/vi/IR-6KE8C4VQ/hqdefault.jpg"
    },
    {
        id: "xrSZLa14haA",
        title: "Teri Jhuki Nazar",
        artist: "Pritam,Shafqat Amanat Ali,Sayeed Quadri",
        thumb: "https://img.youtube.com/vi/xrSZLa14haA/hqdefault.jpg"
    },
    {
        id: "lPvcwgEuKTg",
        title: "Starlight (Taylor's Version)",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/lPvcwgEuKTg/hqdefault.jpg"
    },
    {
        id: "R8WPjOxC4is",
        title: "Bigger Than Us",
        artist: "Hannah Montana",
        thumb: "https://img.youtube.com/vi/R8WPjOxC4is/hqdefault.jpg"
    },
    {
        id: "5mlAMz7DM2g",
        title: "Jab Mila Tu",
        artist: "Vishal-Shekhar,Vishal Dadlani",
        thumb: "https://img.youtube.com/vi/5mlAMz7DM2g/hqdefault.jpg"
    },
    {
        id: "RQMz4JDbtmI",
        title: "The Tortured Poets Department",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/RQMz4JDbtmI/hqdefault.jpg"
    },
    {
        id: "IsbzLR5W6LY",
        title: "Rustom Vahi",
        artist: "Sukriti Kakar,Manoj Muntashir",
        thumb: "https://img.youtube.com/vi/IsbzLR5W6LY/hqdefault.jpg"
    },
    {
        id: "TagfVi-WHU0",
        title: "Wrap Me In Plastic",
        artist: "MOMOLAND,CHROMANCE",
        thumb: "https://img.youtube.com/vi/TagfVi-WHU0/hqdefault.jpg"
    },
    {
        id: "cmSbXsFE3l8",
        title: "Cups (Pitch Perfect’s “When I’m Gone”) - Pop Version",
        artist: "Anna Kendrick",
        thumb: "https://img.youtube.com/vi/cmSbXsFE3l8/hqdefault.jpg"
    },
    {
        id: "7lbWN-OjY2o",
        title: "Let's Dance",
        artist: "Miley Cyrus",
        thumb: "https://img.youtube.com/vi/7lbWN-OjY2o/hqdefault.jpg"
    }
        // Add more songs here...
    ],
    "Dec": [
        {
        id: "TagfVi-WHU0",
        title: "Wrap Me In Plastic",
        artist: "MOMOLAND,CHROMANCE",
        thumb: "https://img.youtube.com/vi/TagfVi-WHU0/hqdefault.jpg"
    },
    {
        id: "iMKcWsUjdzg",
        title: "90s Kids",
        artist: "Jax",
        thumb: "https://img.youtube.com/vi/iMKcWsUjdzg/hqdefault.jpg"
    },
    {
        id: "7aekxC_monc",
        title: "I Like You (A Happier Song) (with Doja Cat)",
        artist: "Post Malone,Doja Cat",
        thumb: "https://img.youtube.com/vi/7aekxC_monc/hqdefault.jpg"
    },
    {
        id: "wXhTHyIgQ_U",
        title: "Circles",
        artist: "Post Malone",
        thumb: "https://img.youtube.com/vi/wXhTHyIgQ_U/hqdefault.jpg"
    },
    {
        id: "JYodEWUdIso",
        title: "Bewafa",
        artist: "Imran Khan",
        thumb: "https://img.youtube.com/vi/JYodEWUdIso/hqdefault.jpg"
    },
    {
        id: "r1Fx0tqK5Z4",
        title: "Older",
        artist: "Sasha Alex Sloan",
        thumb: "https://img.youtube.com/vi/r1Fx0tqK5Z4/hqdefault.jpg"
    }
        // Add more songs here...
    ],
    "D": [
        {
        id: "UecdkexIZCA",
        title: "Kajra and Uden Jab Jab Mashup",
        artist: "Shashaa Tirupati",
        thumb: "https://img.youtube.com/vi/UecdkexIZCA/hqdefault.jpg"
    },
    {
        id: "uP7uhlDrlD4",
        title: "Kudiye Ni",
        artist: "Aparshakti Khurana,Neeti Mohan",
        thumb: "https://img.youtube.com/vi/uP7uhlDrlD4/hqdefault.jpg"
    },
    {
        id: "7oqyfTpHmZE",
        title: "Gal Mitthi Mitthi",
        artist: "Amit Trivedi,Tochi Raina",
        thumb: "https://img.youtube.com/vi/7oqyfTpHmZE/hqdefault.jpg"
    },
    {
        id: "xitd9mEZIHk",
        title: "Mast Magan",
        artist: "Arijit Singh,Chinmayi,Shankar-Ehsaan-Loy,Amitabh Bhattacharya",
        thumb: "https://img.youtube.com/vi/xitd9mEZIHk/hqdefault.jpg"
    },
    {
        id: "RtBAwPW0sBs",
        title: "Shayarana",
        artist: "Sajid-Wajid,Shalmali Kholgade,Kausar Munir",
        thumb: "https://img.youtube.com/vi/RtBAwPW0sBs/hqdefault.jpg"
    },
    {
        id: "3pa8CkfQBlg",
        title: "Rog Mera Yaar",
        artist: "Gurnam Bhullar,Daddy Beats",
        thumb: "https://img.youtube.com/vi/3pa8CkfQBlg/hqdefault.jpg"
    },
    {
        id: "k3MLxlm00cE",
        title: "Come See About Me (Glee Cast Version)",
        artist: "Glee Cast",
        thumb: "https://img.youtube.com/vi/k3MLxlm00cE/hqdefault.jpg"
    },
    {
        id: "XU3eFkY1BTI",
        title: "Mohe Rang Do Laal",
        artist: "Pandit Birju Maharaj,Shreya Ghoshal,Siddharth - Garima",
        thumb: "https://img.youtube.com/vi/XU3eFkY1BTI/hqdefault.jpg"
    },
    {
        id: "YjllO7-K9k4",
        title: "Aise Kyun - Ghazal Version",
        artist: "Rekha Bhardwaj,Anurag Saikia,Raj Shekhar,Mismatched - Cast",
        thumb: "https://img.youtube.com/vi/YjllO7-K9k4/hqdefault.jpg"
    },
    {
        id: "1BWdglekty0",
        title: "Maahi Ve",
        artist: "Shankar-Ehsaan-Loy,Sadhana Sargam,Sujata Bhattacharya,Udit Narayan,Sonu Nigam",
        thumb: "https://img.youtube.com/vi/1BWdglekty0/hqdefault.jpg"
    },
    {
        id: "H51Lf_Jv2AQ",
        title: "Dhol Yaara Dhol",
        artist: "Shilpa Rao,Kshitij Tarey,Shellee",
        thumb: "https://img.youtube.com/vi/H51Lf_Jv2AQ/hqdefault.jpg"
    },
    {
        id: "KaTrCOBBJ1I",
        title: "Better Than Revenge",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/KaTrCOBBJ1I/hqdefault.jpg"
    },
    {
        id: "UlK5pZ4K3yA",
        title: "Hoedown Throwdown",
        artist: "Miley Cyrus",
        thumb: "https://img.youtube.com/vi/UlK5pZ4K3yA/hqdefault.jpg"
    },
    {
        id: "9coyY-SPIXU",
        title: "Mother",
        artist: "Meghan Trainor",
        thumb: "https://img.youtube.com/vi/9coyY-SPIXU/hqdefault.jpg"
    },
    {
        id: "bTw7tT82W2k",
        title: "Chedkhaniyan",
        artist: "Pritam,Arijit Singh,Nikhita Gandhi,IP Singh,Shloke Lal",
        thumb: "https://img.youtube.com/vi/bTw7tT82W2k/hqdefault.jpg"
    },
    {
        id: "YrMpWeGach4",
        title: "Shehzada Title Track",
        artist: "Pritam,Sonu Nigam,Mayur Puri",
        thumb: "https://img.youtube.com/vi/YrMpWeGach4/hqdefault.jpg"
    },
    {
        id: "dCmp56tSSmA",
        title: "Born to Shine",
        artist: "Diljit Dosanjh",
        thumb: "https://img.youtube.com/vi/dCmp56tSSmA/hqdefault.jpg"
    },
    {
        id: "ZVgergj8Xe4",
        title: "Lemonade",
        artist: "Diljit Dosanjh",
        thumb: "https://img.youtube.com/vi/ZVgergj8Xe4/hqdefault.jpg"
    },
    {
        id: "-mgGnx1p3b8",
        title: "Lalkara",
        artist: "Diljit Dosanjh,Intense,Sultaan",
        thumb: "https://img.youtube.com/vi/-mgGnx1p3b8/hqdefault.jpg"
    },
    {
        id: "cqP8I5aaud8",
        title: "Insane",
        artist: "AP Dhillon,Shinda Kahlon,Gurinder Gill,Gminxr",
        thumb: "https://img.youtube.com/vi/cqP8I5aaud8/hqdefault.jpg"
    },
    {
        id: "3ONzh3tf884",
        title: "DESIRES",
        artist: "AP Dhillon,Gurinder Gill",
        thumb: "https://img.youtube.com/vi/3ONzh3tf884/hqdefault.jpg"
    },
    {
        id: "xo-ZXYqQTBk",
        title: "I Wanna See You Dance - From  Kho Gaye Hum Kahan ",
        artist: "Sachin-Jigar,Saba Azad,Ankur Tewari",
        thumb: "https://img.youtube.com/vi/xo-ZXYqQTBk/hqdefault.jpg"
    },
    {
        id: "7N_igSlEVf0",
        title: "Welcome",
        artist: "Shaan,Wajid Khan,Sowmya Raoh",
        thumb: "https://img.youtube.com/vi/7N_igSlEVf0/hqdefault.jpg"
    },
    {
        id: "YjllO7-K9k4",
        title: "Aise Kyun - Ghazal Version",
        artist: "Rekha Bhardwaj,Anurag Saikia,Raj Shekhar,Mismatched",
        thumb: "https://img.youtube.com/vi/YjllO7-K9k4/hqdefault.jpg"
    },
    {
        id: "6z1U-kJ3xJE",
        title: "Chunnari Chunnari",
        artist: "Anu Malik,Anuradha Sriram,Abhijeet,Sameer Anjaan",
        thumb: "https://img.youtube.com/vi/6z1U-kJ3xJE/hqdefault.jpg"
    },
    {
        id: "7HuktrzSImU",
        title: "Dhat Teri Ki",
        artist: "Vishal-Shekhar,Sanam Puri,Aditi Singh Sharma",
        thumb: "https://img.youtube.com/vi/7HuktrzSImU/hqdefault.jpg"
    },
    {
        id: "Cus-6cnyt1s",
        title: "Bhool Bhulaiyaa 3 - Title Track (feat. Pitbull)",
        artist: "Pitbull,Diljit Dosanjh,Tanishk Bagchi,Pritam,Neeraj Shridhar,Dhrruv Yogi,Sameer Anjaan",
        thumb: "https://img.youtube.com/vi/Cus-6cnyt1s/hqdefault.jpg"
    },
    {
        id: "05TA9jNnCdU",
        title: "Galti Se Mistake (From  Jagga Jasoos )",
        artist: "Pritam,Arijit Singh,Amit Mishra",
        thumb: "https://img.youtube.com/vi/05TA9jNnCdU/hqdefault.jpg"
    },
    {
        id: "W9mrvDWUR9g",
        title: "One Two Three Four (Get On The Dance Floor)",
        artist: "Vishal-Shekhar,Vishal Dadlani,Hamsika Iyer,Amitabh Bhattacharya",
        thumb: "https://img.youtube.com/vi/W9mrvDWUR9g/hqdefault.jpg"
    },
    {
        id: "ZnpsSJ2Tg5Q",
        title: "Koi Aap Jaisa",
        artist: "Madhushree,Jayesh Gandhi,Kunal Ganjawala",
        thumb: "https://img.youtube.com/vi/ZnpsSJ2Tg5Q/hqdefault.jpg"
    },
    {
        id: "3Mai7dsZXEQ",
        title: "Mausam Hai Bada Qatil",
        artist: "Sonu Nigam",
        thumb: "https://img.youtube.com/vi/3Mai7dsZXEQ/hqdefault.jpg"
    },
    {
        id: "JYodEWUdIso",
        title: "Bewafa",
        artist: "Imran Khan",
        thumb: "https://img.youtube.com/vi/JYodEWUdIso/hqdefault.jpg"
    },
    {
        id: "Jb2stN7kH28",
        title: "Our Song",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/Jb2stN7kH28/hqdefault.jpg"
    },
    {
        id: "5Pux92WFYL0",
        title: "Discowale Khisko",
        artist: "Pritam,KK,Sunidhi Chauhan,Rana Mazumder,Jaideep Sahni",
        thumb: "https://img.youtube.com/vi/5Pux92WFYL0/hqdefault.jpg"
    },
    {
        id: "3u6lLWGjFLY",
        title: "Naina (From  Crew )",
        artist: "Diljit Dosanjh,Badshah,Raj Ranjodh",
        thumb: "https://img.youtube.com/vi/3u6lLWGjFLY/hqdefault.jpg"
    },
    {
        id: "5g_u4eEc0tQ",
        title: "Jaise Mera Tu",
        artist: "Sachin-Jigar,Arijit Singh,Priya Saraiya",
        thumb: "https://img.youtube.com/vi/5g_u4eEc0tQ/hqdefault.jpg"
    },
    {
        id: "IIg8H60bRJo",
        title: "Woh Ladki Hai Kahan",
        artist: "Shaan,Kavita Krishnamurthy",
        thumb: "https://img.youtube.com/vi/IIg8H60bRJo/hqdefault.jpg"
    },
    {
        id: "WMweEpGlu_U",
        title: "Butter",
        artist: "BTS",
        thumb: "https://img.youtube.com/vi/WMweEpGlu_U/hqdefault.jpg"
    },
    {
        id: "UuLNftlHk8k",
        title: "Dil Dil Nazar",
        artist: "Shaan,Neeraj,Shaznine",
        thumb: "https://img.youtube.com/vi/UuLNftlHk8k/hqdefault.jpg"
    },
    {
        id: "PFVwNbhVqkw",
        title: "Nazrein Milaana Nazrein Churaana",
        artist: "Benny Dayal,Satish Chakravarthy,Sayonara,Darshana,Svetha,Bhargavi Pillai,Chandralekha Annupamaa",
        thumb: "https://img.youtube.com/vi/PFVwNbhVqkw/hqdefault.jpg"
    },
    {
        id: "w3MMMgxjLFk",
        title: "Dum Dum",
        artist: "Salim–Sulaiman,Benny Dayal,Himani Kapoor,Amitabh Bhattacharya",
        thumb: "https://img.youtube.com/vi/w3MMMgxjLFk/hqdefault.jpg"
    },
    {
        id: "pw59ySNWAjs",
        title: "Ek Main Aur Ekk Tu",
        artist: "Benny Dayal,Anushka Manchanda,Amit Trivedi",
        thumb: "https://img.youtube.com/vi/pw59ySNWAjs/hqdefault.jpg"
    },
    {
        id: "94RiVlrBqQo",
        title: "Uff",
        artist: "Harshdeep Kaur,Benny Dayal,Vishal-Shekhar",
        thumb: "https://img.youtube.com/vi/94RiVlrBqQo/hqdefault.jpg"
    },
    {
        id: "2JgvVfOfoWI",
        title: "Style (Taylor's Version)",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/2JgvVfOfoWI/hqdefault.jpg"
    },
    {
        id: "ia1iuXbEaYQ",
        title: "Rare",
        artist: "Selena Gomez",
        thumb: "https://img.youtube.com/vi/ia1iuXbEaYQ/hqdefault.jpg"
    },
    {
        id: "t36ZzmpZSzs",
        title: "Aaj Ki Raat",
        artist: "Alisha Chinai,Mahalakshmi Iyer,Sonu Nigam",
        thumb: "https://img.youtube.com/vi/t36ZzmpZSzs/hqdefault.jpg"
    },
    {
        id: "hdzPbvBBB9g",
        title: "Just Chill",
        artist: "Sonu Nigam,Jayesh Gandhi,Amrita Kak",
        thumb: "https://img.youtube.com/vi/hdzPbvBBB9g/hqdefault.jpg"
    },
    {
        id: "Hovtm2c2sD4",
        title: "Pehli Baar",
        artist: "Sukriti Kakar,Siddharth Mahadevan",
        thumb: "https://img.youtube.com/vi/Hovtm2c2sD4/hqdefault.jpg"
    },
    {
        id: "UdsO4SM4wKI",
        title: "Mere Mehboob",
        artist: "Sachin-Jigar,Shilpa Rao,Sachet Tandon,Priya Saraiya",
        thumb: "https://img.youtube.com/vi/UdsO4SM4wKI/hqdefault.jpg"
    },
    {
        id: "oSpMspvMkSQ",
        title: "Kudi Nu Nachne De (From  Angrezi Medium )",
        artist: "Vishal Dadlani,Sachin-Jigar",
        thumb: "https://img.youtube.com/vi/oSpMspvMkSQ/hqdefault.jpg"
    },
    {
        id: "rg18Kf4en2o",
        title: "Karma",
        artist: "Taylor Swift",
        thumb: "https://img.youtube.com/vi/rg18Kf4en2o/hqdefault.jpg"
    },
    {
        id: "l-nDXyVCpTs",
        title: "Ishq Nachaawe - From  Kho Gaye Hum Kahan ",
        artist: "Karan Kanchan,Rashmeet Kaur,Yashraj,Dhrruv Yogi",
        thumb: "https://img.youtube.com/vi/l-nDXyVCpTs/hqdefault.jpg"
    }
        // Add more songs here...
    ]
        // Add more songs here...
    

};



