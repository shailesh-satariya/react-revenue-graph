import React, { Component } from "react";
import axios from "axios";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { campaignService } from "../services/campaignService";

class Campaigns extends Component {
    state: any = {
        campaigns: [],
        campaignsData: [],
        selectedCampaign: null
    };

    url = "http://5c3db915a9d04f0014a98a79.mockapi.io/campaigns";

    componentDidMount() {
        this.setState( { campaigns: campaignService.getCampaigns() } );

        axios.get( this.url ).then( ( response ) => {
            console.log( response );
            // handle success
            if( response && response.data ) {

                this.setState( { campaignsData: response.data } );
            }
        } );
    }

    selectCampaign = ( { currentTarget: input }: any ) => {
        this.setState( { selectedCampaign: input.value } );
    };

    render() {
        const { campaigns, campaignsData, selectedCampaign }: any = this.state;
        const campaign = selectedCampaign ? campaignsData.find( ( item: any ) => {
            return item.name = selectedCampaign;
        } ) : null;

        console.log( campaign );

        return (
            <div className={"p-3"}>
                <select className="form-control" onChange={this.selectCampaign}>
                    <option value=""/>
                    : ''

                    {campaigns.map( ( campaign: string ) => (
                        <option key={campaign} value={campaign}>
                            {campaign}
                        </option>
                    ) )}
                </select>
                {(campaign && Array.isArray( campaign.installs )) ?
                    <div className={"p-3"}>
                        <div className="title">Installs</div>
                        <LineChart width={600} height={300} data={campaign.installs}
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

export default Campaigns;