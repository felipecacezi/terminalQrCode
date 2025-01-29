import permittedCharacters from './utils/permittedChars.js';

async function handle() {
    let characteres = [];

    const passLength = process.env.PASSWORD_LENGTH;
    characteres = await permittedCharacters();
    return await generate(characteres, passLength);
}

async function generate(characteres, passLength) {
    let password = '';
    for (let i = 0; i < passLength; i++) {
        password += characteres[Math.floor(Math.random() * characteres.length)];
    }
    return password;
}

export default handle;