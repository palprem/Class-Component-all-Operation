import React from 'react';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            pass:'',
            message:''
        }
    }
    inpuData=(event)=>{
        this.setState({
            ...this.state,
            [event.target.name]:[event.target.value],
        })
    }
    submitData=()=>{
        if((this.state.email!='') && (this.state.pass!='')){
            //email and password given by user to create a session storage
            sessionStorage.setItem('id','123');
            sessionStorage.setItem('name','ramesh');
            this.setState({message:"Success : Please wait Rediracting........"});
            window.location.reload();
        }else{
            this.setState({message:'Fail : Invalid Try Again!.....'})
        }
    }
    render(){
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div className="p-3 border">
                            <h3 className="text-center">Login</h3>
                            <p className="text-center text-danger">{this.state.message}</p>
                            <div className="form-group">
                                <label>Email Id</label>
                                <input type="email" name="email" onChange={this.inpuData} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="pass" onChange={this.inpuData} className="form-control" />
                            </div>
                            <button className="btn btn-danger btn-block" onClick={this.submitData} >Login</button>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            </>
        )
    }
}
export default Login;