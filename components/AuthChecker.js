import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { setAuthenticatedUser } from '../actions';

class AuthChecker extends React.Component {
    componentDidMount() {
        const { setAuthenticatedUser } = this.props;

        AsyncStorage.getItem('@PESStore:user')
            .then((response) => {
                const { data, id_token, expiry, client } = JSON.parse(response);
                let user = data;

                user.id_token = id_token;
                user.expiry = expiry;
                user.client = client;

                setAuthenticatedUser(user);

                Actions.main();
            })
            .catch(err => Actions.auth());
    }

    render() {
        if (isLoggedIn) {
            return this.props.children
        } else {
            return null
        }
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading, user } = auth;

    return { email, password, error, loading, user };
};

export default connect(mapStateToProps, {
    setAuthenticatedUser
})(AuthChecker)