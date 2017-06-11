import React, {Component} from 'react';
import Wallets from './Wallets.js'
import {ApolloClient, createNetworkInterface, ApolloProvider} from 'react-apollo';
const networkInterface = createNetworkInterface({
    uri: 'http://127.0.0.1:8888/graphql.php'
});
const client = new ApolloClient({
    networkInterface: networkInterface
});

class WalletsContainer extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Wallets/>
            </ApolloProvider>
        );
    }
}

export default WalletsContainer;
