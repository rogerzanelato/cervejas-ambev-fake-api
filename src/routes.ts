import { Router } from "express";

const router = Router();

router.get('/', (request, response) => {
    return response.json({
        "helloWorld": "Welcome to the API"
    });
});

export { router };
