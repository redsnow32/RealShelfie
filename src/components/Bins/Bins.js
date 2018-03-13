import React, { Component } from 'react';
import Header from '../Header/Header';
import Create from '../Create/Create'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Bins.css'


export default class Bins extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shelf: [],
            selected: {},
            create: false
        }
    }
    componentDidMount() {
        console.log(this.props.match.params)
        const { id } = this.props.match.params
        axios.get(`/api/bins/${id}`).then(res => {
            console.log(res.data)
            this.setState({ shelf: res.data })

        })
    }
    shelvesHandleBin(e) {
        console.log(e)
        this.setState({ selected: e })
    }
    addBin(e) {
        console.log(e.target)
    }
    render() {
        console.log(this.state.shelf)
        let bins = this.state.shelf.sort((a, b) => a.bin_id - b.bin_id).map((bin, i) => {
            const { bin_id, id, shelf_id, bin_price, bin_value } = bin
            if (bin.bin_value !== null) {
                return <div className="bins" value={bin} key={i} onClick={(e) => this.shelvesHandleBin({ selected: bin.bin_id })}><Link name="A" to={`/bin/${shelf_id}${bin_id}`}><h1>Bin {bin.bin_id}</h1></Link></div>
            }
            return <div className="nobin" key={i} onClick={(e) => this.addBin(e)}><Link to={`/create/${shelf_id}${bin_id}`}><h1>+ Add inventory to bin</h1></Link></div>


        })
        return (
            <div className="Bins">
                <Header shelf_id={this.props.match.params.id} />
                <div className='bin_inventory'>
                    {bins}
                </div>
            </div>
        )
    }
}