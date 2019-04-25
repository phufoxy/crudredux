import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.dataEdit && this.props.dataEdit.id ? this.props.dataEdit.id : '',
            name: this.props.dataEdit && this.props.dataEdit.name ? this.props.dataEdit.name : '',
            age: this.props.dataEdit && this.props.dataEdit.age ? this.props.dataEdit.age : '',
            address: this.props.dataEdit && this.props.dataEdit.address ? this.props.dataEdit.address : ''
        }
        this.onChanger = this.onChanger.bind(this);
    }

    onChanger(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault();
        if (this.props.edit) {
            this.props.onUpdate(this.state);
            this.reset();
        } else {
            this.props.onAdd(this.state);
            this.reset();
        }
    }
    reset() {
        this.setState({
            name: '',
            age: '',
            address: '',
            edit: false
        })
    }
    render() {
        return (
            <Form onSubmit={this.onSubmit.bind(this)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        onChange={this.onChanger.bind(this)}
                        value={this.state.name}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Age"
                        name="age"
                        onChange={this.onChanger.bind(this)}
                        value={this.state.age}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Address"
                        name="address"
                        onChange={this.onChanger.bind(this)}
                        value={this.state.address}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default FormComponent;