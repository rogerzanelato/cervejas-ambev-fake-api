import { CervejaResponse } from "../models/CervejaResponse";
import { MarcaResponse } from "../models/MarcaResponse";
import cervejas from '../database/cervejas.json';
import marcas from '../database/marcas.json';

class CervejaService {
    async obterCervejas(): Promise<CervejaResponse[]> {
        return cervejas;
    }

    async obterMarcas(): Promise<MarcaResponse[]> {
        return marcas;
    }

    async obterCervejaPorMarca(marcaId: string): Promise<CervejaResponse[]> {
        const cervejas = await this.obterCervejas();
        return cervejas.filter(cerveja => cerveja.marcaId === marcaId);
    }
}

const cervejaService = new CervejaService();

export { cervejaService };