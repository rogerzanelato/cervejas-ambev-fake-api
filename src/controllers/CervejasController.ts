import { Get, Route } from "tsoa";
import { CervejaResponse } from "../models/CervejaResponse";
import { cervejaService } from "../services/CervejaService";

@Route("cerveja")
export class CervejasController {
    @Get()
    async listar(): Promise<CervejaResponse[]> {
        return await cervejaService.obterCervejas();
    }
}
