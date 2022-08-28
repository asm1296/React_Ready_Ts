export interface IShoppingPageState{
    noOfProducts:number;
    newProduct:any;
    throwError:boolean;
}
export interface IProduct{
    id:number;
    type :string;
    price :string;
    description :string;
}

export interface IErrorComponentState{
    hasError:boolean;
}

export interface IAddProductSectionState{
    openPopup : boolean;
    username : string;
}

export interface IProductListSectionState{
    products: IProduct[];
}

export interface IAddProductPopupState{
    type:string;
    price:number;
    description:string
}

export interface IProductDetailsState{

}
