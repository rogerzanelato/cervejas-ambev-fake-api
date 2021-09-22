import express, { Request, Response } from "express";
import cors from "cors";
import { errorHandlingMiddleware } from "./middlewares/errorHandlingMiddleware";
import { RegisterRoutes } from "./routes";
import swaggerUi from "swagger-ui-express";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/docs", swaggerUi.serve, async (req: Request, res: Response) => {
    return res.send(
      swaggerUi.generateHTML(await import("./swagger.json"))
    );
});

RegisterRoutes(app);

app.use(errorHandlingMiddleware);

export { app };
