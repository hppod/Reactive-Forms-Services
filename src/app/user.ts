export class User{

    id: number;
    email: string;
    //SENHAS SÃO UM UNICO OBJETO
    password:{
        pwd: string;
        confirmPwd: string;
    };
    gender: string;
    terms: boolean;

    constructor(values: Object = {}){
        //INICIALIZAÇÃO DO CONSTRUTOR
        Object.assign(this, values);
    }
}