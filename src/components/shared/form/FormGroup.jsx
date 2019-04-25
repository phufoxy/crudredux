import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class FormGroup extends Component {
    onChange(event) {
        this.props.onChanger(event);
    }
    render() {

        return (
            <Form.Group controlId="formBasicEmail">
                <Form.Label>{this.props.data.title}</Form.Label>
                <Form.Control
                    type={this.props.data.type}
                    placeholder={this.props.data.placeholder}
                    name={this.props.data.name}
                    value={this.props.data.value}
                    onChange={this.onChange.bind(this)}
                />
            </Form.Group>
        );
    }
}

export default FormGroup;