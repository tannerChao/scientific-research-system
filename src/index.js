import 'babel-polyfill';         //支持async/await
import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';

import registerServiceWorker from './registerServiceWorker';

// 国际化
import 'moment/locale/zh-cn';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'sass/main.scss'
import store from './store'
import { Provider } from 'mobx-react'
import { BrowserRouter } from './router'



class App extends React.Component {

    render(){
        return (
            <LocaleProvider locale={zh_CN}>
                <Provider {...store}>
                    <BrowserRouter />
                </Provider>
            </LocaleProvider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

//server worker功能
registerServiceWorker()
