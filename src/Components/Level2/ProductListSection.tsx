import React from 'react';
import { IProductListSectionProps } from '../../Interfaces/IProps';
import { IProductListSectionState } from '../../Interfaces/IState';
import ProductDetails from './Level3/ProductDetails';
import style from './ProductListSection.module.scss';

class ProductListSection extends React.Component<IProductListSectionProps,IProductListSectionState>{
    constructor(props:IProductListSectionProps){
        super(props);
        this.state={
            products : [
                {
                id:1,
                type : "T-Shirts",
                price : "599",
                description : "With M,L,XL,XXL Size"
            },
                {
                id:2,
                type : "Shoes",
                price : "999",
                description : "With 7,8,9,10,11,12 Size"
            },
                {
                id:3,
                type : "Trousers",
                price : "799",
                description : "With M,L,XL,XXL Size"
            },
                {
                id:4,
                type : "Shirts",
                price : "799",
                description : "With M,L,XL,XXL Size"
            }
            ]

        }
    }

    componentDidMount(){
        this.props.setProductCount(this.state.products.length);
    }

    removeProduct=(id:number)=>{
        let newProducts = this.state.products;
        let index = newProducts.findIndex((prd)=>{
            return prd.id===id;
        })
        newProducts.splice(index,1);
        this.setState({
            products:newProducts
        },()=>console.log(this.state.products))
    }

    componentDidUpdate(){
        if(this.props.throwError){
            throw new Error();
        }
    }

    render(){
        const {products} = this.state;
        let newProductComponent = products.filter(product=>product === this.state.products[0]).map(prd=><ProductDetails focus={true} removeProduct={this.removeProduct} setProductCount={this.props.setProductCount} productCount={this.state.products.length} productID={prd.id} productName={prd.type} productPrice={prd.price} productDescription={prd.description}></ProductDetails>)
        let anotherProductComponent = products.filter(product=> product !== this.state.products[0]).map(prd=><ProductDetails focus={false} removeProduct={this.removeProduct} setProductCount={this.props.setProductCount} productCount={this.state.products.length} productID={prd.id} productName={prd.type} productPrice={prd.price} productDescription={prd.description}></ProductDetails>)
        return(
            <div className={style.container}>
                {newProductComponent}
                {anotherProductComponent}
            </div>
        )
    }
}

export default ProductListSection;