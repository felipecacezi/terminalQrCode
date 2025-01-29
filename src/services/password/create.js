import handle from './handle.js';

async function createPassword() {
    const password = await handle();
    console.log(`O password gerado foi: ${password}`);
}

export default createPassword;