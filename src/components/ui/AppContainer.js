import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import MainMenuItem from "components/ui/MainMenuItem";
import {animated, Transition} from "react-spring/renderprops";

import 'styles/ui/AppContainer.scss'

/**
 * This is a container that holds most app contents,
 * and has the ability to show a help and back button.
 *
 * PROPS:
 * showHelp: bool               - whether to show the help button
 * showBack: bool               - whether to show the back button
 * backRoute: (optional) string - where the back button should point to, default: ".."
 */
class AppContainer extends Component {
    render() {
        const backButton =
            <div className="back-button">
                <MainMenuItem to={this.props.backRoute || '..'} style={{fontSize: "24px"}}>◀ Back to Menu</MainMenuItem>
            </div>;
        const helpButton =
            <div className="help-button">
                <MainMenuItem>?</MainMenuItem>
            </div>;

        const fromStyle = {
            opacity: 0
        };
        const enterStyle = {
            opacity: 1
        };
        const leaveStyle = {
            opacity: 0
        };

        return (
            <div className="app-container">
                {this.props.showBack && backButton}
                {this.props.showHelp && helpButton}
                <Transition
                    items={[this.props.children]}
                    from={fromStyle}
                    enter={enterStyle}
                    leave={leaveStyle}
                >
                    {item => style =>
                        <animated.div className="app-container" style={style}>{this.props.children}</animated.div>
                    }
                </Transition>
            </div>
        );
    }
}

export default withRouter(AppContainer);