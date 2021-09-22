import { CervejaResponse } from "../models/CervejaResponse";
import { MarcaResponse } from "../models/MarcaResponse";
import cervejas from '../database/cervejas.json';
import marcas from '../database/marcas.json';
import { CervejaQuery } from "../models/CervejaQuery";

class CervejaService {
    async filtrarCervejas(filtros: CervejaQuery): Promise<CervejaResponse[]> {
        const cervejas = await this.obterCervejas();

        const filtrosValidos = Object.entries(filtros).filter(([key, value]) => !!value);
        if (filtrosValidos.length === 0)
        {
            return cervejas;
        }

        return cervejas.filter((cerveja) => {
            for (const [key, value] of filtrosValidos) {
                if (cerveja[key].toLowerCase().includes(value.toLowerCase())) {
                    return true;
                }
            }
            return false;
        });
    }

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