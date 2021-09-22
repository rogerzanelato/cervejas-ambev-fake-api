# Cervejas Ambev API

API mock utilizada para exemplo em aulas e workshops.

Swagger: http://localhost:3000/docs

## Comandos

Atualizar Heroku:
```bash
git push heroku main
heroku ps:scale web=1
heroku open
```

Verificar dynos rodando:
```bash
heroku ps
```

Logs:
```bash
heroku logs --tail
```

Bash:
```bash
heroku run bash
```