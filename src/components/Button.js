import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
    /*
    //contextType aproach
    static  contextType = LanguageContext;
    render() {
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return <button className="ui button primary">{text}</button>;
    }*/

    //consumer aproach
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderColor(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language}) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderColor(color)}
            </ColorContext.Consumer>
        );
    }
}
/*Button.contextType = LanguageContext;*/ /*second method to use context */

export default Button;