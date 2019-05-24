import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';

import store from './store/store';
import history from './config/history';
import App from './components/app'
import { en } from './assets/i18n/en';
import { rs } from './assets/i18n/rs';
import { getLang, changeLang } from './utils/helper/local-storage';

addLocaleData([en, rs]);

if (getLang() == null) {
    changeLang('en'); //default en
} else {
    changeLang(getLang())
}

class Reant extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            languageFile: en
        }
    }

    componentDidMount() {
        this.setState({
            languageFile: this.getLangFileFromLocale(getLang())
        })
    }


    componentWillReceiveProps(props) {
        this.setState({
            languageFile: this.getLangFileFromLocale(getLang())
        })
    }

    getLangFileFromLocale(locale) {
        switch (locale) {
            case 'en':
                return en;
            case 'rs':
                return rs;
        }
    }

    render() {
        const { languageFile } = this.state;

        return (
            <IntlProvider
                locale={languageFile.locale}
                messages={languageFile.messages} >
                <BrowserRouter>
                    <Router history={history}>
                        <App />
                    </Router>
                </BrowserRouter>
            </IntlProvider>
        )
    }
}
const mapStateToProps = state => {
    return {
        lang: state.lang
    }
}

Reant = connect(mapStateToProps, null)(Reant);


ReactDOM.render(
    <Provider store={store} >
        <Reant />
    </Provider>,
    document.getElementById('root')
);