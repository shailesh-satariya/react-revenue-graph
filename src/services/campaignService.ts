export class campaignService {
    static campaigns: string[] = [];

    static createCampaign = ( campaign: any ) => {
        if( campaignService.campaigns.indexOf( campaign ) === -1 ) {
            campaignService.campaigns.push( campaign );
        }
    }

    static getCampaigns = () => {
        return campaignService.campaigns;
    }
}