import React, { Component } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

class Overview extends Component {
    state: any = {
        installs: [],
        revenue: []
    };

    url = "http://5c3db915a9d04f0014a98a79.mockapi.io/overview";

    componentDidMount() {
        axios.get( this.url ).then( ( response ) => {
            if( response && response.data ) {
                const { revenue, installs } = response.data;
                this.setState( { revenue, installs } );
            }
        } );
    }

    render() {
        const { revenue, installs }: any = this.state;

        return (
            <div className={"d-flex p-3"}>

                {Array.isArray( installs ) ?
                    <div>
                        <div className="title">Installs</div>
                        <LineChart width={600} height={300} data={installs}
                             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="day"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend/>
                            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }}/>

                        </LineChart>
                    </div> : null}
                    {Array.isArray( revenue ) ?
                        <div>
                        <div className="title">Revenue</div>
                        <LineChart width={600} height={300} data={revenue}
                                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="day"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend/>
                            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }}/>
                        </LineChart></div> : null}
            </div>
        );
    }
}

export default Overview;