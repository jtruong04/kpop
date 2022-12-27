export type Song = {
    artist: string
    title: string
    youtube: string
  }

export type Data = {
    'top10': string[],
    // 'superlatives': {
    //     [name:string]: string[]
    // },
    'entries': {
        [name:string]: Song
    },
    'honorable_mentions': string[]
}

export const data:Data = {
    "top10": [
        "kangdaniel_parade",
        "bi_btbt",
        "bibi_animal_farm",
        "seulgi_28_reasons",
        "lucy_play",
        "straykids_heyday",
        "ten_birthday",
        "&team_undertheskin",
        "jacksonwang_cruel",
        "lesserafim_impurities"
    ],
    "honorable_mentions": [
        "oneus_same_scent",
        "woosung_phase_me",
        "cix_458",
        "xdinaryheroes_strawberrycake",
        "kingdom_longlivetheking"
    ],
    "entries": {
        "kangdaniel_parade": {
            "artist": "Kang Daniel",
            "title": "Parade",
            "youtube": "SZJR37OtmR4"
        },
        "kangdaniel_dont_tell": {
            "artist": "Kang Daniel",
            "title": "Don't Tell",
            "youtube": "z7H4ZTeVHxk"
        },
        "bi_btbt": {
            "artist": "B.I.",
            "title": "BTBT",
            "youtube": "cpB2ZMzXrss"
        },
        "lucy_play": {
            "artist": "Lucy",
            "title": "Play",
            "youtube": "wFJxzoljf10"
        },
        "bibi_animal_farm": {
            "artist": "Bibi",
            "title": "Animal Farm",
            "youtube": "w7fpXqQD7pU"
        },
        "seulgi_28_reasons": {
            "artist": "Seulgi",
            "title": "28 Reasons",
            "youtube": "G_BYjnopO6U"
        },
        "jacksonwang_cruel": {
            "artist": "Jackson Wang",
            "title": "Cruel",
            "youtube": "Rhy7_Y15FrI"
        },
        "straykids_heyday": {
            "artist": "Stray Kids (3RACHA)",
            "title": "Hey Day",
            "youtube": "LjPoOb0dt8s"
        },
        "ten_birthday": {
            "artist": "Ten",
            "title": "Birthday",
            "youtube": "QGySpyt0Byg"
        },
        "&team_undertheskin": {
            "artist": "&Team",
            "title": "Under the Skin",
            "youtube": "Ao_CgrYNP44"
        },
        "lesserafim_impurities": {
            "artist": "Le Sserafim",
            "title": "Impurities",
            "youtube": "Ccz123Jlflc"
        },
        "oneus_same_scent": {
            "artist": "ONEUS",
            "title": "Same Scent",
            "youtube": "XlqTPCEfiyA"
        },
        "woosung_phase_me": {
            "artist": "Woosung",
            "title": "Phase Me",
            "youtube": "5Uj6RrJUAcA"
        },
        "cix_458": {
            "artist": "Cix",
            "title": "458",
            "youtube": "F89BLizUDSY"
        },
        "xdinaryheroes_strawberrycake": {
            "artist": "Xdinary Heroes",
            "title": "Strawberry Cake",
            "youtube": "atWpuwRcMoc"
        },
        "kingdom_longlivetheking": {
            "artist": "Kingdom",
            "title": "Long Live the King",
            "youtube": "tDo7cQ8mnyI"
        },
    }
}