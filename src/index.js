import prompt from "prompt";

import promptSchemaMain from "./propts-schema/promptSchemaMain.js";
import createPassword from "./services/password/create.js";
import createQRCode from "./services/qrcode/create.js";

//solicitar o que o usuario quer fazer - 1. Gerar QRCode 2.Gerar Senha segura
//se selecionar a ação 1 entra na função de gerar QRCode, pede o link e gera o QRCode no terminal
//se selecionar a ação 2 entra na função de gerar senha, pede o tamanho da senha e gera uma senha segura no terminal
async function main() {
    prompt.get(promptSchemaMain, async (err, choose) => {
      if (err) console.log(err);
  
      if (choose.select == 1) await createQRCode();
      if (choose.select == 2) await createPassword();
    });
  
    prompt.start();
}

main();