export type userType = {
    login: string,
    password: string,
    isAdmin: boolean
}

export type cechaType = "Ciało" | "Umysł" | "Urok";
export type typTalentType = "Podstawowy" | "Mistrzowski" | "Arcymistrzowski" | "PółBoski" | "Boski" | "Skill" | "Jednorazowy" | "Właściwość" | "Rasa";

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
    talenty: talentType[],
    ID: number
}

export type pagerType = "Login" | "Szukaj" | "List" | "Main" | "Plecak" | "Error";

export type idPagerType<T extends pagerType> = T extends "Login" ? 0 :
T extends "Szukaj" ? 1 :
T extends "List" ? 2 :
T extends "Main" ? 3 :
4

export type Positive<T extends number> = `${T}` extends `-${string}`
  ? never
  : T;

export type urlType = `http${'s' | ''}://${string}` | `./${string}.${'png' | 'webp'}`;

export type queryType<T extends number|JSON> = {
    isError: boolean,
    returnedValue: T
}