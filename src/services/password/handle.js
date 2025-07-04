async function permittedCharacters() {
    let permitted  = [];

    if (process.env.UPPERCASE_LETTERS === 'true') {
        permitted.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (process.env.LOWERCASE_LETTERS === 'true') {
        permitted.push(...'abcdefghijklmnopqrstuvwxyz');
    }
    if (process.env.NUMBERS === 'true') {
        permitted.push(...'0123456789');
    }
    if (process.env.SPECIAL_CHARACTERS === 'true') {
        permitted.push(...'!@#$%^&*()_+[]{}|;:,.<>?');
    }

    return permitted;
}

async function handle() {
    let password = '';    

    const passwordLength = Number(process.env.PASSWORD_LENGTH) || 8;
    const characters = await permittedCharacters();

    if (!characters.length) {
        throw new Error('Nenhum tipo de caractere permitido foi selecionado nas variáveis de ambiente.');
    }

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index];
    }
    return password;
}

export default handle;