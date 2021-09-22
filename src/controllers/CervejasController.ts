import { Get, Query, Route } from "tsoa";
import { CervejaResponse } from "../models/CervejaResponse";
import { cervejaService } from "../services/CervejaService";

@Route("cerveja")
export class CervejasController {
    @Get()
    async listar(
        @Query() nome?: string,
        @Query() descricao?: string,
        @Query() descricaoMarca?: string,
        @Query() harmonizacao?: string,
        @Query() ingredientes?: string,
        @Query() teorAlcoolico?: string,
        @Query() ibu?: string,
        @Query() tipo?: string,
    ): Promise<CervejaResponse[]> {
        return await cervejaService.filtrarCervejas({
            nome,
            descricao,
            descricaoMarca,
            harmonizacao,
            ingredientes,
            teorAlcoolico,
            ibu,
            tipo
        });
    }
}
