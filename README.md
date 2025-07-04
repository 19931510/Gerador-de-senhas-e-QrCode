# Projeto QRCode & Gerador de Senhas

## Objetivo

Este projeto tem como objetivo fornecer uma ferramenta de linha de comando para duas funções principais:

- **Geração de QR Codes** a partir de links informados pelo usuário.
- **Geração de senhas seguras** de acordo com critérios definidos pelo usuário via variáveis de ambiente.

O projeto é ideal para quem deseja gerar rapidamente QR Codes para compartilhamento ou criar senhas fortes e personalizadas para uso em sistemas, cadastros e outros contextos que exigem segurança.

---

## O que foi feito

- **Menu interativo:** Ao iniciar o projeto, o usuário escolhe entre gerar um QR Code ou uma senha.
- **Geração de QR Code:** O usuário informa um link e o sistema gera o QR Code correspondente no terminal.
- **Geração de senha:** O sistema gera uma senha aleatória baseada nas opções configuradas no arquivo `.env` (letras maiúsculas, minúsculas, números, caracteres especiais e tamanho da senha).
- **Configuração por variáveis de ambiente:** O comportamento do gerador de senhas é totalmente configurável via arquivo `.env`.
- **Tratamento de erros:** O sistema informa caso nenhuma opção de caractere seja selecionada para a senha.
- **Código modular:** Separação clara entre prompts, serviços de QR Code e serviços de senha, facilitando manutenção e expansão.
- **Uso de bibliotecas populares:** Utilização de `prompt` para interação com o usuário, `qrcode-terminal` para geração de QR Codes e `dotenv` para gerenciamento de variáveis de ambiente.

---

## Como usar

1. **Clone o repositório e instale as dependências:**
   ```sh
   git clone <url-do-repositorio>
   cd projeto-qrcode
   npm install

2. Configure o arquivo .env na raiz do projeto:
   UPPERCASE_LETTERS=true
   LOWERCASE_LETTERS=true
   NUMBERS=true
   SPECIAL_CHARACTERS=true 
   PASSWORD_LENGTH=12


Siga as instruções no terminal para gerar QR Codes ou senhas.

#Estrutura do Projeto

src/index.js — Ponto de entrada, menu principal e integração dos serviços.
src/services/qr-code/ — Serviços relacionados à geração de QR Codes.
src/services/password/ — Serviços relacionados à geração de senhas.
src/prompts-schema/ — Schemas dos prompts utilizados para interação com o usuário.

#Tecnologias Utilizadas

Node.js
prompt
qrcode-terminal
dotenv
chalk

#Observações

Certifique-se de que o arquivo .env está na raiz do projeto e sem espaços antes/depois do =.
O projeto pode ser facilmente expandido para incluir novos tipos de ferramentas de linha de comando.
