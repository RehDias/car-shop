# Car Shop <img src="https://github.com/user-attachments/assets/f4d94c8a-0047-4d26-90c7-f153e150c82d" alt="image" width="60"/>

## Sobre

O **Car Shop** é uma API desenvolvida para gerenciar uma concessionária de veículos, aplicando os princípios de **Programação Orientada a Objetos (POO)**. A API permite o armazenamento e a manipulação de informações sobre veículos em um banco de dados **MongoDB**, proporcionando um sistema robusto para lidar com dados de maneira eficiente.

Este projeto foi desenvolvido enquanto eu aprendia os fundamentos de POO, consolidando conceitos de organização e estruturação de código em TypeScript.

## Funcionalidades

- **Cadastro de Veículos**: Adicione novos veículos à concessionária.
- **Consulta de Veículos**: Pesquise veículos cadastrados no sistema.
- **Atualização de Veículos**: Modifique as informações de veículos já existentes.
- **Remoção de Veículos**: Exclua veículos do sistema.
- **Validações**: Implementação de validações utilizando a biblioteca **zod** para garantir a integridade dos dados.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem de programação utilizada para garantir tipagem estática e um desenvolvimento mais seguro.
- **MongoDB**: Banco de dados NoSQL para armazenar as informações dos veículos.
- **Mongoose**: Biblioteca de modelagem de dados para MongoDB.
- **Express**: Framework web para construção da API.
- **Zod**: Biblioteca utilizada para validação de esquemas.
- **Docker**: Usado para garantir a consistência do ambiente de desenvolvimento.
- **docker-compose**: Facilita a orquestração dos containers Docker, fornecidos pela Trybe.
- **Mocha, Chai e Sinon**: Ferramentas de teste para garantir a qualidade e confiabilidade da aplicação.

## Como Executar

### Pré-requisitos

- **Docker** e **docker-compose**: Certifique-se de que ambas as ferramentas estão instaladas.

### Passo a Passo

1. Clone o repositório:

    ```bash
    git clone https://github.com/SeuUsuario/car-shop.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd car-shop
    ```

3. Inicie a aplicação com Docker:

    ```bash
    docker-compose up
    ```

4. Acesse a API localmente e comece a fazer requisições para gerenciar os veículos da concessionária.

## Estrutura do Projeto

- **src/**: Contém todo o código-fonte da aplicação.
  - **controllers/**: Gerencia as requisições e respostas da API.
  - **models/**: Modelos do MongoDB usando Mongoose.
  - **routes/**: Definição das rotas para cada recurso da API.
  - **services/**: Regras de negócio e lógica de manipulação dos dados.
  - **tests/**: Contém os testes utilizando **Mocha**, **Chai** e **Sinon**.

## Testes

Para executar os testes unitários, utilize o seguinte comando:

```bash
npm test
```

Isso rodará os testes implementados com **Mocha**, **Chai** e **Sinon**, garantindo que todas as funcionalidades da API estejam funcionando corretamente.

<h3>Aplicação</h3>

https://user-images.githubusercontent.com/91297277/202186695-e3ad3e3f-ca1b-417b-b2a7-17024a744a34.mp4
