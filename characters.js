// Character data extracted from the original HTML
const characters = [
    {
        id: 'talpa-di-ferro',
        name: 'Talpa Di Ferro',
        koreanName: '탈파 디 페로',
        image: 'i/yQRzYH1VACFBWmPwzu_6LKEKn9TqjFYqfI6PAGpaZeJWT1t477VEk-KXCUZqBlIWyXfgU2RXyDaeUA8GhGBOia9yB-MQl9QdB1LCu8edP9-g3xsONpd9vLWxa2reS0Phh5_CN9D27ZFZImBCB7L09Q.webp',
        motive: 'Mole, Cyborg',
        bgm: 'The Sound Of Your Fear',
        video: 'https://www.tiktok.com/@italianbrainrotanimals01/video/7524020191127211286',
        description: 'Mole where multiple parts are mechanized. The eyes and foreheads are said to be equipped with a microchip that allows you to fully and accurately scan the body of the surrounding organisms. There is a small drill that can penetrate any solid object in the front teeth, which can be drilled metal.',
        originalText: 'Oh, oh Dio mio! Talpa Di Ferro! In grado di scavare qualsiasi oggetto solido, in grado di scavare anche il metallo. Dopo la fine della recente guerra tra Bombombini Gusini e Bombardiro Crocodilo, hanno cessato di esistere nel mondo.\n\nOh, oh god! Escape dero! Any solid object can be drilled, and even metal can be drilled. Recently, after the war of the spring spring beanie Gujini and the Spring Bardiro Crocodilo, they disappeared from the world.'
    },
    {
        id: 'chef-crabracadabra',
        name: 'Chef Crabracadabra',
        koreanName: '셰프 크라브라카다브라',
        image: 'i/RdczLnDUCl4eamYjuiEEQ3LwlnT4AngzS8Pbiy-tDpe9o-t4oJqCezOmMzK94x-8xG-NjOM7l0CJTMysbfzpxTASDtDg1zPstxGcxdMr-_0FVvJ7Y0Q7FU81RhXrXke0gHbwfN7VDk3z5lSLrK_hbg.webp',
        motive: 'Chef, Crab, Abracadabra',
        video: 'https://youtu.be/aDddm4r4Sr8?si=LDao_xdPNAEjAjVB',
        description: 'It is a chef with a crab\'s head and tongs and is born in 1939. In the old days, it was a fisherman of a coastal village, but it became a crab after signing a contract with a sea witch to save the villagers suffering from famine. His tongs can tear anything and open a dimensional portal.',
        originalText: 'Zazam Zazoom — la tua cena è il tuo doom!\n\nTaglia le teste, le frigge nel fango, grida \'maledetti!\' con un rutto e uno schianto. Nel forno ci butta le anime sporche, lecca coltelli, bestemmia le porche. Ha il grembiule pieno di sangue e di ossa, sputa nel sugo, ti ride in faccia, grosso. Con un dito nel naso e l\'altro nel culo, prepara la morte, servita sul piatto più scuro. Zazam Zazoom — e mo\' mangia, stronzo,\n\nCrabracadabra ti cucina il tramonto.\n\nJjamjamjak, your dinner!\n\nCut your head, fry in the mud, scream the destroyed guy! Isn\'t it a waste of trim and crash? Throw dirty souls in the oven, lick with a knife and curse the pigs. The apron is filled with blood and bones, so spit out the sauce and laugh at the face. Prepare one side on the nose, the other on the butt, and the other to death. It is provided in the darkest plate. "I ate, chew"\n\nKravracada Bra cooks the sunset.'
    },
    {
        id: 'penguinelli-cactussini',
        name: 'Penguinelli Cactussini',
        koreanName: '펭귄넬리 카투시니',
        image: 'i/SgfrhQj6k4QNKUzqD0drp8SOhTgqTRu3fBF7zxSalP3XoDfPZHZraD-Wx0npXmC2fMRClXir6uwyhwf5Jc3CjTdDRqwKNAFCA5M8vmWjvTOfe7bBtnQ9YFEY6s60KNqMWegNnPCxMRCaI8ncx2NGPQ.webp',
        motive: 'Penguin, Cactus, Cowboy, Shoes',
        bgm: 'The Sound Of Your Fear',
        video: 'https://www.tiktok.com/@alexey_pigeon/video/7479234131231083798',
        description: 'It is a character that combines penguins, cactuses and cowboys. The name written in the video is the name \'Lerululerle\', but it is also known as the name of Peng Woolelli Cocksiny.'
    },
    {
        id: 'hipopotamino-supermaketino',
        name: 'Hipopotamino Supermaketino',
        koreanName: '히포포타미노 수퍼마케티노',
        image: 'i/ODDFmidnC1WeOLSHKdYCwbMlPBqHOvbLHt_nO2Ts7xasmqttVMJqsSzCUPJbDp4sHGXlOrdYJZdFsO8iOh5ALmXFDGuovuxMDyOUloALin0DrVFRAfxwWywj4uHvDO-o_iAn_NI0NAMQaCU_4kh23w.webp',
        motive: 'Hippo, Supermarket',
        bgm: 'Suspense Horror Piano and Music box',
        video: 'https://www.tiktok.com/@froutatoudasous69/video/7482696122159385878',
        description: 'It is a character that combines hippo and supermarket.'
    },
    {
        id: 'raccooni-watermelunni',
        name: 'Raccooni Watermelunni',
        koreanName: '라쿠니 워터멜루니',
        image: 'i/VGsCuCKjHzG6NCwvsXtvdlQPt5gWzew7sPKTrF7qaEjAuPa4eLuSYhdNrR6IBAbJE828-_N_Ptt8F-HhgYTgA_M4W_ppr1JEOzB-rKB2R956Y-34XcUbLKyQXuOWrszUWJlD77oigEVw1ggjWC3-xA.webp',
        motive: 'Raccoon, Watermelon',
        bgm: 'The Sound Of Your Fear',
        video: 'https://www.tiktok.com/@alexey_pigeon/video/7483684674124958998?q=Raccooni%20Watermelunni&t=1746261313667',
        description: 'It is a character with raccoons inside the watermelon.',
        originalText: 'Raccoonicunicunicuni watermelunni! Melo Melo melonuchi racconuchi. Racconito watermelonito!\n\nRakuni Kuni Kuni Watermeloney! Melo Melo Melo Nak Rakunucci. Rakunito Water Melonito!'
    },
    {
        id: 'cocossini-mama',
        name: 'Cocossini Mama',
        koreanName: '코코시니 마마',
        image: 'i/pYXbZuTNFBbS7tfwNTVic_4e5tmMtfmm4mtWlw62YFkFNw6ljlCBVnJ0zes1E0LXZU-LcRXEVPptCylCS0bizj3Zg8sOyHK2icuQe4_gS1OPF3D_w1HTD1JqM56oBL91QG15xY8g71-uJkpv2eTchw.webp',
        motive: 'Kangaroo, Coconut',
        bgm: 'The Sound Of Your Fear',
        video: 'https://www.tiktok.com/@alexey_pigeon/video/7479775195180453142',
        description: 'It is a character that combines kangaroo and coconut.'
    },
    {
        id: 'snooffi-zeffirulli',
        name: 'Snooffi Zeffirulli',
        koreanName: '스누피 제피룰리',
        image: 'i/SywIKUz9sYR4-jDSzQLOvhHvDd7A6oVB_uNiFuqoIh2hJ2Tz_eIFNfmX_fZKMOrPs1GE53incoiD7rWZi3tBq9RBAJqaz6jWGmChrCEnPsn1ZToC6MqU7CrDuQPqq1weOlj7w69slZcL5fL_BaDlmQ.webp',
        motive: 'Hedgehog, Pineapple',
        bgm: 'The Sound Of Your Fear',
        video: 'https://www.tiktok.com/@alexey_pigeon/video/7479971522392755478',
        description: 'It is a character that combines hedgehogs and pineapples. Brie Brey Viccus Dikus Bombus and friends.'
    },
    {
        id: 'perochello-lemonchello',
        name: 'Perochello Lemonchello',
        koreanName: '페로켈로 레몬켈로',
        image: 'i/GmZORPp56YLvjSuyT3bVTamS4TjELPYPxKQNJA4lRi_2y288-GbPE0D1X0Ut1b-t1UqEakZxHHC030DW7C5C2uDyCPdLQFRmsvZiD5MLCNvbz1JnZopUrWuWhtQuiLujndsxutDwKbXtiV09OLEnag.webp',
        motive: 'Parrot, Lemon',
        bgm: 'The Sound Of Your Fear',
        video: 'https://www.tiktok.com/@alexey_pigeon/video/7480350013399256342',
        description: 'It is a character that combines parrot and lemon. It is said to like lemon.'
    },
    {
        id: 'ananitto-giraffini',
        name: 'Ananitto Giraffini',
        koreanName: '아나니토 기라피니',
        image: 'i/AzGpKaGM143d8QERAUZyCynJbj0-LexoJkhEm-c6va8FEz9sVGfMuIJAm4FrLnZqHfl3aqiGouE_Bkl5AgLmjC7i8mQpVQQkRns1vkruoiGb8JF5ARRIR8oZ5wTr7cVl_HvSZA7Mx6gGrdZxvG5OWQ.webp',
        motive: 'Pineapple, Giraffe',
        bgm: 'The Sound Of Your Fear',
        video: 'https://www.tiktok.com/@alexey_pigeon/video/7480615386774375702',
        description: 'It is a character that combines pineapple and giraffe. Cocosini Mama is a friend, he has a child, and he is also a friend with Kokoshino Reno.',
        originalText: 'ananitto Giraffini solo Ananito ananasitto, un uomo enorme, un uomo molto molto lungo\n\nAnanito Girafini Ananito Ananito, a huge giraffe, very long giraffe.'
    },
    {
        id: 'cocosino-rhino',
        name: 'Cocosino Rhino',
        koreanName: '코코시노 리노',
        image: 'i/fJ7-1fH4loEar95H9rpb8lta1hrd0SkpBd_PSdpy3n3cXLQWT2RkwQWyB_WoO0uY7goabvqBFD4ITWhx9_dK5F2-ubJONGcWcc10-gHPn62y1AZV1Amv5G7Ko7N3x_tglyEwDFdlI3meGUXVIbGSgA.webp',
        motive: 'Rhino, Coconut',
        bgm: 'The Sound Of Your Fear',
        video: 'https://www.tiktok.com/@alexey_pigeon/video/7481667086532480278',
        description: 'It is a character that combines rhinos and coconuts.',
        originalText: 'Cocosino Rhino. Rhino Rhino cocosino! Coconuchi rhinuchi.\n\nKokoshino Reno. Reno Reno Cocosino! Coco Nutchi Linucci.'
    }
    // Add more characters as needed...
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = characters;
} else {
    window.characters = characters;
}
