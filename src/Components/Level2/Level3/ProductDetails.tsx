import React from 'react';
import template from '../../../Template.png'

import { IProductDetailsProps } from '../../../Interfaces/IProps';
import { IProductDetailsState } from '../../../Interfaces/IState';

import styles from './ProductDetails.module.scss';

class ProductDetails extends React.Component<IProductDetailsProps,IProductDetailsState>{
    inputRef: React.RefObject<HTMLDivElement>;
    
    constructor(props:IProductDetailsProps){
        super(props);
        this.state={

        }
        this.inputRef = React.createRef();
    }

    removeThisProduct=()=>{
        this.props.removeProduct(this.props.productID);
    }

    componentDidMount(){
        if(this.props.focus){
            document.getElementById('focusable')?.focus();
        }
    }

    componentWillUnmount(){
        let count = this.props.productCount - 1;
        this.props.setProductCount(count);
    }

    render(){
        return(
            <div className={styles.card} id='focusable' tabIndex={0} ref={this.inputRef}>
                <img src={template} alt='template' />
                <div className={styles.container}>
                    <h2>{this.props.productName}</h2>
                    <h3>RS. {this.props.productPrice}</h3>
                    <h5>{this.props.productDescription}</h5>
                    <button>View Details</button>
                    <button onClick={this.removeThisProduct}>Remove Product</button>
                </div>
            </div>
        )
    }
}

export default ProductDetails;