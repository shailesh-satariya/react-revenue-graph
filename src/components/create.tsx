import React, { Component } from "react";
import { campaignService } from "../services/campaignService";

class Create extends Component {
    state: any = {
        value: '',
        message: null
    };

    saveCampaign = () => {
        const value = this.state.value.trim();

        if( value.length ) {
            campaignService.createCampaign( value );
            this.setState( { value: '', message: 'Campaign created' } );

            setTimeout( () => {
                this.setState( { message: null } );
            }, 3000 );
        }

    };

    onChange = ( { currentTarget: input }: any ) => {
        this.setState( { value: input.value } );
    };

    render() {
        const { value, message }: any = this.state;

        return (
            <div className="p-3">
                <div className="form-group">
                    <input type="text" className="form-control" value={this.state.value} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.saveCampaign}>Save</button>
                </div>
                {
                    message ?
                        <div className="alert alert-success" role="alert">
                            {message}
                        </div> : null
                }
            </div>
        );
    }
}

export default Create;