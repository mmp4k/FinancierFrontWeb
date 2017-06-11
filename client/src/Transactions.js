import React from 'react';
import {gql, graphql} from 'react-apollo';

const TransactionsData = gql`
    query GetTransactions {
        wallet(id:"6a7cfb06-f5d0-4a43-888e-510323d4d82b") {
            profit
            valueOfInvestment
            currentValue
            transactions {
                currentValue
                priceSingleAsset
                date
                name
                profit
                valueOfInvestment
                boughtAssets
                
            }
        }
    }
`;

const Transactions = ({data: {loading, error, wallet}}) => {
    if (loading || error) {
        return null;
    }

    console.log(wallet.transactions);

    const transactionItems = wallet.transactions.map((transaction, num) =>

        <tr key={transaction.date}>
            <td>
                Transaction #{num+1}: {transaction.name}
            </td>
            <td>
                {transaction.date}
            </td>
            <td>
                {transaction.boughtAssets} ({transaction.priceSingleAsset} PLN)
            </td>
            <td>
                {transaction.valueOfInvestment} PLN
            </td>
            <td>
                5 PLN
            </td>
            <td style={{color: '#9f3a38'}}>
                -{((1-transaction.profit)*100).toFixed(2)}%
            </td>
            <td>
                {transaction.currentValue} PLN
            </td>
        </tr>
    );
/*
    const walletItems = user.wallets.map((wallet) =>
        <tr key={wallet.id}>
            <td>
                <h4 className="ui image header">
                    <img
                        src="https://www.udoo.org/wp-content/themes/flex/framework/assets/fonts/lineicons/png/wallet.png"
                        className="ui mini rounded image" alt="Wallet icon"/>
                    <div className="content">
                        IKZE
                        <div className="sub header">ETFSP500, ETFW20L, ETFDAX
                        </div>
                    </div>
                </h4>
            </td>
            <td>
                {wallet.valueOfInvestment} PLN
            </td>
            <td style={{color: '#9f3a38'}}>
                -{((1-wallet.profit)*100).toFixed(2)}%
            </td>
            <td>
                {wallet.currentValue} PLN
            </td>
            <td className="selectable center aligned ">
                <a href="#transactions" style={{'color': '#4183C4'}}>{wallet.transactions.length}</a>
            </td>
        </tr>
    );
*/
    return (
        <table className="ui table">
            <thead>
            <tr>
                <th>
                    <h4 className="ui image header">
                        <img src="https://www.udoo.org/wp-content/themes/flex/framework/assets/fonts/lineicons/png/wallet.png"
                             className="ui mini rounded image" />
                            <div className="content">
                                IKZE
                                <div className="sub header">ETFSP500</div>
                            </div>
                    </h4>
                </th>
                <th>Date</th>
                <th>Bought assets</th>
                <th>Invested</th>
                <th>Commissions</th>
                <th>Profit</th>
                <th>Current value</th>
            </tr>
            </thead>
            <tbody>
            {transactionItems}
            </tbody>
            <tfoot className="full-width">
            <tr>
                <th />
                <th />
                <th />
                <th> {wallet.valueOfInvestment} PLN</th>
                <th>15 PLN</th>
                <th style={{color: '#9f3a38'}}>
                    -{((1-wallet.profit)*100).toFixed(2)}%
                </th>

                <th> {wallet.currentValue} PLN</th>
            </tr>
            <tr>
                <th className="form mini ui">
                    <input placeholder="What you bought i.e. ETFSP500"/>
                </th>
                <th className="form mini ui">
                    <input placeholder="When you bought assets"/>
                </th>
                <th className="form mini ui">
                    <input placeholder="# of assets"/>
                </th>
                <th className="form mini ui">
                    <input placeholder="Spent money"/>
                </th>
                <th className="form mini ui">
                    <input placeholder="Commissions"/>
                </th>
                <th colSpan="2">
                    <div className="ui mini  primary labeled icon button" style={{float:'right'}}>
                        <i className="plus icon" /> Add Transaction
                    </div>
                </th>
            </tr>
            </tfoot>
        </table>
    );

}

export default graphql(TransactionsData)(Transactions);
