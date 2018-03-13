import React, { Component } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom'
import './Home.css'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
        }
    }
    shelvesHandleClick(value) {
        let val = value.id
        let { id } = this.state
        console.log(id)
        this.setState({ id: val })
        console.log(id)
        this.props.history.push(`/bins/${val}`)
    }

    render() {
        return (
            <div>
                <Header />
                <div className="shelf_container">

                    <div className="">
                        <div className="shelves" value={this.state.id} name="A" onClick={(e) => this.shelvesHandleClick({ id: 'A' })}>
                            <Link name="A" to={`/bins/${'A'}`}><h1>Shelf A</h1></Link>
                        </div>
                        <div className="shelves" value={this.state.id} name="B" onClick={(e) => this.shelvesHandleClick({ id: 'B' })}>
                            <Link to={`/bins/${'B'}`}><h1>Shelf B</h1></Link>
                        </div>

                        <div className="shelves" value={this.state.id} name="C" onClick={(e) => this.shelvesHandleClick({ id: 'C' })}>
                            <Link to={`/bins/${'C'}`}><h1>Shelf C</h1></Link>
                        </div>
                        <div className="shelves" value={this.state.id} name="D" onClick={(e) => this.shelvesHandleClick({ id: 'D' })}>
                            <Link to={`/bins/${'D'}`}><h1>Shelf D</h1></Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}