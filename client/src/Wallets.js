import React from 'react';
import {gql, graphql} from 'react-apollo';

const WalletData = gql`
    query GetWallets {
        user(email:"m@pilsniak.com") {
            wallets {
                id
                currentValue
                profit
                valueOfInvestment
                transactions {
                    name
                }
            }
        }
    }
`;

const Wallets = ({data: {loading, error, user}}) => {
    if (loading || error) {
        return null;
    }

    console.log(user.wallets);

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

    return (
            <table className="ui table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Invested</th>
                    <th>Profit</th>
                    <th>Current value</th>
                    <th className="center aligned ">Transactions</th>
                </tr>
                </thead>

                <tbody>
                {walletItems}
                </tbody>

                <tfoot className="full-width">
                <tr>
                    <th colSpan="4">
                        <form className="ui mini form">
                            <input placeholder="Name, i.e retirement"/>
                        </form>
                    </th>
                    <th>
                        <div className="ui mini primary labeled icon button" style={{float: 'right'}}>
                            <i className="plus icon" /> Add Wallet
                        </div>
                    </th>
                </tr>
                </tfoot>
            </table>
    );

}

export default graphql(WalletData)(Wallets);
