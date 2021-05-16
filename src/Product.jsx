import React from 'react';

class Product extends React.Component{
    productList=[];
    constructor(){
        super();
        this.productList=['apple','mango'];
        this.state={
            myproduct:['apple', 'mango', 'banana'],
            pagetitle:'Class Based Component'
        }
    }
    render(){
        return(
            <>
            <div className="container">
            <h2>{this.state.pagetitle}</h2>
            {
                this.productList.map((proval, index)=>{
                    return <p key={index} >{proval}</p>
                })
            }
            <h2>Data From State</h2>
            {
                this.state.myproduct.map((proval, index)=>{
                    return <p key={index} >{proval}</p>
                })
            }
            </div>
            </>
        )
    }
}
export default Product;