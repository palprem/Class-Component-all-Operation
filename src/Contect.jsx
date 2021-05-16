import React from 'react';
class Contect extends React.Component{
    constructor(){
        super();
        this.state={
            message:'',
            fields:{},
            erroe:{},
            cityList:[
                {'name':'bangalore', 'id':1},
                {'name':'pune', 'id':2},
                {'name':'mumbai', 'id':3},
                {'name':'chennai', 'id':4},
                {'name':'delhi', 'id':5},
            ]
        }
    }
    rocessInput=(event)=>{
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        })
    }
    sendMassege = (event)=>{
        event.preventDefault();// to disable default bahaviour of from tag
        let formStatus = true;
        let error = this.state.errors;
        if(!this.state.fields.fname){
            error['nameError'] = 'pleaseenter your name!';
            formStatus=false;
        }
        if(!this.state.fields.mobile){
            error['nameError'] = 'pleaseenter your number!';
            formStatus=false;
        }
        this.setState({
            error:error
        })
        if(formStatus==true){
            alert('sucesses');
        }else{
            alert('fails');
        }
    }
    render(){
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                        <div className="col-md-6">
                            <h3 className="text-center text-success">ReactJs Form Validation</h3>
                            <form >
                                <div className="form-group">
                                    <label>Enter Name</label>
                                    <input type="text" className="form-control" name="fname" />
                                </div>
                                <div className="form-group">
                                    <label>Mobile No</label>
                                    <input type="number" className="form-control" name="mobile" />
                                </div>
                                <div className="form-group">
                                    <label>Email Id</label>
                                    <input type="email" className="form-control" name="email" />
                                </div>
                                <div className="form-group">
                                    <label>Choose city</label>
                                    <select name="city" className="form-control">
                                        <option value="">Choose City</option>
                                        {
                                            this.state.cityList.map((city, index)=>{
                                                return <option key={index} value={city.id}>{city.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <p>Term and Condition</p>
                                    <input type="checkbox" name='tnc' unChecked='checked' />
                                    <label className="text-primary">I am agree with term and conditions</label>
                                </div>
                                <div className="text-center">
                                    <button className="bn btn-primary m-3">Send Massege!</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
            </>
        )
    }
}
export default Contect;