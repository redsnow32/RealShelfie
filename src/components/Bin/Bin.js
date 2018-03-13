import React, { Component } from 'react';
import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Bin.css'
// import Header from '../Header/Header';

export default class Bin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editting: false,
            item: '',
            price: '',
            bin_id: '',
            shelf_id: ''
        }

    }
    componentWillMount() {

        const { id } = this.props.match.params
        console.log(id)
        axios.get(`/api/bin/${id}`).then(res => {
            console.log(res.data)
            res.data.map((item, i) => {
                this.setState({ item: item.bin_value, price: item.bin_price, bin_id: item.bin_id, shelf_id: item.shelf_id })
            })
        })
    }
    editting(e) {
        this.setState({ editting: !this.state.editting })
    }
    handleNameEdit(e) {
        this.setState({ item: e.target.value })
    }
    handlePriceEdit(e) {
        this.setState({ price: e.target.value })
    }
    handleSave(e) {
        let body = {
            item: this.state.item,
            price: this.state.price,
            bin_id: this.state.bin_id
        }

        axios.put(`/api/update_bin/${this.state.shelf_id}/${this.state.bin_id}`, body).then(res => {
            // /bin/update_bin/:shelf_id/:bin_id
            console.log(res.data)
            res.data.map((updated, i) => {
                this.setState({ editting: false, item: updated.bin_value, price: updated.bin_price })
            })

        })
    }
    handleDelete(e) {
        const { name, value } = e.target
        console.log(`${value}/${name}`)
        axios.delete(`/api/update_bin/${value}/${name}`).then(res => {
            console.log(res.data)
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="bin_inventory">
                <Header bin_id={this.props.match.params.id} />
                {
                    this.state.editting === false
                        ?
                        <div className="bin">
                            <h1 className="name">Name</h1>
                            <div className="nameProps" type="text"><p>{this.state.item}</p></div>
                            <h1 className="price">Price</h1>
                            <div className="priceProps" type="text"><p>${this.state.price}.00</p></div>
                            <button onClick={(e) => this.editting(e)}>Edit</button>
                            <button value={this.state.shelf_id} name={this.state.bin_id} onClick={(e) => this.handleDelete(e)}>Delete</button>
                        </div>
                        :
                        <div className="bin">
                            <h1 className="name">Name</h1>

                            <input className="nameProps" type="text" value={this.state.item} onChange={(e) => this.handleNameEdit(e)}></input>
                            <h1 className="price">Price</h1>

                            <input className="priceProps" type="text" value={+this.state.price} onChange={(e) => this.handlePriceEdit(e)}></input>
                            <button onClick={(e) => this.handleSave(e)}>Save</button>
                            <button value={this.state.shelf_id} name={this.state.bin_id} onClick={(e) => this.handleDelete(e)}>Delete</button>
                        </div>
                }
            </div>
        )
    }
}



//  <div className="">

//                         {/* <Link to="/shelf"> */}
//                             <div>
//                                 <h1 className="bin" onClick={(e) => this.shelvesHandleClick(e)}>Shelf A</h1>
//                                 <Link>value = "A" to={`/bin/A`}><h1>Shelf A</h1></Link>
//                             </div>
//                         {/* </Link> */}
//                         {/* <Link to="/shelf"> */}
//                             <div>
//                                 <h1 className="bin" value="B" onClick={(e) => this.shelvesHandleClick(e)}>Shelf B</h1>
//                             </div>
//                         {/* </Link> */}
//                         {/* <Link to="/shelf"> */}
//                             <div>
//                                 <h1 className="bin" value="C" onClick={(e) => this.shelvesHandleClick(e)}>Shelf C</h1>
//                             </div>
//                         {/* </Link> */}
//                         {/* <Link to="/shelf"> */}
//                             <div>
//                                 <h1 className="bin" value="D" onClick={(e) => this.shelvesHandleClick(e)}>Shelf D</h1>
//                             </div>
//                         {/* </Link> */}
//                     </div>
//                 </div>