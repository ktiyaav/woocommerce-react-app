/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import { Control, Errors, Form, LocalForm } from 'react-redux-form';
import { actions } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Col, Label, Row } from 'reactstrap';
import { postAddress } from '../utils/api';
import { connect } from 'react-redux';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


const mapDispatchToProps = (dispatch) => ({
    postAddress : (id, telnum, address1, address2, city, state, country, zip) => dispatch(postAddress(id, telnum, address1, address2, city, state, country, zip)),
    resetFeedbackForm : () => {dispatch(actions.reset('feedback'))}
})
const mapStateToProps = (state) => {
    return{
        cart: state.cart,
        login: state.login,
        address: state.address
    }
}

class AddAddress extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(values) {  
        console.log('Your Address Added! \n' + JSON.stringify(values));
        this.props.postAddress(this.props.login.user[0].id, values.telnum, values.address1, values.address2, values.city, values.state, values.country, values.zip);
    }
    
    render(){
        return(
            <div className="container below-header-bar">
                <div className='row'>
                    {this.props.address.errMess ? 
                    <div className='col-12'>
                        <h3>Error {this.props.address.errMess}</h3>
                    </div>
                    : null }
                    <div className='col-12'>
                        <h3>Add your address</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                    <LocalForm onSubmit={(values)=> this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="telnum" md={2}>Contact</Label>
                            <Col md={10}>
                                <Control.text model=".telnum" id="telnum" name="telnum"
                                    placeholder="Tel. Number"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                    }}
                                        />
                                <Errors
                                    className="text-danger"
                                    model=".telnum"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 numbers',
                                        maxLength: 'Must be 15 numbers or less',
                                        isNumber: 'Must be a number'
                                    }}
                                    />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="address1" md={2}>Address Line 1</Label>
                            <Col md={10}>
                                <Control.text model=".address1" id="address1" name="address1"
                                    placeholder="Address Line one"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                        />
                                <Errors
                                    className="text-danger"
                                    model=".address1"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 numbers',
                                        maxLength: 'Must be 15 numbers or less'
                                    }}
                                    />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="address2" md={2}>Address Line 2</Label>
                            <Col md={10}>
                                <Control.text model=".address2" id="address2" name="address2"
                                    placeholder="Address Line two"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                        />
                                <Errors
                                    className="text-danger"
                                    model=".address2"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 numbers',
                                        maxLength: 'Must be 15 numbers or less'
                                    }}
                                    />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="city" md={2}>City</Label>
                            <Col md={10}>
                                <Control.text model=".city" id="city" name="city"
                                    placeholder="City"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                        />
                                <Errors
                                    className="text-danger"
                                    model=".city"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 numbers',
                                        maxLength: 'Must be 15 numbers or less'
                                    }}
                                    />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="state" md={2}>State</Label>
                            <Col md={10}>
                                <Control.text model=".state" id="state" name="state"
                                    placeholder="State"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                        />
                                <Errors
                                    className="text-danger"
                                    model=".state"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 numbers',
                                        maxLength: 'Must be 15 numbers or less'
                                    }}
                                    />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="country" md={2}>Country</Label>
                            <Col md={10}>
                                <Control.text model=".country" id="country" name="country"
                                    placeholder="Country"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                        />
                                <Errors
                                    className="text-danger"
                                    model=".country"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 numbers',
                                        maxLength: 'Must be 15 numbers or less'
                                    }}
                                    />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="zip" md={2}>Post Code</Label>
                            <Col md={10}>
                                <Control.text model=".zip" id="zip" name="zip"
                                    placeholder="500032"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                    }}
                                        />
                                <Errors
                                    className="text-danger"
                                    model=".zip"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 numbers',
                                        maxLength: 'Must be 15 numbers or less',
                                        isNumber: 'Please provide valid Post Code'
                                    }}
                                    />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10, offset: 2}}>
                                <Button type="submit" color="primary">
                                Add Address
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                    </div>
                </div>
                <div className="space-large"></div>
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddAddress);