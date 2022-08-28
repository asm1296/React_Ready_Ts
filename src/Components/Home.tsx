import React,{useEffect, useState, useReducer, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';

type userState = {
    userId:number,
    id:number,
    title:string,
    body:string
}[];

type stateType = {
    firstCounter:number
}

// with this action type, dispatch reset give error with missing value
// so if we do value as optional, then it gives error in reducer at line no 30-32 saying value can
// be undefined
// type actionType = {
//     type:string,
//     value?:number
// }
// Giving type as expected template literals 
type primaryAction = {   
    type:'incrementFirst' | 'decrementFirst', 
    value:number
}
type resetAction = {
    type:'reset'
}
// depending on type we will have action type - this is called discriminated unions
type correctActionType = primaryAction | resetAction

let initialState:stateType = {
    firstCounter : 0
}

const reducer = (state:stateType, action:correctActionType)=>{
    switch(action.type){
        case 'incrementFirst':
            return {...state, firstCounter:state.firstCounter + action.value}
        case 'decrementFirst':
            return {...state, firstCounter:state.firstCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

type homeProps = {
    count:number
}
type homeGenericProps<T> = {
    list:T[]
}
type homeState = {
    message:string
}

export class Home_class extends Component<homeProps,homeState>{

}
export class Home_class_withoutProp extends Component<{},homeState>{

}

export class Home_class_withoutState extends Component<homeProps>{

}

// Generic Type implementation where <T extends string> is constraint.
// Generics are used when we reuse our class or function with multiple types instead of one fixed type
// <T extends string> or <T extends string | number> or <T extends {id:number}> --> object with id prop compulsory
export class Home_class_withGeneric<T extends string | number> extends Component<homeGenericProps<T>,homeState>{
    
}

const Home =()=>{
    const [data,setData] = useState<userState | null>(null);
    //const [data,setData] = useState<userState>([] as userState); Type assertion

    const [countObj,dispatch] =  useReducer(reducer, initialState);

    useEffect(()=>{
        initializeData();
    },[])

    const fetchData = () =>{
        return fetch('https://jsonplaceholder.typicode.com/posts',{
           method:"GET"
       })
        .then((response)=>{
           if(response){
            return response.json();
           }
        }).catch((error)=>{
            console.log(error);
        })
    }

    const initializeData = ()=>{
        fetchData().then((response)=>{
            if(response){
                setData(response);
            }
        })
    }

    return(
        <div>
            <h3>React Store Posts</h3>
            <Carousel>
            {data?.map(item=>{
                return <Carousel.Item style={{width:'100%', padding:'20px auto',height:'250px', backgroundColor:'black'}}>
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </Carousel.Caption>
              </Carousel.Item>
            })}
            </Carousel>
            <h3>first Count - {countObj.firstCounter}</h3>
           <button onClick={()=>{dispatch({type:'incrementFirst', value:1})}}>Increment First</button>
           <button onClick={()=>{dispatch({type:'decrementFirst', value:1})}}>Decrement First</button>
           <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
        </div>
    )

}

export default Home;