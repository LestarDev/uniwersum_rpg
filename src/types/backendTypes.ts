export type userType = {
    login: string,
    password: string,
    isAdmin: boolean
}

export type cechaType = "Ciało" | "Umysł" | "Urok";
export type typTalentType = "Podstawowy" | "Mistrzowski" | "Arcymistrzowski" | "PółBoski" | "Boski" | "Skill" | "Jednorazowy";

export type talentType = {
    nazwa: string,
    cecha: cechaType,
    typ: typTalentType,
    value: number
}

export type playerType = {
    imie: string,
    cialo: number,
    umysl: number,
    urok: number,
    talenty: talentType[]    
}