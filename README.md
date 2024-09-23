# Formulário de Cadastro de Clientes

Este projeto foi desenvolvido para praticar o uso de **React** com **TypeScript**, utilizando integração com as APIs **ViaCEP** e **BuscaCNPJ** da Receita Federal.

## Tecnologias Utilizadas

## Tecnologias Utilizadas

- **React + TypeScript**: para a criação da interface e manipulação de estados.
- **React Hook Form**: gerenciamento de formulários de maneira otimizada.
- **Zod**: para validação de schemas dentro do React Hook Form.
- **Tailwind CSS**: para estilização rápida e eficiente.
- **react-select**: componente customizado de dropdown para seleção de dados.
- **Lucide**: conjunto de ícones leves e modernos.
- **Axios**: para realizar as requisições HTTP às APIs.
- **React Router DOM**: para gerenciamento de rotas dentro da aplicação.
- **Input Mask**: para aplicar máscaras nos campos de entrada, como CPF e CNPJ.

## Funcionalidades Adicionadas na Aplicação

- Validação de formulários usando **Zod** integrada ao **React Hook Form**.
- Consulta de endereço através da API **ViaCEP**.
- Consulta de CNPJ através da API **BuscaCNPJ** da Receita Federal.
- Interface amigável e responsiva construída com **Tailwind CSS**.

## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
1. Clone o repositório:
   ```bash
   npm install
1. Clone o repositório:
   ```bash
   npm run dev

-----------------------------------------------------------
## Como usar a plataforma

Após iniciar o projeto, por padrão o tipo de cliente **Pessoa Jurídica** estará selecionado. Se você optar por **Pessoa Física**, alguns campos serão ocultados automaticamente, e aparecerão os dados como CPF e Nome.

### Funcionalidades:

- **Campo de CNPJ**: Ao preencher o campo de CNPJ, o sistema fará uma busca automática usando a API **BuscaCNPJ** e preencherá os demais campos do formulário relacionados aos dados da empresa.
  
- **Campo de CEP**: Além de ser preenchido automaticamente quando o CNPJ é consultado, o CEP pode ser editado manualmente. Ao digitar um novo CEP e remover o foco do campo, a aplicação fará uma nova busca utilizando a API **ViaCEP** para atualizar o endereço correspondente.

Essas funcionalidades visam melhorar a usabilidade e agilizar o processo de cadastro, garantindo que os dados sejam preenchidos automaticamente sempre que possível.
