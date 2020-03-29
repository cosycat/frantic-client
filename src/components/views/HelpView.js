import React, {Component} from 'react';
import AppContainer from "components/ui/AppContainer";
import {withRouter} from "react-router-dom";
import HelpWindow from "components/ui/HelpWindow";

class HelpView extends Component {
    render() {
        return (
            <AppContainer>
                <HelpWindow/>
            </AppContainer>
        );
    }
}

export default withRouter(HelpView);