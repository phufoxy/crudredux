import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
class CardComponent extends Component {
    onDelete() {
        this.props.onDelete(this.props.data.id);
    }
    onEdit() {
        this.props.onEdit(this.props.data.id);
    }
    render() {
        return (
            <div className="col-lg-3">
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.data.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.data.age}</Card.Subtitle>
                        <Card.Text>
                            {this.props.data.address}
                        </Card.Text>
                        <Button variant="info" onClick={this.onEdit.bind(this)}>Edit</Button>
                        <Button variant="danger" onClick={this.onDelete.bind(this)}>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default CardComponent;