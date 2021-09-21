import { promises as fs } from 'fs';
import path from 'path';
import { CervejaResponse } from "../models/CervejaResponse";
import { MarcaResponse } from "../models/MarcaResponse";

const cervejasPath = path.join(__dirname, "..", "database", "cervejas.json");
const marcasPath = path.join(__dirname, "..", "database", "marcas.json");

class CervejaService {
    async obterCervejas(): Promise<CervejaResponse[]> {
        const data = await fs.readFile(cervejasPath, 'utf-8');
        return JSON.parse(data);
    }

    async obterMarcas(): Promise<MarcaResponse[]> {
        const data = await fs.readFile(marcasPath, 'utf-8');
        return JSON.parse(data);
    }

    async obterCervejaPorMarca(marcaId: string): Promise<CervejaResponse[]> {
        const cervejas = await this.obterCervejas();
        return cervejas.filter(cerveja => cerveja.marcaId === marcaId);
    }
}

const cervejaService = new CervejaService();

export { cervejaService };