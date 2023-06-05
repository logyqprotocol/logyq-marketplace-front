let CONTRACT_ADDR : string;

if(!process.env.NEXT_PUBLIC_CONTRACTADDR){
    throw new Error("process.env.NEXT_PUBLIC_CONTRACTADDR is undefined")
}else{
    CONTRACT_ADDR = process.env.NEXT_PUBLIC_CONTRACTADDR;
}


export {CONTRACT_ADDR}
