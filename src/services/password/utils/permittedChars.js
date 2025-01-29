async function permittedCharacters() {
    let permittedChars = [];
    
    if (process.env.UPPERCASE_LETTERS === "true") { 
        permittedChars.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"); 
    }

    if (process.env.LOWERCASE_LETTERS === "true") { 
        permittedChars.push(..."abcdefghijklmnopqrstuvwxyz"); 
    }

    if (process.env.NUMBERS === "true") {
        permittedChars.push(..."0123456789"); 
    }
    
    if (process.env.SPECIAL_CHARACTERS === "true") {
        permittedChars.push(..."!@#$%^&*()_+-=[]{}|;:,.<>?"); 
    }

    return permittedChars;
}

export default permittedCharacters;