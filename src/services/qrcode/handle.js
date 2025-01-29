import qrcode from 'qrcode-terminal';

async function handle(err, res){
    if(err){
        console.log(err);
        return;
    }

    if (!res.link) {
        console.log("Link inválido.");
        return;
    }

    const qrcodeType = res.type == 1 ?? false;
    qrcode.generate(res.link, {small: qrcodeType});
}

export default handle;