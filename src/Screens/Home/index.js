import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import globalStyle from '../../theme/globalStyle'
import moment from 'moment'
import { useTranslation } from "react-i18next";
/**
 * Components
 */
import AppButton from '../../components/AppButton'
import Searchbar from '../../components/Searchbar'
import Row from '../../components/Row'
import { constants } from '../../theme'
import LatestNewSlider from './LatestNewSlider'
import Categoties from './Categories'
import { getBrekingNews, getNews } from '../../api'
import { useTheme } from '@react-navigation/native'



const data = {
  "status": "ok",
  "totalResults": 1516878,
  "articles": [
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Lindsey Ellefson",
      "title": "A Beginner's Guide to Hiring a Housecleaner",
      "description": "Gone are the days when having a professional clean your home was a sign that you were rich—like really well-off. With new apps, affordable prices, and so many of us working multiple jobs, hiring a house-cleaner is not only doable, but often necessary. Still, …",
      "url": "https://lifehacker.com/a-beginners-guide-to-hiring-a-housecleaner-1849539839",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/39ddefa50fbe2dc4cf51f0fb9d76a5bf.jpg",
      "publishedAt": "2022-09-15T18:00:00Z",
      "content": "Gone are the days when having a professional clean your home was a sign that you were richlike really well-off. With new apps, affordable prices, and so many of us working multiple jobs, hiring a hou… [+4495 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Kris Holt",
      "title": "Netflix's 'BioShock' movie now has a director and a writer",
      "description": "Back in February, Netflix announced it was working with 2K and Take-Two Interactive for a live-action movie based on the BioShock series. The project has taken an important step forward, as it now has a writer and director on board. Michael Green (Logan, Blad…",
      "url": "https://www.engadget.com/netflix-bioshock-movie-director-writer-213559877.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/28e5ec60-24b9-11ed-a9e4-77401aca91c7",
      "publishedAt": "2022-08-25T21:35:59Z",
      "content": "Back in February, Netflix announced it was working with 2K and Take-Two Interactive for a live-action movie based on the BioShock series. The project has taken an important step forward, as it now ha… [+878 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Jake Peterson",
      "title": "Two Ways to Read a Snapchat Without Sending a Read Receipt",
      "description": "Snapchat, like most messaging apps, will instantly let you know when someone opens one of your snaps, and vice versa. This means the second you open a snap, you might feel the pressure to respond, even if you don’t know what to say. If you’re in a heated conv…",
      "url": "https://lifehacker.com/two-ways-to-read-a-snapchat-without-sending-a-read-rece-1849440845",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/61b67cab48782ec727a07a1ec00fa1f6.jpg",
      "publishedAt": "2022-08-22T16:30:00Z",
      "content": "Snapchat, like most messaging apps, will instantly let you know when someone opens one of your snaps, and vice versa. This means the second you open a snap, you might feel the pressure to respond, ev… [+3275 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Kris Holt",
      "title": "Xbox players can now start a game from a friend's clip or screenshot",
      "description": "Microsoft\r\n is rolling out\r\n an Xbox\r\n update that includes handy consoles and cloud gaming features. There's a new way to hop into a game. When a friend shares a screenshot or game clip that catches your eye, you'll be able to tap the play button on a comput…",
      "url": "https://www.engadget.com/xbox-update-cloud-gaming-link-noise-suppression-party-chat-series-x-s-165022564.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/b7e00910-35ad-11ec-8cdd-13ffde2fae32",
      "publishedAt": "2022-09-07T16:50:22Z",
      "content": "Microsoft\r\n is rolling out\r\n an Xbox\r\n update that includes handy consoles and cloud gaming features. There's a new way to hop into a game. When a friend shares a screenshot or game clip that catches… [+1175 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Meredith Dietz",
      "title": "You Need to Take a ‘Suburbs Day’",
      "description": "Every suburbanite is familiar with a “city day.” Why shouldn’t the reverse be true? Why shouldn’t stressed-out city dwellers use their local suburb as a way to escape for a few hours?Read more...",
      "url": "https://lifehacker.com/you-need-to-take-a-suburbs-day-1849424304",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/09276218a026dad7c858a8bc520d8812.jpg",
      "publishedAt": "2022-08-18T13:00:00Z",
      "content": "Every suburbanite is familiar with a city day. Why shouldnt the reverse be true? Why shouldnt stressed-out city dwellers use their local suburb as a way to escape for a few hours?\r\nApartment Therapy … [+1577 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Cherlynn Low",
      "title": "iPhone 14 has a Plus variant with a 6.9-inch screen and last-year’s A15 processor",
      "description": "Apple has officially unveiled the iPhone 14 at its \"Far Out\" event today and it seems mostly like an iterative upgrade over last year's model. We do have a new Plus model this year by way of the iPhone 14 Plus, which features a 6.7-inch display, in addition t…",
      "url": "https://www.engadget.com/apple-iphone-14-specs-price-availability-175937968.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/bf2e2ea0-2ed5-11ed-8dea-8bb9654e9494",
      "publishedAt": "2022-09-07T17:59:37Z",
      "content": "Apple has officially unveiled the iPhone 14 at its \"Far Out\" event today and it seems mostly like an iterative upgrade over last year's models. We do have a new Plus model this year by way of the iPh… [+2461 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Charlotte Kent",
      "title": "The Woman Who Became a Company Has Lessons for a Post-Roe World",
      "description": "Jennifer Lyn Morone became a corporation in hopes of protecting her data privacy. Her experience shows the downfalls of treating data like property.",
      "url": "https://www.wired.com/story/art-data-property-roe/",
      "urlToImage": "https://media.wired.com/photos/63192414977791160bfcd0ac/191:100/w_1280,c_limit/woman-became-company.jpg",
      "publishedAt": "2022-09-08T13:00:00Z",
      "content": "In 2014, Jennifer Lyn Morone decided to protect her data in the only way she could as an individual: She incorporated herself. Jennifer Lyn Morone Inc. operates as a self-contained data processing bu… [+5670 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Daniel Cooper",
      "title": "Razor made a two-seater cargo scooter",
      "description": "Razor is once again blurring the lines between an e-scooter and a small cargo bike with its latest offering, the EcoSmart Cargo. It looks like a more advanced, and complete version of the company’s EcoSmart Metro, but with a beefy rear rack that holds either …",
      "url": "https://www.engadget.com/razor-eco-smart-cargo-e-scooter-130055625.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/f80bb7e0-2847-11ed-b76f-9b9e03e30228",
      "publishedAt": "2022-09-08T13:00:55Z",
      "content": "Razor is once again blurring the lines between an e-scooter and a small cargo bike with its latest offering, the EcoSmart Cargo. It looks like a more advanced, and complete version of the companys Ec… [+958 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Sarah Gundle, PsyD",
      "title": "Virtual Sessions Made Me a Better Therapist",
      "description": "Forced to use technology during Covid-19, I discovered surprising new ways to help couples. What I learned can make you a better partner.",
      "url": "https://www.wired.com/story/virtual-sessions-made-me-a-better-therapist-you-better-patient/",
      "urlToImage": "https://media.wired.com/photos/6312693b175d7ee6698f01bd/191:100/w_1280,c_limit/Science-Virtual-Therapy-Made-Me-A-Better-Therapist-GettyImages-1401997484.jpg",
      "publishedAt": "2022-09-03T11:00:00Z",
      "content": "It is not difficult to extend the lessons Ive learned in my virtual sessions to every couple in their own homes. My advice is to begin by not talkingliterally learn to mute yourself. Pausing to activ… [+3900 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Matt Burgess",
      "title": "How Whistleblowers Navigate a Security Minefield",
      "description": "Exposing wrongdoing is risky on the best of days. Whistleblower Aid cofounder John Tye explains the extensive steps needed to keep people safe.",
      "url": "https://www.wired.com/story/whistleblower-safety-mudge-twitter-senate-hearing/",
      "urlToImage": "https://media.wired.com/photos/631fc39f00704d14b5ffb878/191:100/w_1280,c_limit/How-Whistleblowers-Navigate-a-Security-Minefield-Security-GettyImages-1242680586.jpg",
      "publishedAt": "2022-09-13T11:00:00Z",
      "content": "Initial contact is just the start. Beyond thisonce Whistleblower Aid has signed on clientsit recommends using Signal for most messaging. A lot of time is spent trying to keep our secure devices secur… [+2780 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Jeff Somers",
      "title": "How to Adjust Paint If It’s Just a Shade Off",
      "description": "It happens all too often: You do some light renovation or some unexpected repair work that requires you to replace just a section of drywall, or your wall gets stained or scuffed in some way that requires a few coats of paint. You don’t have any paint left fr…",
      "url": "https://lifehacker.com/how-to-adjust-paint-if-it-s-just-a-shade-off-1849534891",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7832e8d01f56323d5743b88ac371ebbd.jpg",
      "publishedAt": "2022-09-14T20:00:00Z",
      "content": "It happens all too often: You do some light renovation or some unexpected repair work that requires you to replace just a section of drywall, or your wall gets stained or scuffed in some way that req… [+4281 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Lindsey Ellefson",
      "title": "How to Get Glasses or Contacts Without a Recent Prescription",
      "description": "We strongly recommend checkups with your eye doctor and a regular updating of your prescription, but sometimes life gets in the way. You might break or lose your glasses just weeks after your old prescription expired, or you might just want spare glasses or c…",
      "url": "https://lifehacker.com/how-to-get-glasses-or-contacts-without-a-recent-prescri-1849540084",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3b03c85a0f4c54edd0a7e3ed898b3285.jpg",
      "publishedAt": "2022-09-15T18:30:00Z",
      "content": "We strongly recommend checkups with your eye doctor and a regular updating of your prescription, but sometimes life gets in the way. You might break or lose your glasses just weeks after your old pre… [+2786 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Lindsey Ellefson",
      "title": "How to Make a Last-Minute Presentation Deck",
      "description": "A digital slideshow presentation can be a beautiful, informative thing—if you know what you’re doing and how to use your software to the best of its abilities. You also need some time to get all your information together, decide how you want to present it, an…",
      "url": "https://lifehacker.com/how-to-make-a-last-minute-presentation-deck-1849530466",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/99bb809f33fc3d3ffacb8ddccf008370.jpg",
      "publishedAt": "2022-09-13T18:00:00Z",
      "content": "A digital slideshow presentation can be a beautiful, informative thingif you know what youre doing and how to use your software to the best of its abilities. You also need some time to get all your i… [+5251 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Cameron Faulkner",
      "title": "Logitech’s webcam software is a mess",
      "description": "In case you didn’t know, Logitech’s webcam software for M1 and M2 Mac computers is severely lacking. Logi Capture, which offers a full suite of features for its webcams, is not compatible, and its replacement apps are lackluster.",
      "url": "https://www.theverge.com/2022/9/9/23342840/logitech-webcam-logi-capture-tune-g-hub-software-m2-m1-mac",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/6_0hGP2PDm6W39K1L-V_b-WpueU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22820366/akrales_210831_4734_0060.jpg",
      "publishedAt": "2022-09-09T11:00:00Z",
      "content": "Logitech Capture never worked on M1 and M2 Macs, and its being phased out for all OSs later this year\r\nThe Logi StreamCam has features that cannot be activated with Logitechs current software on newe… [+5013 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Jennifer Pattison Tuohy",
      "title": "Apple announces a new Apple Watch SE",
      "description": "Apple revealed its newest budget-friendly cellular smartwatch today. The Apple Watch SE is the second generation of the Apple Watch SE, a model that’s popular with families thanks to Apple’s Family Setup.",
      "url": "https://www.theverge.com/2022/9/7/23328608/apple-watch-se-new-second-gen-price-specs-features-release-date",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/Ex3xCDQkaRWe0vSdsuAjTG8mj7s=/0x144:2000x1191/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24002561/lcimg_69fdc845_931b_4cfb_ba63_bbe04f91c30f.jpeg",
      "publishedAt": "2022-09-07T17:26:49Z",
      "content": "The new Apple Watch SE is cheaper and up to 20 percent faster\r\nThe new Apple Watch SE.\r\nApple has announced a new Apple Watch SE. An upgrade to the original SE, the new smartwatch is the second gener… [+1697 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Mia Sato",
      "title": "Instagram knows it has a Reels problem",
      "description": "According to an internal report obtained by The Wall Street Journal, Instagram’s push toward Reels is still falling short of TikTok’s dominance. The problem starts with a lack of content — nearly a third of Reels are reposted from other apps.",
      "url": "https://www.theverge.com/2022/9/12/23349004/instagrams-reels-tiktok-internal-documents",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/dH1YlLJAlFVBtnnsLYUlIuOY8YU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23932741/acastro_STK070__03.jpg",
      "publishedAt": "2022-09-12T18:33:17Z",
      "content": "An internal report details where Reels are falling short\r\nIllustration by Alex Castro / The Verge\r\nInstagrams attempt to take on TikTok has cost the platform millions of dollars, countless app update… [+2866 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Jon Fingas",
      "title": "SteelSeries' first desktop speakers include a 5.1-channel USB model",
      "description": "The gaming audio market has focused on headphones for years, leaving you to rely on familiar brands like Logitech and Klipsch if you prefer speakers. SteelSeries thinks it can shake things up, though. It's introducing its first desktop speaker line, Arena, an…",
      "url": "https://www.engadget.com/steelseries-arena-3-7-9-desktop-speakers-130049375.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/277bffa0-1725-11ed-acf2-e5c4f4e23217",
      "publishedAt": "2022-08-23T13:00:49Z",
      "content": "The gaming audio market has focused on headphones for years, leaving you to rely on familiar brands like Logitech and Klipsch if you prefer speakers. SteelSeries thinks it can shake things up, though… [+1477 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Mariella Moon",
      "title": "DJI unveils Avata, a cinewhoop-style FPV drone",
      "description": "DJI has launched a new cinematic drone called Avata, which was made to work with the new DJI Goggles 2 video headset. While it's in the same category as the brand's previous first-person view (FPV) cinematic model, it takes on a more usual \"cinewhoop\" form fa…",
      "url": "https://www.engadget.com/dji-avata-cinewhoop-drone-130014973.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/69769050-2468-11ed-b7bb-30a8c4ab579e",
      "publishedAt": "2022-08-25T13:00:14Z",
      "content": "DJI has launched a new cinematic drone called Avata, which was made to work with the new DJI Goggles 2 video headset. While it's in the same category as the brand's previous first-person view (FPV) c… [+1686 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Sam Rutherford",
      "title": "Samsung Galaxy Z Fold 4 review: A flagship foldable refined",
      "description": "Throughout its first three generations, Samsung’s flagship foldable phone has made massive leaps and improvements. Simply putting together the original Fold with its flexible OLED screen was a triumph of engineering, even though it had some obvious flaws. The…",
      "url": "https://www.engadget.com/samsung-galaxy-z-fold-4-review-specs-price-a-flagship-foldable-refined-131543810.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/65ee5380-2271-11ed-bcff-84ad92ba8407",
      "publishedAt": "2022-08-23T13:15:43Z",
      "content": "Throughout its first three generations, Samsungs flagship foldable phone has made massive leaps and improvements. Simply putting together the original Fold with its flexible OLED screen was a triumph… [+11888 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Igor Bonifacic",
      "title": "Valve is testing a redesigned Steam mobile app",
      "description": "For over a decade, Valve has offered access to Steam through Android and iOS clients. In recent years, however, the Steam mobile app hasn’t gotten much attention from the company. Not only does it look dated, but it’s also a pain to use. I only keep it on my …",
      "url": "https://www.engadget.com/valve-tests-redesigned-steam-ios-android-app-173002815.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/0886dda0-26f6-11ed-bfd9-cd279c48622a",
      "publishedAt": "2022-08-28T17:30:02Z",
      "content": "For over a decade, Valve has offered access to Steam through Android and iOS clients. In recent years, however, the Steam mobile app hasnt gotten much attention from the company. Not only does it loo… [+1483 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Jon Fingas",
      "title": "Australia's top court rules Google isn't a publisher",
      "description": "Google has prevailed in its long-running battle over potentially defamatory web links. Australia's High Court has ruled Google wasn't the publisher of a link to a 2004 story in The Age that allegedly tarnished state lawyer George Defteros, who represented peo…",
      "url": "https://www.engadget.com/google-web-link-defamation-australia-high-court-ruling-133236991.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/0fdfe550-1e28-11ed-bf7e-2e99b3cb819a",
      "publishedAt": "2022-08-17T13:32:36Z",
      "content": "Google has prevailed in its long-running battle over potentially defamatory web links. Australia's High Court has ruled Google wasn't the publisher of a link to a 2004 story in The Age that allegedly… [+1531 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Sam Rutherford",
      "title": "Motorola Edge hands-on: A return to (mid-range) form?",
      "description": "I’ve been rather critical of Motorola’s recent phones. But it seems like the company may have taken that criticism to heart because with the new Edge 2022 (not to be confused with the Edge+ from earlier this year) it feels like we’re finally getting a phone w…",
      "url": "https://www.engadget.com/motorola-edge-hands-on-specs-price-a-return-to-mid-range-form-130020324.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/dc102550-1e86-11ed-b677-485de4c5798d",
      "publishedAt": "2022-08-18T13:00:20Z",
      "content": "Ive been rather critical of Motorolas recent phones. But it seems like the company may have taken that criticism to heart because with the new Edge 2022 (not to be confused with the Edge+ from earlie… [+3399 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Karissa Bell",
      "title": "Instagram's next feature might be a copy of BeReal",
      "description": "Instagram is testing a new feature called Candid Challenges, which bears a striking resemblance to BeReal, a photo sharing app popular among Gen. Z. The currently unreleased feature was spotted by Alessandro Paluzzi, a developer known for reverse engineering …",
      "url": "https://www.engadget.com/instagram-bereal-candid-challenges-232117658.html",
      "urlToImage": "https://s.yimg.com/os/creatr-images/2019-07/5f6af1a0-a99b-11e9-bcad-c7fa8d54ceaf",
      "publishedAt": "2022-08-22T23:21:17Z",
      "content": "Instagram is testing a new feature called Candid Challenges, which bears a striking resemblance to BeReal, a photo sharing app popular among Gen. Z. The currently unreleased feature was spotted by Al… [+2144 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Igor Bonifacic",
      "title": "'The Expanse: A Telltale Series' arrives next summer",
      "description": "Fans of The Expanse will have to wait about another year to play Deck Nine's interpretation of the popular sci-fi series. The studio, best known for its work on Life is Strange: True Colors, and Telltale Games shared a new behind-the-scenes gameplay trailer d…",
      "url": "https://www.engadget.com/the-expanse-a-telltale-series-summer-2023-200205286.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/16161af0-231b-11ed-9aaf-1319445741b4",
      "publishedAt": "2022-08-23T20:02:05Z",
      "content": "Fans of The Expanse will have to wait about another year to play Deck Nine's interpretation of the popular sci-fi series. The studio, best known for its work on Life is Strange: True Colors, and Tell… [+817 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Caitlin Harrington",
      "title": "A US Freight Rail Crisis Threatens More Supply-Chain Chaos",
      "description": "Federal regulators and the White House have been scrambling to prevent poor service and a possible strike from jamming up a vital but often overlooked network.",
      "url": "https://www.wired.com/story/a-us-freight-rail-crisis-threatens-more-supply-chain-chaos/",
      "urlToImage": "https://media.wired.com/photos/630d3fff567860ab6c66c658/191:100/w_1280,c_limit/Americas-Crumbling-Railroads-Business-Alamy-2G37YC5.jpg",
      "publishedAt": "2022-08-30T11:00:00Z",
      "content": "Unions have also disputed how railroads have used new  congressionally-mandated automated emergency braking systems to justify plans to remove conductors from trains, which would leave the engineer t… [+4082 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Haley Sprankle",
      "title": "The Sonos Ray Is a Perfect Starter Soundbar",
      "description": "This is a small but fierce soundbar option for smaller spaces, or those looking to slowly build their sound system up with quality pieces.",
      "url": "https://www.wired.com/review/sonos-ray/",
      "urlToImage": "https://media.wired.com/photos/631bb22274ce5b82a68ef12d/191:100/w_1280,c_limit/Sonos-Ray-Gear.png",
      "publishedAt": "2022-09-10T12:00:00Z",
      "content": "I have a shitty TV in my bedroom. Its old, cheap, and likely the last of its kind. While the picture quality is bad, the sound quality is even worse. However, as my editor says, most TV experiences a… [+2649 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Scott Gilbertson",
      "title": "This Cold-Storage Crypto Wallet Is a Smart Investment",
      "description": "If you don't use a safe, offline storage device, you don't really own your cryptocurrency. The Ledger Nano X keeps it secure from prying eyes.",
      "url": "https://www.wired.com/review/ledger-nano-x-crypto-wallet/",
      "urlToImage": "https://media.wired.com/photos/630916d9ba2a66af641b11ee/191:100/w_1280,c_limit/Ledger-Nano-X-Gear.jpg",
      "publishedAt": "2022-08-29T12:00:00Z",
      "content": "If youre serious about owning digital currencies, you need a hardware wallet. Just as the wallet in your pocket stores physical currency, a crypto wallet stores your digital currency. It keeps it saf… [+3718 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Lauren Leffer",
      "title": "Tesla Is Demanding a Viral Ad of a Model 3 Mowing Down a Kid-Sized Dummy Be Taken Down",
      "description": "Tesla is desperate to get a viral video scrubbed from the internet and TV screens after an advertisement showed one of the company’s vehicles mowing over a child-sized dummy.Read more...",
      "url": "https://gizmodo.com/tesla-model-3-kid-crash-test-video-take-down-1849457202",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/9146778bca823195e55252fd29c877d5.jpg",
      "publishedAt": "2022-08-25T20:55:00Z",
      "content": "Tesla is desperate to get a viral video scrubbed from the internet and TV screens after an advertisement showed one of the companys vehicles mowing over a child-sized dummy.\r\n Elon Musks electric car… [+4045 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Jenny Zheng",
      "title": "Anyone Can Be a VTuber. Here's How to Get Started",
      "description": "Virtual YouTubers, or streamers who use digital avatars, are part of a growing creative community. And it's not too hard (or costly) as you might think.",
      "url": "https://www.wired.com/story/be-a-vtuber-how-to-get-started/",
      "urlToImage": "https://media.wired.com/photos/63113c9252512a466ff8f717/191:100/w_1280,c_limit/VTubers-Gear-SOURCE-VROID-7272958678402122157.jpg",
      "publishedAt": "2022-09-02T12:00:00Z",
      "content": "Kizuna AI plays games, cooks, and even answers her viewers' questions. She sings, too, moonlighting as a pop star with millions of views on her music video. Kizuna AI is like any other influencer on … [+3674 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Marah Eakin",
      "title": "George Miller Knows the Power of a Great Story",
      "description": "The ‘Mad Max’ director spoke with WIRED about the allegorical grace of his new movie, ‘Three Thousand Years of Longing.’",
      "url": "https://www.wired.com/story/george-miller-three-thousand-years-of-longing-q-a/",
      "urlToImage": "https://media.wired.com/photos/63080adf8eb3383ad69a23a5/191:100/w_1280,c_limit/Three-Thousand-Years-Of-Longing-Culture.jpg",
      "publishedAt": "2022-08-26T11:00:00Z",
      "content": "Its a great mystery, and if youre lucky enough to be a storyteller, you occasionallyat least for yourselfget to shine some light onto the process and the need for making things a story.\r\nIn the movie… [+3781 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Haley Sprankle",
      "title": "The Therabody TheraFace Pro Is a Versatile Tool",
      "description": "If you normally get facials or other treatments, a small 4-in-1 TheraFace Pro is a useful addition to your vanity.",
      "url": "https://www.wired.com/review/therabody-theraface-pro/",
      "urlToImage": "https://media.wired.com/photos/62fee4a2086c20d91ed51ad9/191:100/w_1280,c_limit/Therabody-TheraFace-Pro-Top-Gear.jpg",
      "publishedAt": "2022-08-21T12:00:00Z",
      "content": "The TheraFace Pro intimidated me. Made by Therabodythe company behind the popular Theragun devicesthe TheraFace Pro is the It Girl beauty tool of the moment, on par with the coveted Dyson Airwrap in … [+3950 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Matt Simon",
      "title": "Humanity Is Doing Its Best Impression of a Black Hole",
      "description": "Daniel Holz studies the universe’s ultimate catastrophes. And he knows a thing or two about existential threats on Earth, since he helps set the Doomsday Clock.",
      "url": "https://www.wired.com/story/humanity-is-doing-its-best-impression-of-a-black-hole/",
      "urlToImage": "https://media.wired.com/photos/63127c1544c07c3774c4cb57/191:100/w_1280,c_limit/Humanity-Doing-Best-Impression-Of-Black-Hole-Science-103772144.jpg",
      "publishedAt": "2022-09-06T12:00:00Z",
      "content": "In the universe, there is no greater catastrophe than a black hole, whose gravity is so intense that not even light can escape. Sure, a supernova is unbelievably violent, but the destruction wrought … [+2896 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Angela Watercutter",
      "title": "A Spotlight on the Art of Video Games",
      "description": "From books to the Museum of Modern Art, gaming is getting new kinds of recognition.",
      "url": "https://www.wired.com/story/video-games-moma-art/",
      "urlToImage": "https://media.wired.com/photos/631a411120bc56769c41302b/191:100/w_1280,c_limit/Never-Alone-MoMA-The-Monitor-Culture.png",
      "publishedAt": "2022-09-09T13:00:00Z",
      "content": "The Monitor is aweekly columndevoted to everything happening in the WIRED world of culture, from movies to memes, TV to Twitter.\r\nNext month, Mortal Kombat turns 30. Look back on that 1992 arcade gam… [+3123 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "George Bass",
      "title": "A Bouncer's Take on the Best Street Brawler Games",
      "description": "Street fighting is never as well-choreographed as games make it out to be. And you certainly don't eat food off the ground.",
      "url": "https://www.wired.com/story/a-bouncer-reviews-street-brawler-games/",
      "urlToImage": "https://media.wired.com/photos/63127291a4a22698f6d24ab8/191:100/w_1280,c_limit/Brawler-Games-Culture.jpg",
      "publishedAt": "2022-09-04T11:00:00Z",
      "content": "As a licensed bouncer and lifelong gamer, I can tell you that none of the fights you see onscreen in video games match the ones you may encounter in real life.\r\nFor example, street fighters rarely ki… [+2297 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Makena Kelly",
      "title": "Biden plans a speedy rollout for chips funding",
      "description": "President Joe Biden signed an executive order to get money from the CHIPS and Science Act flowing out to companies like Intel that want to build fabrication sites in the US.",
      "url": "https://www.theverge.com/2022/8/25/23321723/chips-and-science-act-semiconductor-chip-shortage-joe-biden-white-house",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/X4ua27VcsNYGoTiQSs_s-eAACCU=/0x49:3000x1620/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23970414/52259005895_45b8e2b098_o.jpg",
      "publishedAt": "2022-08-25T16:12:01Z",
      "content": "He signed an executive order Thursday to kick off the project\r\nImage: White House (Erin Scott) / Flickr\r\nPresident Joe Biden isnt wasting any time in rolling out the $280 billion law to boost domesti… [+2876 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Sean Hollister",
      "title": "Lego’s new motorized lighthouse has a working fresnel lens",
      "description": "Lego has announced a motorized lighthouse with its very own fresnel lens in front of a working lantern. The $300 set is coming September 1st.",
      "url": "https://www.theverge.com/2022/8/18/23311743/lego-motorized-lighthouse-fresnel-lens",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/9YBvBo0yy3h3iW8__OIs4NKpbk8=/0x146:1271x811/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23954610/chrome_jMVgc4AZYw.jpg",
      "publishedAt": "2022-08-18T19:21:50Z",
      "content": "The popular French lens design was originally created for lighthouses\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nImage: Lego\r\nIn 1822, August… [+1952 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Cameron Faulkner",
      "title": "How to send a confidential message on Gmail",
      "description": "Google’s confidential mode for Gmail allows people to send messages that can expire, and that prevents recipients from copying their contents, forwarding them to others, or downloading them. Here’s how to do it.",
      "url": "https://www.theverge.com/23311465/confidential-email-gmail-privacy-how-to",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/Qfu4k_JqGe8EnFsWm2L5xHZtits=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23954644/1__2_.png",
      "publishedAt": "2022-08-18T18:57:19Z",
      "content": "Set your messages to expire and prevent them from being shared\r\nIllustration by Samar Haddad / The Verge\r\nGoogle uses TLS (what is called standard encryption) to keep your emails relatively safe in t… [+2662 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Nathan Edwards",
      "title": "The iPhone 14 won’t have a SIM tray",
      "description": "The new iPhones only support eSIMs. On major carriers, that’s not an issue, but smaller resellers and international carriers are left out for now.",
      "url": "https://www.theverge.com/2022/9/7/23341368/apple-iphone-14-dual-esim-no-physical-sim",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/AEqY0PwV5fF9_pi6RAHiff7pILU=/0x0:2880x1508/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24002854/Apple_iPhone_14_iPhone_14_Plus_hero_220907_Full_Bleed_Image.jpg.large_2x.jpg",
      "publishedAt": "2022-09-07T19:07:49Z",
      "content": "Its eSIM-only from now on in the US if youre on a major carrier, thats probably fine\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nImage: Apple\r… [+3471 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Jon Porter",
      "title": "Nathan Fielder’s The Rehearsal is getting a second season",
      "description": "The Rehearsal, the meta cringe-comedy TV show from Nathan Fielder, has been renewed for a second season. The announcement came just ahead of the finale of the show’s first season on Friday night.",
      "url": "https://www.theverge.com/2022/8/22/23316109/the-rehearsal-nathan-fielder-hbo-second-season-announced",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/gVkTP7ra2NcQuwSywnxxCTjh4GI=/0x78:1080x643/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23962050/Faier61WIAA_NSd.jpg",
      "publishedAt": "2022-08-22T08:46:54Z",
      "content": "The Rehearsal, the docu-comedy TV show created by and starring Nathan Fielder, has been renewed for a second season, HBO has announced. The new came just ahead of the show’s sixth episode and season … [+1005 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Mitchell Clark",
      "title": "NASA delays Artemis I’s launch for a second time",
      "description": "NASA has delayed the launch of its Space Launch System again, following another scrubbed attempt in late August. This time, the delay was caused by a hydrogen leak that engineers failed to fix during several troubleshooting attempts.",
      "url": "https://www.theverge.com/2022/9/3/23327972/nasa-artemis-i-sls-second-delay",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/5QyRU-esGqW9xfOyQs3nIuSTgfo=/0x406:4000x2500/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23993522/1242907597.jpg",
      "publishedAt": "2022-09-03T15:19:30Z",
      "content": "A hydrogen leak caused another delay\r\nPhoto by Joel Kowsky/NASA via Getty Images\r\nNASA has once again scrubbed the launch of its Space Launch System (or SLS) rocket after engineers failed to fix a pe… [+1906 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "",
      "title": "'Gold, gold, gold': A look inside Mar-a-Lago estate",
      "description": "New details show the gold-plated interior of Former President Donald Trump's Mar-a-Lago estate. CNN's Brian Todd reports.",
      "url": "https://www.cnn.com/videos/politics/2022/09/02/inside-mar-a-lago-donald-trump-todd-dnt-tsr-vpx.cnn",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220902200134-inside-mar-a-lago-09-02-22.jpg?q=w_800,c_fill",
      "publishedAt": "2022-09-03T01:09:53Z",
      "content": "New details show the gold-plated interior of Former President Donald Trumps Mar-a-Lago estate. CNNs Brian Todd reports."
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Jake Peterson",
      "title": "Use This Site to Get a Deeper Look at Your Favorite Video Game Maps",
      "description": "Part of what makes video games so darn fun is the pure exploration. Us 90s gamers remember how huge Ocarina of Time’s Hyrule Field felt for the first time, or how realistic Grand Theft Auto III’s Liberty City seemed. While these games are still just as fun to…",
      "url": "https://lifehacker.com/use-this-site-to-get-a-deeper-look-at-your-favorite-vid-1849526185",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/79eb8a786f7755a67ac2a379f6083885.png",
      "publishedAt": "2022-09-12T20:00:00Z",
      "content": "Part of what makes video games so darn fun is the pure exploration. Us 90s gamers remember how huge Ocarina of Times Hyrule Field felt for the first time, or how realistic Grand Theft Auto IIIs Liber… [+2837 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Claire Lower",
      "title": "More of Your Savory Foods Could Do With a Honey Finish",
      "description": "When it comes to sweeteners, I like sugar (unless we are talking soda, in which case I like aspartame in Diet Coke and Diet Dr. Pepper only). Something about growing up in the “health” food-obsessed 90s put me off alternative sweeteners, especially honey, but…",
      "url": "https://lifehacker.com/more-of-your-savory-foods-could-do-with-a-honey-finish-1849532197",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2f2f6b0bf5ed041f8d90364a2dbe7816.jpg",
      "publishedAt": "2022-09-13T21:00:00Z",
      "content": "When it comes to sweeteners, I like sugar (unless we are talking soda, in which case I like aspartame in Diet Coke and Diet Dr. Pepper only). Something about growing up in the health food-obsessed 90… [+2240 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Khamosh Pathak",
      "title": "How to Make Your Apple Watch Last for Days on a Single Charge",
      "description": "When it comes to the Apple Watch, “all-day battery life” is Apple’s party line—but what that really means is an 18-hour battery cycle. If you want to push it over a day, you need to stick to light use (and not wear it to bed). But now, with watchOS 9, Apple i…",
      "url": "https://lifehacker.com/how-to-make-your-apple-watch-last-for-days-on-a-single-1849533531",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/64d491723aac38745a600d35dc0f77de.jpg",
      "publishedAt": "2022-09-14T16:30:00Z",
      "content": "When it comes to the Apple Watch, all-day battery life is Apples party linebut what that really means is an 18-hour battery cycle. If you want to push it over a day, you need to stick to light use (a… [+1962 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Lindsey Ellefson",
      "title": "What to Do Right Away If You Click a Phishing Link",
      "description": "It happens to the best of us: You might be totally up to date on all the latest phishing scams and still fall for one. While it’s definitely panic-inducing to realize you just clicked on some scammy link, there are some easy steps you can take next to minimiz…",
      "url": "https://lifehacker.com/what-to-do-right-away-if-you-click-a-phishing-link-1849505618",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e85ba23f612694b42b95bc9214377614.jpg",
      "publishedAt": "2022-09-07T16:30:00Z",
      "content": "It happens to the best of us: You might be totally up to date on all the latest phishing scams and still fall for one. While its definitely panic-inducing to realize you just clicked on some scammy l… [+3358 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Jake Peterson",
      "title": "Why the iPhone 14's eSIM Might Be a Problem for You",
      "description": "Apple has a habit of aggressively removing features in the name of progress. They killed the DVD drive from the Mac while discs were still popular, removed HDMI and MagSafe from MacBook Pros (before subsequently bringing them back), and, of course, are respon…",
      "url": "https://lifehacker.com/why-the-iphone-14s-esim-might-be-a-problem-for-you-1849512200",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f871a0c45a1708bf23e92b9dee259c56.jpg",
      "publishedAt": "2022-09-08T19:00:00Z",
      "content": "Apple has a habit of aggressively removing features in the name of progress. They killed the DVD drive from the Mac while discs were still popular, removed HDMI and MagSafe from MacBook Pros (before … [+3583 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Elizabeth Yuko",
      "title": "How to Apply for a Redress Number (and How to Know If You Need One)",
      "description": "When purchasing a plane ticket, you’re asked to fill out a form with some basic information, like your legal name, date of birth, and phone number. You may have also noticed another field in the booking forms, where you have the option of entering a Known Tra…",
      "url": "https://lifehacker.com/how-to-apply-for-a-redress-number-and-how-to-know-if-y-1849494124",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c8916a27f1a532a432854890b3065ac7.jpg",
      "publishedAt": "2022-09-05T15:30:00Z",
      "content": "When purchasing a plane ticket, youre asked to fill out a form with some basic information, like your legal name, date of birth, and phone number. You may have also noticed another field in the booki… [+4509 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "A.A. Newton",
      "title": "Four Alternatives to Gas-Powered Leaf Blowers (That Aren't a Rake)",
      "description": "Everyone hates leaf blowers, and it’s not hard to see why. For most people, the noise is reason enough; if your neighborhood has lawns, the chainsaw-level buzzing is inescapable for most of the year, and it always seems to start at the worst possible time. Bu…",
      "url": "https://lifehacker.com/four-alternatives-to-gas-powered-leaf-blowers-that-are-1849485628",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b3e34c75dcd166e25d9321b71d1bea3a.jpg",
      "publishedAt": "2022-09-01T18:30:00Z",
      "content": "Everyone hates leaf blowers, and its not hard to see why. For most people, the noise is reason enough; if your neighborhood has lawns, the chainsaw-level buzzing is inescapable for most of the year, … [+4039 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Passant Rabie",
      "title": "Terrifying Video Shows a Drop Tower Ride Malfunctioning at a Carnival in India",
      "description": "It’s a carnival goers’ worst nightmare come to life. A drop tower ride at a carnival in India plummeted to the ground, dropping 50-feet before crashing at the bottom. Several people suffered injuries from the drop, and were rushed to nearby hospitals.Read mor…",
      "url": "https://gizmodo.com/carnival-ride-drop-tower-india-crash-1849501807",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ff80cf8cadece69437f170e5661241f5.png",
      "publishedAt": "2022-09-06T20:40:00Z",
      "content": "Its a carnival goers worst nightmare come to life. A drop tower ride at a carnival in India plummeted to the ground, dropping 50-feet before crashing at the bottom. Several people suffered injuries f… [+1504 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Angely Mercado",
      "title": "A New Lake Has Formed in Pakistan Amid a 'Monsoon on Steroids'",
      "description": "A third of Pakistan is covered in floodwaters as the country suffers a devastating monsoon season. An inland lake seems to be forming around the southern Sindh province, satellite images show, while an existing lake has swelled dramatically.Read more...",
      "url": "https://gizmodo.com/pakistan-monsoon-flooding-new-lake-1849505779",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2669cb4d192dc7e1975d0fb0043ddb46.jpg",
      "publishedAt": "2022-09-07T16:40:00Z",
      "content": "Athird of Pakistan is covered in floodwaters as the country suffers a devastating monsoon season. An inland lake seems to be forming around the southern Sindh province, satellite images show, while a… [+2252 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Kyle Barr",
      "title": "Crypto.com Gave a Woman a $10.5 Million Refund and Now It Wants It Back",
      "description": "What would you do if a company accidentally sent you millions in dollars you never asked for? Well, Australia-based news outlet 7News reported Tuesday that Crypto.com, one of the most high-profile crypto platforms in the world, had made an extremely expensive…",
      "url": "https://gizmodo.com/crypto-com-bitcoin-matt-damon-australia-1849478202",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/492ff0ccb2b996700430d65856fc3c78.jpg",
      "publishedAt": "2022-08-31T14:40:00Z",
      "content": "What would you do if a company accidentally sent you millions in dollars you never asked for? Well, Australia-based news outlet 7News reported Tuesday that Crypto.com, one of the most high-profile cr… [+3124 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Steve Dent",
      "title": "Sony and Tencent now own almost a third of ‘Elden Ring’ studio FromSoftware",
      "description": "Sony has joined forces with Tencent to purchase a 30.34 percent share of FromSoftware, the developer behind titles like Elden Ring, Dark Souls 3 and Bloodborne. Tencent's Sixjoy Hong Kong division will own 16.25 percent of FromSoftware's shares, Sony will tak…",
      "url": "https://www.engadget.com/sony-and-tencent-invest-in-elden-ring-developer-from-software-104502232.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/4118e2d0-2917-11ed-abc9-37f3990a3ef3",
      "publishedAt": "2022-08-31T10:45:02Z",
      "content": "Sony has joined forces with Tencent to purchase a 30.34 percent share of FromSoftware, the developer behind titles like Elden Ring, Dark Souls 3 and Bloodborne. Tencent's Sixjoy Hong Kong division wi… [+1506 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Igor Bonifacic",
      "title": "The first 'Mandalorian' season three trailer reunites a favorite Star Wars family",
      "description": "With D23 underway this weekend, Disney had a lot to share with Star Wars fans. In all, the company debuted three trailers at the expo. First, there was a final look at Star Wars: Andor ahead of the show’s Disney+ premiere on September 21st\r\n. Then, we got to …",
      "url": "https://www.engadget.com/the-mandalorian-season-three-trailer-190644043.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/f1e82320-313a-11ed-bfdd-5a252f7335fd",
      "publishedAt": "2022-09-10T19:06:44Z",
      "content": "With D23 underway this weekend, Disney had a lot to share with Star Wars fans. In all, the company debuted three trailers at the expo. First, there was a final look at Star Wars: Andor ahead of the s… [+995 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Igor Bonifacic",
      "title": "‘NHL 23’ has a female player on the cover for the first time",
      "description": "For the first time in series history, EA’s next NHL entry will feature a female player on the cover. On Wednesday, the publisher announced\r\n Team Canada’s Sarah Nurse would be one of two athletes to grace the cover of NHL 23, marking another first for the fra…",
      "url": "https://www.engadget.com/nhl-23-sarah-nurse-cover-star-183041444.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/4a0a8700-23da-11ed-8fd7-820834f5be67",
      "publishedAt": "2022-08-24T18:30:41Z",
      "content": "For the first time in series history, EAs next NHL entry will feature a female player on the cover. On Wednesday, the publisher announced\r\n Team Canadas Sarah Nurse would be one of two athletes to gr… [+1046 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Kris Holt",
      "title": "Sony is reportedly working on a 'Gravity Rush' movie with Ridley Scott's production team",
      "description": "Sony seems determined to turn every gaming property it has ever laid a finger on into a movie or TV show. PlayStation Productions\r\n has a whole heap of projects in the works and the latest, according to Deadline\r\n, is a Gravity Rush\r\n film.The movie will be b…",
      "url": "https://www.engadget.com/gravity-rush-movie-sony-playstation-productions-173828928.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/626825b0-223f-11ed-bb8d-23e29b54a5b6",
      "publishedAt": "2022-08-22T17:38:28Z",
      "content": "Sony seems determined to turn every gaming property it has ever laid a finger on into a movie or TV show. PlayStation Productions\r\n has a whole heap of projects in the works and the latest, according… [+1439 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Nathan Ingraham",
      "title": "Google Search and Maps results will confirm if a medical center offers abortions",
      "description": "In the wake of Roe v. Wade being overturned, Google announced that it is making it easier to use its Maps and Search products to find medical providers that offer abortions. When someone searches for specific services and Google has confirmation that a locati…",
      "url": "https://www.engadget.com/google-search-maps-abortion-provider-confirmation-170034699.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/cc6ee170-2491-11ed-af9f-97577bd010dd",
      "publishedAt": "2022-08-25T17:00:34Z",
      "content": "In the wake of Roe v. Wade being overturned, Google announced that it is making it easier to use its Maps and Search products to find medical providers that offer abortions. When someone searches for… [+2366 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Daniel Cooper",
      "title": "The Morning After: Tim Cook tells a reporter to buy their mom an iPhone",
      "description": "I think beneath Tim Cook’s deeply reserved, professional aura lies someone who loves a bit of sass. Naturally, as the CEO of Apple, Cook needs to present a professional image at all times, but he did let his sense of humor out at the 2022 Code Conference. Dur…",
      "url": "https://www.engadget.com/the-morning-after-biden-outlines-where-the-chips-act-money-is-going-111512550.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/bac63060-3024-11ed-a6b7-80a6381a50f2",
      "publishedAt": "2022-09-09T11:15:12Z",
      "content": "I think beneath Tim Cooks deeply reserved, professional aura lies someone who loves a bit of sass. Naturally, as the CEO of Apple, Cook needs to present a professional image at all times, but he did … [+3539 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Valentina Palladino",
      "title": "Samsung's Galaxy Watch 4 drops to a new low of $130",
      "description": "Android users looking for a new smartwatch might want to go all in on Samsung's new Galaxy Watch 5, but the company's latest sale on the previous generation may give them pause. Samsung's currently selling the Galaxy Watch 4 for only $130, which is, by far, t…",
      "url": "https://www.engadget.com/samsungs-galaxy-watch-4-drops-to-a-new-low-of-130-121859853.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-08/4bc24470-0509-11ec-94e9-ed0b3ea276d8",
      "publishedAt": "2022-09-14T12:18:59Z",
      "content": "Android users looking for a new smartwatch might want to go all in on Samsung's new Galaxy Watch 5, but the company's latest sale on the previous generation may give them pause. Samsung's currently s… [+2129 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "James Trew",
      "title": "Apogee Boom brings its DSP-powered plugins to a budget-friendly audio interface",
      "description": "You might know Apogee for its pocketable headphone\r\n or guitar interfaces\r\n. Or maybe its microphones\r\n. But ask a bedroom producer and most will tell you they know the company for its audio interfaces and software tools. Today, the company unveils the Boom\r\n…",
      "url": "https://www.engadget.com/apogee-boom-audio-interface-does-dsp-on-the-cheap-170031686.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/194383c0-344b-11ed-9dc2-7d9a4c6ff34f",
      "publishedAt": "2022-09-15T17:00:31Z",
      "content": "You might know Apogee for its pocketable headphone\r\n or guitar interfaces\r\n. Or maybe its microphones\r\n. But ask a bedroom producer and most will tell you they know the company for its audio interfac… [+3242 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Jon Fingas",
      "title": "Snapchat+ subscribers now have a better chance of getting noticed by celebrities",
      "description": "Snapchat+ is barely over a month old, but that isn't stopping Snap from adding a few extra perks to its subscription service. The social network has released a \"summer drop\" for members that, most notably, includes priority replies to stars' Stories. If you'r…",
      "url": "https://www.engadget.com/snapchat-plus-summer-drop-priority-replies-151002513.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/8e732e30-1ca8-11ed-bef7-55d0325135d1",
      "publishedAt": "2022-08-15T15:10:02Z",
      "content": "Snapchat+ is barely over a month old, but that isn't stopping Snap from adding a few extra perks to its subscription service. The social network has released a \"summer drop\" for members that, most no… [+882 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Nathan Ingraham",
      "title": "'The Last of Us Part I' is a gorgeous, faithful, expensive remake",
      "description": "Ever since Sony and Naughty Dog announced The Last of Us Part I, a $70, ground-up PS5 remake of the classic 2013 PS3 game, there’s been an intense discussion around whether this even needs to exist. After all, Naughty Dog remastered the original game in 2014 …",
      "url": "https://www.engadget.com/the-last-of-us-part-1-ps5-review-150041410.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/dcb38c70-28a6-11ed-a77f-d92be29b5fc1",
      "publishedAt": "2022-08-31T15:00:41Z",
      "content": "One thing that is notably different is enemy AI. Human enemies are smarter and more aggressive, working together to flank you; they're also a lot harder to lose once they pick up your trail. Infected… [+7912 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Mariella Moon",
      "title": "Logitech Chorus is a $100 speaker add-on for the Meta Quest 2",
      "description": "Logitech has introduced a new audio solution specifically created for the Meta Quest 2: It's called \"Chorus,\" and the company says it can deliver a \"new level of immersive, ultra-realistic audio.\" Chorus features rotating speakers and an open back form factor…",
      "url": "https://www.engadget.com/logitech-chorus-meta-quest-2-090419867.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/38a1dae0-1e03-11ed-8fdd-c368223acc93",
      "publishedAt": "2022-08-17T09:04:19Z",
      "content": "Logitech has introduced a new audio solution specifically created for the Meta Quest 2: It's called \"Chorus,\" and the company says it can deliver a \"new level of immersive, ultra-realistic audio.\" Ch… [+1544 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Karissa Bell",
      "title": "Meta will create a customer service division to help people who have lost their accounts",
      "description": "Meta is finally addressing a problem that’s long vexed users: its lack of customer support. Bloombergreports\r\n that Meta is now planning to build a customer support division, which will be able to help users “who have had posts or accounts removed unexpectedl…",
      "url": "https://www.engadget.com/meta-building-actual-customer-service-171523755.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-01/5a6eb2b0-74cb-11ec-8bff-d5af904d6ebf",
      "publishedAt": "2022-08-25T17:15:23Z",
      "content": "Meta is finally addressing a problem thats long vexed users: its lack of customer support. Bloombergreports\r\n that Meta is now planning to build a customer support division, which will be able to hel… [+1403 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Igor Bonifacic",
      "title": "Your next Lyft in Las Vegas might be a driverless EV",
      "description": "Motional’s driverless Ioniq 5\r\n is entering service earlier than expected. On Tuesday, the company and Lyft announced that the vehicle is ready to begin offering rides to the public, starting with residents and visitors to Las Vegas. With today’s announcement…",
      "url": "https://www.engadget.com/lyft-motional-ioniq-5-ev-las-vegas-130051048.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/e7889520-1d5f-11ed-bffd-deebe5c670bb",
      "publishedAt": "2022-08-16T13:00:51Z",
      "content": "Motionals driverless Ioniq 5\r\n is entering service earlier than expected. On Tuesday, the company and Lyft announced that the vehicle is ready to begin offering rides to the public, starting with res… [+1403 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Igor Bonifacic",
      "title": "YouTube TV could soon get a 'Mosaic Mode' for watching multiple livestreams simultaneously",
      "description": "Google’s YouTube TV service could soon become more conducive to watching sports. According to Protocol, the company is developing a feature called Mosaic Mode that would allow subscribers to stream up to four live feeds simultaneously. Google reportedly discu…",
      "url": "https://www.engadget.com/youtube-tv-mosaic-mode-report-192123171.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/159bb7a0-2317-11ed-97d2-6e55d728b478",
      "publishedAt": "2022-08-23T19:21:23Z",
      "content": "Googles YouTube TV service could soon become more conducive to watching sports. According to Protocol, the company is developing a feature called Mosaic Mode that would allow subscribers to stream up… [+894 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Mariella Moon",
      "title": "Sonos is reportedly developing a speaker that can beam sound in almost all directions",
      "description": "Sonos is working on a new flagship speaker that could be quite a departure from its existing models, according to The Verge. The publication reports that it has seen early images of a new high-end speaker with the codename Optimo 2. If its current design stic…",
      "url": "https://www.engadget.com/sonos-speaker-beam-sound-in-almost-all-directions-051022520.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-05/4ca62d40-8fab-11ea-bbf6-9a8743f34bb5",
      "publishedAt": "2022-08-25T05:10:22Z",
      "content": "Sonos is working on a new flagship speaker that could be quite a departure from its existing models, according to The Verge. The publication reports that it has seen early images of a new high-end sp… [+1533 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Mat Smith",
      "title": "HMD's Nokia launches a smartphone subscription service with eco-friendly twists",
      "description": "HMD’s Nokia has continued to roll out serviceable but unremarkable smartphones for the last few years. Forgoing attempts to go toe-to-toe with the likes of Samsung and Apple, it’s settled into a groove of releasing solid mid-range and entry-level smartphones,…",
      "url": "https://www.engadget.com/nokia-eco-friendly-smartphone-subscription-service-100031376.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/1e6c15f0-2853-11ed-bd67-4d48efc0899e",
      "publishedAt": "2022-09-01T10:00:31Z",
      "content": "HMDs Nokia has continued to roll out serviceable but unremarkable smartphones for the last few years. Forgoing attempts to go toe-to-toe with the likes of Samsung and Apple, its settled into a groove… [+2509 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Kris Holt",
      "title": "iPhone 14 Pro's two hole-punch cutouts may look like a single 'wide pill'",
      "description": "Apple's\r\n big annual iPhone event is only a few days away\r\n and we'll soon find out exactly what the company has up its sleeve. In the meantime, the rumor mill is still churning away. The latest word on the street concerns the dual hole-punch cutouts that the…",
      "url": "https://www.engadget.com/iphone-14-pro-hole-punch-cutouts-privacy-indicators-display-camera-app-211710542.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/25c681c0-1cfe-11ec-b1ed-aff3c2fd2c38",
      "publishedAt": "2022-09-01T21:17:10Z",
      "content": "Apple's\r\n big annual iPhone event is only a few days away\r\n and we'll soon find out exactly what the company has up its sleeve. In the meantime, the rumor mill is still churning away. The latest word… [+1621 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Kris Holt",
      "title": "'Splitgate' will go into maintenance mode as 1047 Games moves on to a new shooter",
      "description": "Sci-fi arena shooter Splitgate\r\n exploded in popularity after it hit consoles last summer, two years after it debuted on PC. It racked up more than 10 million downloads\r\n in the space of a month thanks to its blend of Halo and Portal gameplay. The fact it's f…",
      "url": "https://www.engadget.com/splitgate-final-season-feature-development-ending-1047-games-new-game-211736138.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-08/42c24f50-05db-11ec-bbff-3267338bd3bf",
      "publishedAt": "2022-09-02T21:17:36Z",
      "content": "Sci-fi arena shooter Splitgate\r\n exploded in popularity after it hit consoles last summer, two years after it debuted on PC. It racked up more than 10 million downloads\r\n in the space of a month than… [+2776 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Steve Dent",
      "title": "Leak appears to show Meta's Quest Pro headset a month ahead of launch",
      "description": "Meta's Quest Pro headset is due to arrive next month, but a leaked video appears to show it in full. It was originally posted on Facebook by Ramiro Cardenas, who said that multiple devices (labeled \"engineering samples\") were left in a hotel room. In the vide…",
      "url": "https://www.engadget.com/leak-appears-to-show-metas-quest-pro-headset-a-month-ahead-of-launch-084747907.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/85b7f700-3272-11ed-bd7d-0b839f4d487e",
      "publishedAt": "2022-09-12T08:47:47Z",
      "content": "Meta's Quest Pro headset is due to arrive next month, but a leaked video appears to show it in full. It was originally posted on Facebook by Ramiro Cardenas, who said that multiple devices (labeled \"… [+1198 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Jon Fingas",
      "title": "Polestar will release a production version of its O2 concept convertible in 2026",
      "description": "It didn't take long for Polestar to translate the O2 Concept to a production model. The company has confirmed that it will sell the electric convertible as the Polestar 6 sometime in 2026. Most details are still under wraps, but the 6 will share the same 884H…",
      "url": "https://www.engadget.com/polestar-6-o2-concept-production-release-date-110005609.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/519f6d30-1a72-11ed-af7f-921134e1e825",
      "publishedAt": "2022-08-16T11:00:05Z",
      "content": "It didn't take long for Polestar to translate the O2 Concept to a production model. The company has confirmed that it will sell the electric convertible as the Polestar 6 sometime in 2026. Most detai… [+1315 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Jon Fingas",
      "title": "Meta's anti-misinformation strategy for the 2022 midterms is mostly a repeat of 2020",
      "description": "Meta has outlined its strategy for combatting misinformation during the 2022 US midterm elections, and they'll mostly sound familiar if you remember the company's 2020 approach. The Facebook and Instagram owner said it will maintain policies and protections \"…",
      "url": "https://www.engadget.com/meta-2022-us-midterm-elections-anti-misinformation-strategy-193235493.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/c36e5f40-1d90-11ed-9eac-bc0b297cfbe1",
      "publishedAt": "2022-08-16T19:32:35Z",
      "content": "Meta has outlined its strategy for combatting misinformation during the 2022 US midterm elections, and they'll mostly sound familiar if you remember the company's 2020 approach. The Facebook and Inst… [+1574 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Jon Fingas",
      "title": "Klipsch's tiny T10 wireless earbuds arrive as a $2,500 'bespoke' model",
      "description": "Klipsch has finally delivered the T10 true wireless earbuds it was supposed to ship in fall 2020... but they've changed a lot in the past two years. The company and Ear Micro have released the T10 Bespoke Ear Computers (yes, really) as a hand-built custom des…",
      "url": "https://www.engadget.com/klipsch-t10-bespoke-wireless-earbuds-161128488.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/12806250-1e3f-11ed-b4db-b3479172558d",
      "publishedAt": "2022-08-17T16:11:28Z",
      "content": "Klipsch has finally delivered the T10 true wireless earbuds it was supposed to ship in fall 2020... but they've changed a lot in the past two years. The company and Ear Micro have released the T10 Be… [+1787 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Terrence O'Brien",
      "title": "LANDR Studio has everything you need to make and release music (except a DAW)",
      "description": "If you're a music maker, chances are you've signed up for a music distribution service like DistoKid, maybe you have a subscription to a sample depot like Splice, and even pay monthly for an instrument like Output's Arcade. LANDR is now bring all of those dis…",
      "url": "https://www.engadget.com/landr-studio-subscription-everything-you-need-to-make-and-release-music-143835793.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/ac556fe0-22ec-11ed-afec-db41ee3a0d28",
      "publishedAt": "2022-08-23T14:38:35Z",
      "content": "If you're a music maker, chances are you've signed up for a music distribution service like DistoKid, maybe you have a subscription to a sample depot like Splice, and even pay monthly for an instrume… [+1756 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Steve Dent",
      "title": "Elon Musk has a backup plan to kill his Twitter takeover",
      "description": "Elon Musk has filed an updated notice to kill his $44 billion Twitter acquisition by citing whistleblower Peiter Zatko, Twitter's former head of security. In a filing to the US Securities and Exchange Commission (SEC), Musk alleged that Twitter \"has not compl…",
      "url": "https://www.engadget.com/elon-musk-has-a-backup-plan-to-kill-his-twitter-takeover-121609362.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/ecd1ff70-2855-11ed-b7ff-9474dbc0d8fd",
      "publishedAt": "2022-08-30T12:16:09Z",
      "content": "Elon Musk has filed an updated notice to kill his $44 billion Twitter acquisition by citing whistleblower Peiter Zatko, Twitter's former head of security. In a filing to the US Securities and Exchang… [+1736 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Jessica Conditt",
      "title": "'Under the Waves' leverages Quantic Dream's tech to tell a story of deep-sea grief",
      "description": "Under the Waves appears to be a heavy, emotional and poetic game about grief and isolation, which means it'll fit right in with the other titles under Quantic Dream's umbrella. Under the Waves is in development at independent French development house Parallel…",
      "url": "https://www.engadget.com/under-waves-quantic-dream-2023-xbox-playstation-pc-184634057.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/297dbb50-2313-11ed-9dbb-15dcc18c0196",
      "publishedAt": "2022-08-23T18:46:34Z",
      "content": "Under the Waves appears to be a heavy, emotional and poetic game about grief and isolation, which means it'll fit right in with the other titles under Quantic Dream's umbrella. Under the Waves is in … [+1232 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Billy Steele",
      "title": "Galaxy Buds 2 Pro review: Big sound in a tiny package",
      "description": "At this point, Samsung has a lot of experience making true wireless earbuds. While the company flexed its design muscle early with the Galaxy Buds line, it hasn’t always nailed the details. It rebounded quickly with its second installment, the Galaxy Buds+, a…",
      "url": "https://www.engadget.com/samsung-galaxy-buds-2-pro-review-160057740.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/d62c55e0-254e-11ed-befe-c70c7227aa66",
      "publishedAt": "2022-08-26T16:00:57Z",
      "content": "At this point, Samsung has a lot of experience making true wireless earbuds. While the company flexed its design muscle early with the Galaxy Buds line, it hasnt always nailed the details. It rebound… [+7890 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Kris Holt",
      "title": "James Webb Space Telescope detects carbon dioxide in a distant planet's atmosphere",
      "description": "The James Webb Space Telescope\r\n can do much more than produce astonishing\r\nimages\r\n of the universe. The observatory has, for the first time, found clear evidence\r\n of carbon dioxide in the atmosphere of a planet that's not in our solar system. It detected t…",
      "url": "https://www.engadget.com/james-webb-space-telescope-carbon-dioxide-exoplanet-nasa-170059950.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/bf567ab0-255f-11ed-be7d-c00db692d163",
      "publishedAt": "2022-08-26T17:00:59Z",
      "content": "The James Webb Space Telescope\r\n can do much more than produce astonishing\r\nimages\r\n of the universe. The observatory has, for the first time, found clear evidence\r\n of carbon dioxide in the atmosphe… [+1812 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Billy Steele",
      "title": "Jabra's Elite 5 noise-canceling earbuds have a lot to offer for $150",
      "description": "In 2021, Jabra updated its true wireless lineup with a redesigned, feature-packed budget option and a premium set with both powerful active noise cancellation (ANC) and enhanced call features. Back in January, the company tacked on an affordable fitness-focus…",
      "url": "https://www.engadget.com/jabra-elite-5-earbuds-announced-price-specs-availability-160041405.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/fcc00c20-298f-11ed-bbef-c155d6e9405a",
      "publishedAt": "2022-09-01T16:00:41Z",
      "content": "In 2021, Jabra updated its true wireless lineup with a redesigned, feature-packed budget option and a premium set with both powerful active noise cancellation (ANC) and enhanced call features. Back i… [+2527 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Igor Bonifacic",
      "title": "Lenovo's IdeaPad 5i Chromebook features a 16-inch display and full-sized keyboard",
      "description": "Like many other tech companies this week, Lenovo is at IFA Berlin sharing details about what it has in store for the end of the year. The company’s 2022 holiday lineup includes the first-ever 16-inch Chromebook. You can configure the IdeaPad 5i with a 2.5K 16…",
      "url": "https://www.engadget.com/lenovo-ideapad-5-i-chromebook-announced-specs-availability-pricing-040045300.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/63c89020-297e-11ed-8fff-df8c0ca52e37",
      "publishedAt": "2022-09-01T04:00:45Z",
      "content": "Like many other tech companies this week, Lenovo is at IFA Berlin sharing details about what it has in store for the end of the year. The companys 2022 holiday lineup includes the first-ever 16-inch … [+3253 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Igor Bonifacic",
      "title": "The new Apple Watch SE features a faster processor, larger screen and crash detection",
      "description": "Two years after introducing the Apple Watch SE, Apple is refreshing its entry-level smartwatch. In the process, the company is bringing over some of the features found in its more expensive wearables. To start, the second-generation model features the same pr…",
      "url": "https://www.engadget.com/second-generation-apple-watch-se-announced-specs-availability-173148325.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/dc1d8c80-2ed1-11ed-97f7-a6e734ac8d49",
      "publishedAt": "2022-09-07T17:31:48Z",
      "content": "Two years after introducing the Apple Watch SE, Apple is refreshing its entry-level smartwatch. In the process, the company is bringing over some of the features found in its more expensive wearables… [+196 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Valentina Palladino",
      "title": "What we bought: How the Blue Yeti Nano finally earned a spot on my desk",
      "description": "Despite primarily working from home for years before the pandemic hit, I hadn’t thought too much about my WFH setup before 2020. I went as far as investing in a solid monitor, mostly because I was sick of squinting at a 13-inch laptop screen for eight hours e…",
      "url": "https://www.engadget.com/blue-yeti-nano-microphone-irl-143058272.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/d5e9cd40-29f1-11ed-bdef-0fe382f8b9fd",
      "publishedAt": "2022-09-13T14:30:58Z",
      "content": "Despite primarily working from home for years before the pandemic hit, I hadnt thought too much about my WFH setup before 2020. I went as far as investing in a solid monitor, mostly because I was sic… [+3429 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Igor Bonifacic",
      "title": "Flickr adds a virtual photography category as more games embrace photo modes",
      "description": "Flickr is adding a new virtual photography category to help users find and categorize images they capture in their favorite video games. Previously, the platform only offered three content categories: photos, illustration and art, and screenshots. The company…",
      "url": "https://www.engadget.com/flickr-virtual-photography-210009754.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/be0655a0-33a5-11ed-ab77-18f8b0ec2d07",
      "publishedAt": "2022-09-13T21:00:09Z",
      "content": "Flickr is adding a new virtual photography category to help users find and categorize images they capture in their favorite video games. Previously, the platform only offered three content categories… [+1036 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Igor Bonifacic",
      "title": "'Rise of the Ronin' is a historical action RPG from the team behind 'Nioh'",
      "description": "The studio behind Nioh plans to take PlayStation fans on an adventure through Bakumatsu-era Japan. On Tuesday, Team Ninja — not to be confused with Ninja Theory — announced it is working on a new action-adventure game titled Rise of the Ronin. Set in 1863, ab…",
      "url": "https://www.engadget.com/team-ninja-rise-of-the-ronin-225837768.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/a548a7a0-33b6-11ed-bff7-39af28045843",
      "publishedAt": "2022-09-13T22:58:37Z",
      "content": "The studio behind Nioh plans to take PlayStation fans on an adventure through Bakumatsu-era Japan. On Tuesday, Team Ninja not to be confused with Ninja Theory announced it is working on a new action-… [+621 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Steve Dent",
      "title": "Samsung's 32-inch Smart Monitor M8 falls to a new low",
      "description": "Samsung's 32-inch Smart Monitor M8 can act not only as a monitor with a webcam, but a smart TV as well thanks to the built-in speakers and support for cloud gaming and streaming platforms. Now, you can grab one for $590 ($110 to $140 off) at Amazon in white o…",
      "url": "https://www.engadget.com/samsungs-32-inch-m-8-smart-monitor-falls-to-a-new-low-080717748.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/fd0ef5e0-2db5-11ed-b4fa-4b651cab6214",
      "publishedAt": "2022-09-06T08:07:17Z",
      "content": "Samsung's 32-inch Smart Monitor M8 can act not only as a monitor with a webcam, but a smart TV as well thanks to the built-in speakers and support for cloud gaming and streaming platforms. Now, you c… [+1684 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Richard Lai",
      "title": "Insta360's X3 gets bigger sensors and a bigger screen for easier 360 capture",
      "description": "It's unclear what Insta360 has been feeding its team lately, but so far, the company has somehow managed to release one new product almost every month since March. It's an interesting mix, too: its modular action cam refresh, a 360-camera drone attachment, a …",
      "url": "https://www.engadget.com/insta360-x3-360-camera-pricing-availability-130005920.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/17d2dc90-2f44-11ed-b5c6-bb995c87c7d6",
      "publishedAt": "2022-09-08T13:00:05Z",
      "content": "It's unclear what Insta360 has been feeding its team lately, but so far, the company has somehow managed to release one new product almost every month since March. It's an interesting mix, too: its m… [+3233 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Gabriella Sotelo",
      "title": "Twitter's Testing a Phone Number Verification Badge",
      "description": "Why wait for the blue check mark when you can get a shield with ‘verified phone number’ right above your following count. And since you can have ten different accounts under one phone number, that is ten verified (phone number) accounts for you. So yes it is …",
      "url": "https://gizmodo.com/twitter-phone-number-verification-badge-1849447606",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/98dca11d6de7780d0e32d8e155081db7.jpg",
      "publishedAt": "2022-08-23T20:10:00Z",
      "content": "Why wait for the blue check mark when you can get a shield with verified phone number right above your following count. And since you can have ten different accounts under one phone number, that is t… [+2900 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Wargaming a North Korean attack",
      "description": "The US and South Korea are doing drills to practise fighting a war against an increasingly hostile North Korea.",
      "url": "https://www.bbc.co.uk/news/business-62587445",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A1B5/production/_126379314_45618a1be5e11768b95936f9bf835b9739a42b09.jpg",
      "publishedAt": "2022-08-21T23:00:14Z",
      "content": "By Jean MackenzieBBC Seoul correspondent\r\nSouth Korea and the US are holding their largest joint military exercises on the Korean Peninsula in years to practise fighting a war against an increasingly… [+6657 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Adam Speight",
      "title": "An Inside Look at Asus' First Laptop With a Foldable Screen",
      "description": "This week, Asus fully revealed its first PC with a screen that folds up. WIRED has exclusive images of the prototypes it built to get there.",
      "url": "https://www.wired.com/story/asus-zenbook-17-fold-oled-exclusive-look/",
      "urlToImage": "https://media.wired.com/photos/630ea73d9fbbe8d3536bfa04/191:100/w_1280,c_limit/MAIN%20IMAGE.png",
      "publishedAt": "2022-08-31T12:00:00Z",
      "content": "The Asus ZenBook 17 Fold OLED is very much a first-generation product, but an intriguing one. WIRED has an exclusive look at how Asus arrived at the first 17-inch laptop with a foldable screen.\r\nIn f… [+3500 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Gian M. Volpicelli",
      "title": "Ethereum's 'Merge' Is a Big Deal for Crypto—and the Planet",
      "description": "One of the most influential cryptocurrency projects is set to finally ditch proof-of-work mining.",
      "url": "https://www.wired.com/story/ethereum-merge-big-deal-crypto-environment/",
      "urlToImage": "https://media.wired.com/photos/62fe63bcfd602ff2f11e6fbf/191:100/w_1280,c_limit/Ethereum-Ditches-Crypto-Business-1036181110.jpg",
      "publishedAt": "2022-08-18T16:09:33Z",
      "content": "Cryptocurrencies are often criticized for being bad for the planet. Every year, bitcoin mining consumes more energy than Belgium, according to the University of Cambridges Bitcoin Electricity Consump… [+3829 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Emily Mullin",
      "title": "This Man Set the Record for Wearing a Brain-Computer Interface",
      "description": "Implanted devices let people control computers and prosthetic limbs with their minds. But nobody knows how long they’ll last—and when they’ll need upgrades.",
      "url": "https://www.wired.com/story/this-man-set-the-record-for-wearing-a-brain-computer-interface/",
      "urlToImage": "https://media.wired.com/photos/62fbe2dfe450f63c28dde01f/191:100/w_1280,c_limit/brain_science_11.jpg",
      "publishedAt": "2022-08-17T11:00:00Z",
      "content": "With so few people outfitted with these devices, their longevity is still unknown. So far, the Utah array has lasted up to 10 years in monkeys. In Copelands case, his implants are still working, but … [+2922 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Taylor Ward",
      "title": "Earl strengthens into a hurricane",
      "description": "Tropical storm Earl has strengthened into a hurricane, according to the National Hurricane Center. Hurricane Earl, just the second of this Atlantic season, has sustained winds of 80 mph with even higher gusts.",
      "url": "https://www.cnn.com/2022/09/06/weather/hurricane-earl-atlantic/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220906214837-earl-satellite.jpg?q=w_800,c_fill",
      "publishedAt": "2022-09-07T02:16:36Z",
      "content": "Tropical storm Earl has strengthened into a hurricane, according to the National Hurricane Center. Hurricane Earl, just the second of this Atlantic season, has sustained winds of 80 mph with even hig… [+1513 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Hannah Sarisohn",
      "title": "A Black pastor arrested while watering his neighbor's flowers has filed a federal lawsuit",
      "description": "Attorneys for Michael Jennings, a Black pastor arrested while watering his neighbor's flowers, filed a lawsuit in federal court on Friday alleging that the three Childersburg, Alabama, police officers who arrested him violated his rights under the First and F…",
      "url": "https://www.cnn.com/2022/09/10/us/black-pastor-arrest-watering-flowers-federal-lawsuit-reaj/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220910152042-01-black-pastor-arrest-watering-flowers-federal-lawsuit-reaj-super-tease.jpg",
      "publishedAt": "2022-09-10T21:19:50Z",
      "content": "(CNN)Attorneys for Michael Jennings, a Black pastor arrested while watering his neighbor's flowers, filed a lawsuit in federal court on Friday alleging that the three Childersburg, Alabama, police of… [+2438 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Reid McCarter",
      "title": "The Freedom of Playing a Very Un-Catlike Cat in Stray",
      "description": "Everyone's favorite post-apocalyptic cat is a joy to play, but it tells us more about what we love about cats than how they actually behave.",
      "url": "https://www.wired.com/story/cat-freedom-stray-animal-behavior/",
      "urlToImage": "https://media.wired.com/photos/62d6f95addaaa99a1df8e614/191:100/w_1280,c_limit/Stray-1-Games.jpg",
      "publishedAt": "2022-08-17T16:00:00Z",
      "content": "Set in a far future, robot-filled take on Kowloon Walled City, Stray presents a world thats tried to move on without human rulebut one that cant escape the long shadow of our influence. In it, a dome… [+3677 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Adam Speight",
      "title": "Sony’s Xperia 1 IV Is a Nice Android Phone With an Absurd Price",
      "description": "It’s still one of the few flagships with a headphone jack and microSD card slot.",
      "url": "https://www.wired.com/review/sony-xperia-1-iv/",
      "urlToImage": "https://media.wired.com/photos/62fea64e35e945940dec1c0b/191:100/w_1280,c_limit/Sony-Xperia-1-IV-Top-Gear.jpg",
      "publishedAt": "2022-08-19T12:00:00Z",
      "content": "Sonys Xperia phones arent like any other, which is a good thing. It has a tall 21:9 aspect ratio with a 4K screen, and Sony also has different priorities with its camera systemit offers up more manua… [+4197 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Helen Li",
      "title": "Space Nerds at the Beach: A Dispatch From the Aerospace Games",
      "description": "The annual competition is more than just a field day. For workers from NASA, SpaceX, Blue Origin, and more, trophies and glory are on the table.",
      "url": "https://www.wired.com/story/space-nerds-at-the-beach-aerospace-games/",
      "urlToImage": "",
      "publishedAt": "2022-08-20T11:00:00Z",
      "content": "If youve ever watched the 2000s teenage-heartthrob movie Twilight, you know there is an iconic thunderstorm baseball game scene between the Cullen Family and other vampires alongside the mere mortal … [+3605 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Simon Lucas",
      "title": "Sony's New Flagship TV Is a Pleasure to Watch—and Listen to",
      "description": "There's a new panel technology in town: QD-OLED, a brighter version of OLED. This Sony, the first TV to use it, matches it with an excellent audio system.",
      "url": "https://www.wired.com/review/sony-bravia-xr-55a95k-tv/",
      "urlToImage": "https://media.wired.com/photos/63110fba9942353dc81f152d/191:100/w_1280,c_limit/Sony-TV-Gear.jpg",
      "publishedAt": "2022-09-02T12:00:00Z",
      "content": "Aside from one of the two remotes being a bit nasty, the only false note is the appearance of the Bravia Cam. This little camera clips magnetically to the rear of the TV's chassis and peeps Chad-like… [+5205 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Simon Hill",
      "title": "Netgear's Nighthawk RAXE300 is Ideal for Gamer Families, But There's a Cost",
      "description": "This Wi-Fi 6E router is a speedy and stable dream for gamers—but only if you can stomach or skip the subscriptions.",
      "url": "https://www.wired.com/review/netgear-nighthawk-raxe300/",
      "urlToImage": "https://media.wired.com/photos/631a37a3f1e5c40d2b1bc5f3/191:100/w_1280,c_limit/Nighthawk-RAXE300-Gear.png",
      "publishedAt": "2022-09-09T12:00:00Z",
      "content": "If youre craving a taste of the latest top Wi-Fi speeds but not prepared to take out a second mortgage, Netgears Nighthawk RAXE300 ($400) may be just right. With a stealth bomber style, this router q… [+3379 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Anthony Lydgate",
      "title": "Would You Ditch All This Chaos for a Country in the Cloud?",
      "description": "Balaji Srinivasan—technologist, investor, prophet, troll—says let the old world sink. Find your tribe and build your bespoke society, or get left behind.",
      "url": "https://www.wired.com/story/would-you-ditch-all-this-chaos-for-a-country-in-the-cloud/",
      "urlToImage": "https://media.wired.com/photos/630e61933dfe1372fb611109/191:100/w_1280,c_limit/WI100122_FF_Sovereign_01.jpg",
      "publishedAt": "2022-09-06T10:00:00Z",
      "content": "As he accrues hundreds of thousands more Twitter followers, Srinivasan dispenses short-term advice (work from home, cancel group events, ramp up testing capacity, stop making comparisons with the flu… [+4906 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lifehacker.com"
      },
      "author": "Claire Lower",
      "title": "You Should Air Fry Your Peaches",
      "description": "I could eat a peach for hours, especially a juicy, fully-ripe, in-season peach. But such luscious delights are increasingly hard to come by, even in the summer months. “Just okay” peaches are much more common, and they have their uses: A little sugar, a littl…",
      "url": "https://lifehacker.com/you-should-air-fry-your-peaches-1849454679",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5a7adebdfaefc1b6c874c81005efb7b3.jpg",
      "publishedAt": "2022-08-25T12:04:36Z",
      "content": "I could eat a peach for hours, especially a juicy, fully-ripe, in-season peach. But such luscious delights are increasingly hard to come by, even in the summer months. Just okay peaches are much more… [+1576 chars]"
    }
  ]
}





const Home = ({navigation}) => {
  const [activeCat, setActiveCat] = useState(constants.categories[0])
  const [news, setNews] = useState(data.articles);
  const [brekingNews, setBrekingNews] = useState(data.articles);
  const [query, setQuery] = useState("")
  const {colors} = useTheme();
  const [isLoading, setIsLoading] = useState(false)
  const { i18n, t } = useTranslation();
  const selectedLanguageCode = i18n.language;

  React.useEffect(() => {
    getBrekingNewsHandler()
  }, [activeCat,selectedLanguageCode])
  
  React.useEffect(() => {
    const controller = new AbortController()
    const signal = controller?.signal
    getNewsHandler({});
    return () => {
      controller.abort()
    }
  }, [query,selectedLanguageCode])


  
  const getNewsHandler = async({signal = false})=>{
    try {
      setIsLoading(true)
      let res = await getNews({q:query, language: selectedLanguageCode,signal})
      res = JSON.parse(res)
      setIsLoading(false)
      if(res?.totalResults > 0){
        setNews(res.articles)
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  
  const getBrekingNewsHandler = async()=>{

    try {
      let res = await getBrekingNews({category: activeCat,language: selectedLanguageCode})
      res = JSON.parse(res)
      console.log(res)
      if(res?.totalResults > 0){
        setBrekingNews(res.articles)
      }else if(res?.totalResults === 0){
        setBrekingNews([])
      }else{
        setBrekingNews([])
        
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  const goToDetailScreen = (item)=>{
    navigation.navigate("Detail",{item})
  }

  return (
    <SafeAreaView style={globalStyle.container} edges = {["top"]}>
      <Row style={{marginTop: 20}}>
        <Searchbar onChangeText={(text)=>setQuery(text)} text={query}/>
        <View style={{}}>
          <TouchableOpacity style={[styles.bellBg,{backgroundColor: colors.primary}]}>
            <MaterialCommunityIcons name='bell' color={colors.white}/>
          </TouchableOpacity>
        </View>
      </Row>
      <LatestNewSlider
        news = {brekingNews}
        onPress = {goToDetailScreen}
      />
      <View>
        <Categoties activeCat = {activeCat} onPress= {(cat)=>setActiveCat(cat)}/>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          // stickyHeaderIndices={[0]}
          refreshing = {isLoading}
          onRefresh = {()=>getNewsHandler({})}
          showsVerticalScrollIndicator = {false}
          data={news}
          keyExtractor = {(item, index) => `item-${index}`}
          renderItem = {({item})=>{
            return(
              <TouchableOpacity activeOpacity={.9} style={{ height: 120, borderRadius: 10, overflow: 'hidden', marginBottom: 10}} onPress= {()=>goToDetailScreen(item)}>
                    <View style={globalStyle.layer}/>
                    <Image source={{uri: item.urlToImage}} style={{width: '100%', height: "100%", position: 'absolute'}} />
                    <View  style={{flex: 1, padding: 10, zIndex: 100}}>
                        <View style={{flex: 1, justifyContent: 'flex-start'}}>
                            <Text style={[globalStyle.title,{color: colors.white}]}>{item.title}</Text>
                        </View>
                        <Row>
                          <View style={{flex: 1, marginRight: 10}}>
                            <Text numberOfLines={1} style={[globalStyle.small12,{color: colors.white}]}>{item?.author? `By ${item?.author}`: ""}</Text>
                          </View>
                          <Text numberOfLines={1} style={[globalStyle.title,{color: colors.white}]}>{moment(item.publishedAt).format(constants.DATE_FORMATE)}</Text>
                        </Row>
                    </View>
                </TouchableOpacity>
            )
          }}
        />
      </View>
      {/* <AppButton title={"APP BUTTON"}/> */}
    </SafeAreaView>
  )
}

export default Home



const styles = StyleSheet.create({
  bellBg: {
    height: 30, width: 30, alignItems: 'center', justifyContent: 'center',
    borderRadius: 100,
    marginStart: 15,
    alignSelf: 'center'
  }
})