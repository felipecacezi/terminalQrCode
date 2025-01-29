import prompt from "prompt";
import promptSchemaQRCode from "../../propts-schema/promptSchemaQrCode.js";
import handle from "./handle.js";

async function createQrCode() {
    prompt.get(promptSchemaQRCode, handle);
    prompt.start();
}

export default createQrCode;