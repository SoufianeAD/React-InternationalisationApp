import React from "react";

const Context = React.createContext('english');

export class LanguageStore extends  React.Component { /*this is called named export*/

    state = {language: 'english'};

    onLanguageChange = (language) => {
        this.setState({ language });
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;