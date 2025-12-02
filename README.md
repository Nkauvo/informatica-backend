# Backend da Informatica 🖥️

Este documento contém o passo a passo completo para rodar o backend do
projeto e testar todas as rotas (CRUD) usando o Thunder Client 

------------------------------------------------------------------------

## 🚀 1. Baixe os Arquivos

Baixe o repositório do projeto (via ZIP ) e extraia em seu
computador.

------------------------------------------------------------------------

## 🧩 2. Abra o VS Code e Acesse o Terminal

No VS Code, abra o terminal integrado:

-   Menu: **Terminal \> New Terminal**
-   Atalho: **Ctrl + \`**

------------------------------------------------------------------------

## 📦 4. Instale as Dependências

Rode:

``` bash
npm install
npm install express cors
```

Esse comando vai baixar todas as bibliotecas necessárias para o backend
funcionar.

------------------------------------------------------------------------

## ▶️ 5. Inicie o Servidor

Para iniciar o backend:

``` bash
node server.js
```

O servidor será iniciado normalmente em:

    http://localhost:3000

Se aparecer a mensagem no terminal, deu tudo certo:

    SERVIDOR RODANDO EM http://localhost:3000

------------------------------------------------------------------------

# 🏃‍♂️‍➡️ 6. Testando as Rotas no Thunder Client (CRUD)

Com o servidor rodando, abra o **Thunder Client** no VS Code.

Você poderá testar:

-   **GET** → Buscar dados\
-   **POST** → Criar dados\
-   **PUT** → Atualizar dados\
-   **DELETE** → Remover dados

------------------------------------------------------------------------

## 📘 GET --- Listar todos itens da loja de informatica

Selecione **GET** e coloque a seguinte URL:

    http://localhost:3000/produtos

Clique em **Send** → Deve retornar uma lista de hardware.

------------------------------------------------------------------------

## ➕ POST --- Colocar um novo produto na loja

1.  Selecione **POST**
2.  URL:

```{=html}
<!-- -->
```
    http://localhost:3000/produtos

3.  Vá até a aba **Body**
4.  Escolha **JSON**
5.  Cole o modelo abaixo:

``` json
{
    "id": ,
    "nome": "",
    "preco": ,
    "created_at": "",
    "updated_at": ""
  }
```

Preencha os campos com os valores desejados.

Exemplo:

``` json
{
  {
    "id": 1,
    "nome": "Placa de Vídeo RTX 4070 12GB",
    "preco": 2999.9,
  }
}
```
O "create" e o "updated" vai automático, não precisa colocar

Clique em **Send** → Deve retornar o item criado.

------------------------------------------------------------------------

## 🏗️ PUT --- Atualizar um item existente

1.  Escolha **PUT**
2.  Coloque a URL seguindo o ID que deseja alterar:

```{=html}
<!-- -->
```
    http://localhost:3000/produtos/algum id

Exemplo:

    http://localhost:3000/produtos/2

3.  No corpo da requisição (**Body → JSON**), use o modelo:

``` json
{
    "id": ,
    "nome": "",
    "preco": ,
    "created_at": "",
    "updated_at": ""
  }
```

Basta preencher com os novos valores.

Clique em **Send** → O veículo será atualizado.

------------------------------------------------------------------------

## ✖️ DELETE --- Excluir um item

1.  Selecione **DELETE**
2.  Informe o ID que deseja remover na URL:

```{=html}
<!-- -->
```
    http://localhost:3000/produtos/algum id

Exemplo:

    http://localhost:3000/api/veiculos/4

Clique em **Send** → O registro será deletado.

------------------------------------------------------------------------

## ✔️ Conclusão

Agora você já consegue rodar o backend e testar todas as rotas no
Thunder Client.
