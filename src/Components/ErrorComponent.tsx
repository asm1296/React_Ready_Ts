import React from 'react';
import { IErrorComponentProps } from '../Interfaces/IProps'
import { IErrorComponentState } from '../Interfaces/IState'

class ErrorComponent extends React.Component<IErrorComponentProps,IErrorComponentState>{
    constructor(props:IErrorComponentProps){
        super(props);
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error:any){
        return{hasError:true}
    }

    render(){
        if(this.state.hasError===true){
            return(<h2>Something went Wrong</h2>)
        }
        else{
            return(this.props.children)
        }
    }
}

export default ErrorComponent;