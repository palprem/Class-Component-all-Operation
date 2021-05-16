import React, {setState} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import IMAGES from '../Img/index.js';

const user = [
    {'name':'Prem', 'gender':'Male', 'age':25, 'edu':'MCA', 'city':'Bangalore', 'pic':'first'},
    {'name':'Mohan', 'gender':'Male', 'age':45, 'edu':'BCA', 'city':'Dehli', 'pic':'second'},
    {'name':'Ganesh', 'gender':'Male', 'age':55, 'edu':'B.Sc', 'city':'Varanasi', 'pic':'third'},
    {'name':'Chetan', 'gender':'Male', 'age':35, 'edu':'MCA', 'city':'Bangalore', 'pic':'forth'},
    {'name':'Ravi', 'gender':'Male', 'age':25, 'edu':'MCA', 'city':'Chennai', 'pic':'fifth'},
    {'name':'Mohit', 'gender':'Male', 'age':15, 'edu':'BCA', 'city':'Bangalore', 'pic':'six'},
    {'name':'Manju', 'gender':'Female', 'age':65, 'edu':'MCA', 'city':'Pune', 'pic':'seven'},
];

const Hook5=()=>{
    const {index} = useParams();
    const userinfo = user[index];
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h3>Browser User</h3>
                    {
                        user.map((userName, index)=>{
                            return <p className="border p-2" key={index}>
                        <p><Link to={`/${index}/hooks5`}>{userName.name}</Link></p>
                            </p>
                        })
                    }
                </div>
                <div className="col-md-6 text-center">
                        <h1>Customer Informaion</h1>
                        <h2 className="text-success">About : {userinfo.name}</h2>
                        <table className="table table-bordered table-hover">
                            <tbody>
                                <tr>
                                    <th>Full Name</th>
                                    <td>{userinfo.name}</td>
                                </tr>
                                <tr>
                                    <th>Age</th>
                                    <td>{userinfo.age}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{userinfo.gender}</td>
                                </tr>
                                <tr>
                                    <th>Educaion</th>
                                    <td>{userinfo.edu}</td>
                                </tr>
                                <tr>
                                    <th>City</th>
                                    <td>{userinfo.city}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <div className="p-4">
                           <img className="img-fluid rounded-circle" src={IMAGES[userinfo.pic] } alt="" />
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Hook5;