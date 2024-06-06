import { Organismo } from "../../organismo/models/organismo.model";
import { TipoPeptideo } from "./tipopeptideo.model";

export interface Peptideo {
    id?: number;
    peptideo: string;
    quantAas: number;
    tipoPeptideo: TipoPeptideo;
    sequencia: string;
    estruturaTridimensional: string;
    massaMolecular: number;
    impediEsterico: number;
    hidrofobocidade: number;
    pontoIsoeletrico: number;
    hidropatia: number;
    anfipaticidade: number;
    hidrofilicidade: number;
    cargaLiquiTotal: number;
    indiceBoman: number;
    descricao: number;
    organismo: Organismo;
}