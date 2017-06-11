import React from 'react';
import ReactDOM from 'react-dom';
import WalletsContainer from './WalletsContainer';
import TransactionsContainer from './TransactionsContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WalletsContainer />, document.getElementById('wallets'));
ReactDOM.render(<TransactionsContainer />, document.getElementById('transactions'));
registerServiceWorker();
