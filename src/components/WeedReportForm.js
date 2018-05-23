import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { weedReportUpdate } from '../actions';
import { CardSection, Input } from './common';

class WeedReportForm extends Component {
    componentWillUnmount() {
        this.props.weedReportUpdate({ prop: 'client_id', value: '' });
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Client"
                        placeholder="Jane"
                        value={this.props.client_id}
                        onChangeText={value => this.props.weedReportUpdate({ prop: 'client_id', value })}
                    />
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { client_id, type, address, latitude, longitude, notes } = state.weedReportForm;

    return { client_id, type, address, latitude, longitude, notes };
};

export default connect(mapStateToProps, { weedReportUpdate })(WeedReportForm);