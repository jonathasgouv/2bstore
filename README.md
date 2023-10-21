# 2BStore
**Version 1.0.0**

Desafio técnico realizado para a agência 2B.


## Conteúdos
* [Considerações gerais](#considerações-gerais)
* [Instalação](#instalação)
* [Construído Com](#construído-com)
* [Autor](#autor)

##  Considerações gerais
- Optei por construir o projeto com react, utilizando Vite e Typescript. O Vite oferece um tempo de execução muito rápido, o que facilita o desenvolvimento. Igualmente o typescript, que além disso oferece mais segurança e diminui a possibilidade de erros em runtime.
- Apesar do desafio frontend, se tratando de uma agência que trabalha prioritariamente com VTEX, escolhi criar um projeto 100% funcional. Sendo assim utilizei das apis públicas da VTEX do site Champion (espero que não se importem, hehe) para garantir o funcionamento do site. O site utilize um orderform e dados reais, sendo inclusive possível finalizar a compra no site da Champion ao clicar no botão 'Finalizar compra' do minicart.
- Para gerenciamento de estado global optei por usar a biblioteca global Zustand, pois se tratando de um projeto com prazo curto ela oferece mais facilidade, visto que trata o estado como um hook genérico.
- Alguns funcionamentos exigiram páginas ou componentes não presentes no layout do figma, nesse caso tentei apenas seguir o tema geral do site. (Exemplo: página 404.)

### Disclaimers
- Na VTEX um produto com estoque não pode ser adicionado em quantidade maior que o estoque disponível. Sendo assim, é possível que um produto não tenha sua quantidade aumentada mesmo o adicionando duas vezes. Não é um erro, apenas significa que aquele produto tem apenas uma unidade em estoque.

## Instalação
Execute os comandos a seguir e você terá uma versão local do projeto em execução.
```bash
$ git clone https://github.com/jonathasgouv/2bstore
$ cd 2bstore
$ yarn
```

```bash
$ yarn dev
```

:grinning:

## Construído com
* [Javascript](https://www.javascript.com/)
* [React](https://react.dev/)
* [Typescript](https://www.typescriptlang.org/)
* [Vite.js](https://vitejs.dev/)
* [Zustand](https://zustand-demo.pmnd.rs/)

## Autor
* [Jônathas Gouveia](https://github.com/jonathasgouv/)