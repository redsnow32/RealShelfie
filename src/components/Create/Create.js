import React, { Component } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import './Create.css';

export default class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: '',
            price: '0',
        }
    }
    handleEdit(e) {
        const { value, name } = e.target
        console.log(value)
        this.setState({ [name]: value })
    }

    handleSave(e) {
        const { id } = this.props.match.params
        let body = {
            item: this.state.item,
            price: this.state.price
        }
        axios.post(`api/create/${id}`, body).then(res => {
            console.log(res.data)
        })
    }
    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div className="Create">
                <Header path={this.props.match.location} />
                <div className="bin">
                    <h1 className="name">Name</h1>
                    <input className="nameProps" type="text" value={this.state.item} name="item" onChange={(e) => this.handleEdit(e)}></input>
                    <h1 className="price">Price</h1>
                    <input className="priceProps" type="text" value={this.state.price} name="price" onChange={(e) => this.handleEdit(e)}></input>
                    <button onClick={(e) => this.handleSave(e)}>+Add to Inventory</button>
                </div>
            </div>
        )
    }
}