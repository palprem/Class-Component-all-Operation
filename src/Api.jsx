import React from 'react';
import jsomData from './user.json';
import axios from 'axios';

class Api extends React.Component{
    constructor(){
        super();
        this.state={
            userListActive:[],
            userListInActive:[],
            carData:[]
        }
    }
    //fetch api data with axios
    getDataWithAxios = ()=>{
        axios.get('https://private-anon-1df431bd48-carsapi1.apiary-mock.com/cars').then(responce=>{
            this.setState({
                carData : responce.data
            })
            console.log(this.state.carData[0].model);
        })
    }
    getUserActive=()=>{
        var data = jsomData.filter(x=>x.status=='Active');
        this.setState({
            userListActive:data
        })
        // console.log(this.state.userListActive);
        // alert(jsomData.filter(x => x.status=='Active').length);
    }
    getUserInActive=()=>{
        var data = jsomData.filter(x=>x.status=='InActive');
        this.setState({
            userListInActive:data
        })
        // console.log(this.state.userListInActive);
        // alert(jsomData.filter(x => x.status=='InActive').length);
    }
    render(){
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>{jsomData.length} - Total Users</h1>
                        <button className="btn btn-primary" onClick={this.getUserActive}>Check Active</button>
                        <button className="btn btn-primary" onClick={this.getUserInActive}>Check InActive</button>
                        <button className="btn btn-primary" onClick={this.getDataWithAxios}>Fetch Data With Axios</button>
                        {/* filter and map function */}
                        {jsomData.map((val, index)=>{
                            return(<>
                                <div className='row border mb-2 text-center p-1' key={index}>
                                    <div className="col-md-2">{val.name}</div>
                                    <div className="col-md-2">{val.city}</div>
                                    <div className="col-md-2">{val.age}</div>
                                    <div className="col-md-2">{val.status}</div>
                                </div>
                            </>)
                        })}  
                        <h3>{this.state.userListActive.length} - Active Users</h3>
                        {this.state.userListActive.map((val, index)=>{
                            return(<>
                                <div className='row border mb-2 text-center p-1' key={index}>
                                    <div className="col-md-2">{val.name}</div>
                                    <div className="col-md-2">{val.city}</div>
                                    <div className="col-md-2">{val.age}</div>
                                    <div className="col-md-2">{val.status}</div>
                                </div>
                            </>)
                        })}  

                        <h3>{this.state.userListInActive.length} - InActive Users</h3>
                        {this.state.userListInActive.map((val, index)=>{
                            return(<>
                                <div className='row border mb-2 text-center p-1' key={index}>
                                    <div className="col-md-2">{val.name}</div>
                                    <div className="col-md-2">{val.city}</div>
                                    <div className="col-md-2">{val.age}</div>
                                    <div className="col-md-2">{val.status}</div>
                                </div>
                            </>)
                        })}
                         {/* foreach method */}
                         <h3>ForEach</h3>

                        {
                            this.state.userListActive.forEach(val=>{
                                console.log(val.name);
                                return(
                                    <>
                                        <h1>dsfhksdhk</h1>
                                        <pre>{JSON.stringify(val.name)}</pre>
                                        <div className="col-md-2">{val.name}</div>
                                        <div className="col-md-2">{val.city}</div>
                                        <div className="col-md-2">{val.age}</div>
                                        <div className="col-md-2">{val.status}</div>
                                    </>
                                )
                            })
                        }
                         <h3>AXIOSData</h3>

                        { this.state.carData.map((val, index)=>{
                            return(
                                <>
                                <div className='row border mb-2 text-center p-1' key={index}>
                                    <div className="col-md-2">{val.id}</div>
                                    <div className="col-md-2">{val.model}</div>
                                    <div className="col-md-2">{val.make}</div>
                                    <div className="col-md-2">{val.year}</div>
                                    <div className="col-md-2">{val.price}</div>
                                </div>                             
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Api;
