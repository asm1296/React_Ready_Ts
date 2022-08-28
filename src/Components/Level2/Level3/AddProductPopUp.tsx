import React from 'react';
import ReactDom from 'react-dom';
import { IAddProductPopupState } from '../../../Interfaces/IState';
import { IAddProductPopupProps } from '../../../Interfaces/IProps';

import styles from './AddProductPopUp.module.scss';

const popupContainer = document.getElementById('popup-form');

class AddProductPopUp extends React.Component<IAddProductPopupProps,IAddProductPopupState>{
    newDiv: HTMLDivElement;
    nameRef: React.RefObject<HTMLInputElement>;
    priceRef: React.RefObject<HTMLInputElement>;
    descriptionRef: React.RefObject<HTMLInputElement>;
    constructor(props:IAddProductPopupProps){
        super(props);
        this.state={
            type:'',
            price:0,
            description:''
        }
        this.newDiv = document.createElement('div');
        this.nameRef = React.createRef();
        this.priceRef = React.createRef();
        this.descriptionRef = React.createRef();
    }

    componentDidMount(){
        popupContainer?.appendChild(this.newDiv);
    }
    componentWillUnmount(){
        popupContainer?.removeChild(this.newDiv);
    }

    addProductHandler=()=>{
        let newid = this.props.id+1;
        let newPrd = {id:newid,type:this.nameRef.current?.value,price:this.priceRef.current?.value,description:this.descriptionRef.current?.value}
        this.props.addProduct(newPrd);
        this.props.popupChange();
    }

    render(){
        return ReactDom.createPortal(
            <div className={styles.container}>
                <div className={styles.insideContainer}>
                    <h3>Add Product</h3>
                    <span onClick={this.props.popupChange}> X </span>
                    <label>Name : </label>
                    <input type='text' ref={this.nameRef} name='type'></input>
                    <label>Price : </label>
                    <input type='text' ref={this.priceRef} name='price'></input>
                    <label>Description : </label>
                    <input type='text' ref={this.descriptionRef} name='description'></input>
                    <button onClick={this.addProductHandler}>Add</button>
                </div>
            </div>
        ,this.newDiv,)
    }
}

export default AddProductPopUp;