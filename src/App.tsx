import React, {Component, Fragment} from 'react';

/** Components */
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Table from './components/Table/Table';
import PageTitleWithExportAndSetting from './components/TableHeader/PageTitleWithExportAndSetting';
import {navBarConfig} from './assets/navBarConfig';

// import UserAuth from './components/UserAuth/UserAuth'; <UserAuth/>


export class App extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <Main>
                    <PageTitleWithExportAndSetting title={navBarConfig.menu[0].title}/>
                    <Table/>
                </Main>
            </Fragment>

        )
    }
}

export default App;
