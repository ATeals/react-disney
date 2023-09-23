export interface Character {
    id: number;
    name: string;
    imageUrl: string;
}

export interface CharacterDetail extends Character {
    films: string[];
    sourceUrl: string;
}
