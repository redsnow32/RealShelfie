import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div calssName='bin_inventory'>
                    <Link to="/bin">
                        <div className="bin" onClick={this.shelvesHandleClick}>
                            <h1>Shelf A</h1>
                        </div>
                    </Link>
                    <Link to="/bin">
                        <div className="bin" onClick={this.shelvesHandleClick}>
                            <h1>Shelf B</h1>
                        </div>
                    </Link>
                    <Link to="/bin">
                        <div className="bin" onClick={this.shelvesHandleClick}>
                            <h1>Shelf C</h1>
                        </div>
                    </Link>
                    <Link to="/bin">
                        <div className="bin" onClick={this.shelvesHandleClick}>
                            <h1>Shelf D</h1>
                        </div>
                    </Link>

                </div>
            </div>
        )
    }
}