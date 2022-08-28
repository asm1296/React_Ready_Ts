import React from 'react';
import { IAddProductSectionState } from '../../Interfaces/IState';
import { IAddProductsectionProps } from '../../Interfaces/IProps';
import AddProductPopUp from './Level3/AddProductPopUp';
import { connect } from 'react-redux';

import styles from  './AddProductSection.module.scss';

class AddProductSection extends React.Component<IAddProductsectionProps,IAddProductSectionState>{
    constructor(props:IAddProductsectionProps){
        super(props);
        this.state={
            openPopup : false,
            username : ''
        }
    }

    popUpHandler =()=>{
        this.setState({
            openPopup:!this.state.openPopup
        })
    }

    render(){
        return(
            <div>
                <div className={styles.container}>
                    {this.props.userName.length > 0 ? <h3>Hello {this.props.userName}</h3>:null}
                    <button onClick={this.popUpHandler}> ADD PRODUCT </button>
                    <h4>Available Products : {this.props.productCount}</h4>
                    {this.state.openPopup && <AddProductPopUp popupChange={this.popUpHandler} id={this.props.productCount} addProduct={this.props.addProduct}></AddProductPopUp>}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state:any){
    return{
        userName:state.userName
    }
}

export default connect(mapStateToProps)(AddProductSection);