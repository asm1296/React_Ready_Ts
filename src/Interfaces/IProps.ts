import React from "react";

export interface IShoppingPageProps{
    
};

export interface IErrorComponentProps{

};

export interface IAddProductsectionProps{
    productCount:number;
    addProduct:any;
    userName : string;
}

export interface IProductListSectionProps{
    className:any
    setProductCount : any;
    newPrd:any;
    throwError:boolean;
}

export interface IAddProductPopupProps{
    popupChange: any;
    id:number;
    addProduct:any;

}

export interface IProductDetailsProps{
    focus:boolean;
    removeProduct:any;
    setProductCount:any;
    productCount:number;
    productID:number;
    productName:string;
    productPrice:string;
    productDescription:string;
}

export interface ILoginPageProps{
    loginActionCreater : any;
}

export interface ISampleProps{
    name:string,
    age:number
};

export type SampleState = {
    education?:string,      // ? indicates optional parameter
    colleages : {
        collegeName:string,
        studentCount:number
    }[], // specifies array of object having two variable
    degrees: 'BSc' | 'BCom' | 'BMM',
    children: React.ReactNode      // to accept children as React comp.
    handleClick: ()=>void          // eventHandler as props - function which doesn't return anything
    inputChange:(event:React.ChangeEvent<HTMLInputElement>) => void // dealing with event
    clickEvent:(event:React.MouseEvent<HTMLButtonElement>) => void,
    styles:React.CSSProperties,     // when passing styles as props
}

