import React, { Component } from 'react';

class Book extends Component{
    constructor(){
        super();
        this.state={
            bookmark:'',
            mybooks:['java','php','python']
        }
    }
    render(){
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className=" text-center text-success">Book List using State Management</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className=" text-center text-success">Available Books</h3>
                        <div className="row">
                            {
                                this.state.mybooks.map((val, index)=>{
                                    return(
                                        <>
                                        <div className="col-md-4 form-group" key={index}>
                                            <p className=" form-control">{val}</p>
                                        </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Book;