import React, { Component } from 'react';
import { CardComponent, FormComponent } from '../shared';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { requestStores, deleteStore, saveStore, editStore } from '../../actions/store';
import { connect } from 'react-redux';
import Loading from './Loading';
class HomePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
            dataEdit: {},
            edit: false
        };
    }
    componentDidMount() {
        this.props.requestStores();
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    onDelete(id) {
        this.props.deleteStore(id);
    }
    onAdd(data) {
        this.props.saveStore(data);
        this.setState({ show: false });
    }
    onEdit(id) {
        let item = [...this.props.stores].filter(item => item.id === id)
        if (item.length > 0) {
            this.setState({
                dataEdit: item[0],
                show: true,
                edit: true
            })
        }
    }
    onUpdate(data) {
        this.props.editStore(data);
        this.setState({
            show: false
        })

    }
    render() {

        if (this.props.fetching) {
            return <Loading></Loading>
        }
        return (
            <div className="b-table mt-5">
                <div className="container">
                    <div className="row">
                        {this.props.stores.map(data => (
                            <CardComponent key={data.id} data={data} onEdit={this.onEdit.bind(this)} onDelete={this.onDelete.bind(this)}></CardComponent>
                        ))}
                    </div>
                </div>
                <Button variant="primary" onClick={this.handleShow}>
                    Launch demo modal
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormComponent onUpdate={this.onUpdate.bind(this)} onAdd={this.onAdd.bind(this)} edit={this.state.edit} dataEdit={this.state.dataEdit}></FormComponent>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                 </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                 </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        stores: state.stores.store,
        fetching: state.stores.fetching
    }
}
export default connect(mapStateToProps, { requestStores, deleteStore, saveStore, editStore })(HomePage);