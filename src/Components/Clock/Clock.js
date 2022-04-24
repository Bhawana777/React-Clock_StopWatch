//import React, { useState } from 'react';
import React from 'react';
import { Link, Outlet } from "react-router-dom";
import "./Clock.css";

class Clock extends React.Component {
    state = {
        curTime: ""
    };

    componentDidMount() {
        this.getTime();
    }

    getTime = () => {
        var today = new Date(),

            curTime = today.getHours() + ':' + today.getMinutes();


        this.setState({ curTime });
    };

    render() {
        return (
            <><div className='main'>
                <h1>Clock </h1>
                <p className='time'> {this.state.curTime} </p>
                <div className='btn-main'>
                    <button className='btn'>
                        <Link
                            to="/"
                        >
                            Clock
                        </Link>
                    </button>
                    <button className='btn'>
                        <Link
                            to="/stopwatch"
                        >
                            Stopwatch
                        </Link>
                    </button>
                </div>
                </div>
                <Outlet />
            </>
        );
    }
}
    export default Clock;

