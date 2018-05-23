import React, { Component } from 'react';
import { connect } from 'react-redux';
import { weedReportCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import WeedReportForm from './WeedReportForm';

class WeedReportCreate extends Component {
    onButtonPress() {
        const { client_id, type, address, latitude, longitude, notes, user } = this.props;

        this.props.weedReportCreate({ client_id, type, address, latitude, longitude, notes, user });
    }

    render() {
        console.log(this.props.weedReport);

        return (
            <Card>
                <WeedReportForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state.auth;
    const { client_id, type, address, latitude, longitude, notes } = state.weedReportForm;

    return { client_id, type, address, latitude, longitude, notes, user };
};

export default connect(mapStateToProps, {
    weedReportCreate
})(WeedReportCreate);