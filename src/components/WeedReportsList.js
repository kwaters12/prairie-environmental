import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Card, CardSection, Button } from './common';
// import { employeesFetch } from '../actions';
// import WeedReportsListItem from './WeedReportsListItem';

class WeedReportsList extends Component {
    // componentWillMount() {
    //     this.props.employeesFetch();

    //     this.createDataSource(this.props);
    // }

    // componentWillReceiveProps(nextProps) {
    //     this.createDataSource(nextProps);
    // }

    // createDataSource({ employees }) {
    //     const ds = new ListView.DataSource({
    //         rowHasChanged: (r1, r2) => r1 !== r2
    //     });

    //     this.dataSource = ds.cloneWithRows(employees);
    // }

    // renderRow(employee) {
    //     return <WeedReportsListItem employee={employee} />
    // }

    // render() {
    //     return (
    //         <ListView
    //             enableEmptySections
    //             dataSource={this.dataSource}
    //             renderRow={this.renderRow}
    //         />
    //     );
    // }
    render() {
        const { user } = this.props;

        return (
            <Card>
                <CardSection>
                    <Button>{user.email}</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading, user } = auth;

    return { email, password, error, loading, user };
};

export default connect(mapStateToProps, {})(WeedReportsList);