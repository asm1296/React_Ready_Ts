import { DO_LOGIN } from './ActionType';

export interface IAction {
    type : string;
    cred : {
        userName : string;
        password : string;
    }
}

const loginDetails = {
    userName : '',
    password : ''
}


export function loginReducer(initState=loginDetails,action:IAction){
    switch(action.type){
        case DO_LOGIN : return{
            ...initState,
            userName : action.cred.userName,
            password : action.cred.password
        }
        default : return{
            ...initState
        }
    }
}