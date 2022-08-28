import React from 'react';
import { IShoppingPageProps } from '../Interfaces/IProps';
import { IShoppingPageState } from '../Interfaces/IState';
import ErrorComponent from './ErrorComponent';
import AddProductSection from './Level2/AddProductSection';
import ProductListSection from './Level2/ProductListSection';

import styles from './ShoppingPage.module.scss';

class ShoppingPage extends React.Component<IShoppingPageProps,IShoppingPageState>{
    constructor(props:IShoppingPageProps){
        super(props);
        this.state={
            noOfProducts:0,
            newProduct:null,
            throwError:false
        }
    }

     changeProductCount=(no:number)=>{
        this.setState({
            noOfProducts:no
        },()=>(console.log(`Product count has been changed to ${this.state.noOfProducts}`)))
    }

    addProduct = (prd:any)=>{
        if(prd.type === ''){
            this.setState({
                throwError:true
            })
        }
        else{
            this.setState({
                newProduct:prd
            },()=>(console.log(this.state.newProduct)))
        }
    }

    render(){
        return(
            <div className={styles.container}>
                <AddProductSection productCount={this.state.noOfProducts} addProduct={this.addProduct}></AddProductSection>
                <ErrorComponent>
                    <ProductListSection className={styles.itemTwo} setProductCount={this.changeProductCount} newPrd={this.state.newProduct} throwError={this.state.throwError}></ProductListSection>
                </ErrorComponent>            
            </div>
        )
    }
}

export default ShoppingPage;