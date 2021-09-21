import { Get, Path, Route } from "tsoa";
import { CervejaResponse } from "../models/CervejaResponse";
import { MarcaResponse } from "../models/MarcaResponse";
import { cervejaService } from "../services/CervejaService";

@Route("marca")
export class MarcasController {
    @Get()
    async listar(): Promise<MarcaResponse[]> {
        return await cervejaService.obterMarcas();
    }

    @Get("{marcaId}/cerveja")
    async listarCervejasPorMarca(@Path() marcaId: string): Promise<CervejaResponse[]> {
        return await cervejaService.obterCervejaPorMarca(marcaId);
    }
}
