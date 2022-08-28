import { DO_LOGIN } from './ActionType';

export function loginActionCreater(userName:string,password:string){
    return({
        type:DO_LOGIN,
        cred : {
            userName : userName,
            password : password
        }
    })
}