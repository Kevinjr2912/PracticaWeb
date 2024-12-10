import { IOrigin } from "./iorigin";

export interface InformacionPersonaje {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: IOrigin;
    image: string;
}
