let CONTRACT_ADDR : string;
let EXPLORER : string;

if(!process.env.NEXT_PUBLIC_CONTRACTADDR){
    throw new Error("process.env.NEXT_PUBLIC_CONTRACTADDR is undefined")
}else{
    CONTRACT_ADDR = process.env.NEXT_PUBLIC_CONTRACTADDR;
}

if(!process.env.NEXT_PUBLIC_EXPLORER){
    throw new Error("process.env.NEXT_PUBLIC_EXPLORER is undefined")
}else{
    EXPLORER = process.env.NEXT_PUBLIC_EXPLORER;
}


export {CONTRACT_ADDR, EXPLORER}
