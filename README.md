# Blog com Angular

Aplicação de estudo com páginas de listagem e leitura de artigos, construída com Angular 14, TypeScript, HTML e CSS.

## Funcionalidades

- Componentes de cards, menu e título.
- Rota `content/:id` para leitura de artigos.
- Conteúdo local em `src/app/data/dataFake.ts`.
- Tratamento de artigo inexistente e atualização ao mudar o parâmetro da rota.

## Como executar

No ambiente compatível descrito abaixo:

```sh
git clone https://github.com/FilipeBandeira/projeto-blog-angular.git
cd projeto-blog-angular/angular-blog
npm ci
npm start
```

Abra `http://localhost:4200`. A CLI é instalada localmente; não é necessário instalar Angular CLI global.

```sh
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

O teste de interface requer Chrome ou Chromium disponível. Os testes de regressão em `tests/` também podem ser executados sem instalar Angular, usando Node.js 24:

```sh
cd ..
node --test tests/*.test.cjs
```

## Estrutura

- `src/app/components/`: componentes de apresentação.
- `src/app/pages/`: home e conteúdo.
- `src/app/data/`: artigos de demonstração.
- `src/app/app-routing.module.ts`: configuração das rotas.

## Escopo e qualidade

Aplicação de estudo sem backend, autenticação ou persistência. O GitHub Actions executa testes de regressão da lógica com Node.js 24; essa verificação não substitui a compilação completa nem os testes de interface no ambiente Angular.

## Compatibilidade e evolução

O projeto utiliza **Angular 14**, uma versão sem suporte atual. O ambiente histórico compatível usa Node.js 16.20.x, também fora de suporte, e TypeScript 4.7. Use esse ambiente apenas para reproduzir o projeto de estudo. A prioridade para uma evolução destinada a publicação é migrar Angular e Node para versões mantidas, revisar dependências e validar a aplicação. Consulte a [matriz oficial de compatibilidade](https://angular.dev/reference/versions).

## Autor e licença

[Filipe Bandeira](https://github.com/FilipeBandeira). Consulte o arquivo [LICENSE](LICENSE) para os termos do repositório. Materiais e marcas de terceiros mantêm seus respectivos direitos.
