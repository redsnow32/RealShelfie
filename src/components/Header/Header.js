import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import('./Header.css')

export default function Header (props) {
        // console.log(this.props)
        const { shelf_id, bin_id } = props
        console.log(bin_id, shelf_id)
        if(shelf_id){
            return<div className="length">
                        <Link to="/">
                            <div className='word_two'>
                                <h1>Shelf {props.shelf_id}</h1>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="header_logo" >
                                <div className="hidden">
                                    <div className='Header_logo' >
                                        <div className='shelfie_logo'>
                                            <div className='logo'></div>
                                            <div className='shelfie'></div>
                                        </div>
                                    </div>
                                    <div className="square"></div>
                                </div>
                            </div>
                        </Link>
                    </div>
        }else if(bin_id){
            return<div className="length">
                    <Link to={`/bins/B`}>
                        <div className='word_two' >
                            <h1>Shelf {props.shelf_id}</h1>
                        </div>
                    </Link>
                  
                    <div className="bin_id">
                        <h1>Bin {props.bin_id}</h1>
                    </div>
                
                    <Link to="/">
                        <div className="header_logo" >
                            <div className="hidden">
                                <div className='Header_logo' >
                                    <div className='shelfie_logo'>
                                        <div className='logo'></div>
                                        <div className='shelfie'></div>
                                    </div>
                                </div>
                                <div className="square"></div>
                            </div>
                        </div>
                    </Link>
                </div>
        } else {
            return<div className="length">
                        <Link to="/">
                            <div className='word'>
                                <h1>SHELFIE</h1>
                            </div>
                        </Link>
                        <div className="header_logo" >
                            <div className="hidden">
                                <div className='Header_logo' >
                                    <div className='shelfie_logo'>
                                        <div className='logo'></div>
                                        <div className='shelfie'></div>
                                    </div>
                                </div>
                                <div className="square"></div>
                            </div>
                        </div>
                    </div>
}
        return (
            <div className="Header_container">
                <div className="length"></div>
               
            </div>

        )
    }
