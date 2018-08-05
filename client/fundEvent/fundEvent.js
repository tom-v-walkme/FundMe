import React, {Component} from 'react';
import {FundEvents} from '../../imports/api/fundEvents';
import {withTracker} from 'meteor/react-meteor-data';
import FundEventHeader from "./fundEventHeader";
import FundEventBar from "./fundEventBar";
import FundEventImage from "./funcEventImage";
import FundEventGeneralText from "./fundEventGeneralText";
import FundEventDonate from "./fundEventDonate";

class FundEvent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <p>{this.props.fundEvent && this.props.fundEvent.associationName}</p>
                <FundEventHeader />
                <br/>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <FundEventBar/>
                            </td>
                            <td>
                                <FundEventImage/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <FundEventGeneralText />

                <br/>
                <br/>
                <p>{this.props.fundEvent && this.props.fundEvent.name}</p>
                <FundEventDonate/>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        fundEvent: FundEvents.findOne({_id: 'GLMZHZPEWfmrnmz3p'}),
    };
})(FundEvent);