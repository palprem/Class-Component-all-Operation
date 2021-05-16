import React from 'react';

class State extends React.Component{
    constructor(){
        super();
        this.state={
            itemList:[{'name':'Maggi','price':250, 'quty':10}],
            newName:'',
            newprice:'',
            newquty:'',
            // message:''
        }
    }
    processName=(event)=>{
        this.setState({
            // ...this.state,
            [event.target.name]:[event.target.value]
        })
    }

    Save=()=>{
        var newItem = {'name':this.state.newName, 'price':this.state.newprice, 'quty':this.state.newquty}
        console.log(newItem);
        this.state.itemList = this.state.itemList.concat(newItem);
        this.setState({
            itemList:this.state.itemList,
            newName:'',
            newprice:'',
            newquty:''
    });
    }
    deleteItem=(id)=>{
        var delIem = this.state.itemList.filter((val, index)=>{
            return index!=id;
        });
        this.setState({
            itemList:delIem
        });
    }
    DeleteAllItem=()=>{
        this.setState({
            itemList:[]
        });        
    }
    
    render(){
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h1 className="text-success text-center">New item</h1>
                        <div className="form-group">
                            <label>Item Name</label>
                            <input type="text" name="newName" className="form-control" onChange={this.processName} />
                        </div>
                        <div className="form-group">
                            <label>Item Price</label>
                            <input type="number" name='newprice' className="form-control" onChange={this.processName} />
                        </div>
                        <div className="form-group">
                            <label>Item Quantity</label>
                            <input type="number" name='newquty' className="form-control" onChange={this.processName}/>
                        </div>
                        <button className="btn btn-primary btn-block" onClick={this.Save}>Save Item</button>
                    </div>
                    <div className="col-md-9">
                    <h1 className="text-success " > Avalable Item: {this.state.itemList.length}</h1>
                    {
                        this.state.itemList.map((val, index)=>{
                            return(
                                <>
                                <div className='row border mb-2 text-center p-1' key={index}>
                                    <div className="col-md-2">{val.name}</div>
                                    <div className="col-md-2">{val.price}</div>
                                    <div className="col-md-2">{val.quty}</div>
                                    <div className="col-md-2"><button className="btn btn-danger btn-sm" onClick={()=>this.deleteItem(index)}>Delete</button></div>
                                </div>
                                </>
                            )
                        })
                    }
                    <div className="col-md-2"><button className="btn btn-danger btn-sm" onClick={this.DeleteAllItem}>DeleteAllItem</button></div>
                </div>
            </div>

            </div>
                            
            </>
        )
    }
}
export default State;



















