import chalk from "chalk";
import prompt from "prompt";

const promptQRCode = [
    {
        name: "link",
        description :chalk.yellow.bold("Digite o link que deseja gerar o QR Code"),
    },

        {
            name: "type",
            description: chalk.yellow.bold("Escolha o tipo de QR Code (1 NOORMAL ou (2 - TERMINAL"),
            pattern: /^[1-2]+$/,
            message: chalk.red.italic("Selecione 1 ou 2"),
            required: true,
        
        }




];


export default promptQRCode;