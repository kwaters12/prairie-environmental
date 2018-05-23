import { Actions } from 'react-native-router-flux';

const API_URL = 'http://localhost:3000';

import {
    WEED_REPORT_UPDATE,
    WEED_REPORT_CREATE,
    WEED_REPORTS_FETCH_SUCCESS,
    WEED_REPORT_SAVE_SUCCESS
} from './types';

export const weedReportUpdate = ({ prop, value }) => {
    return {
        type: WEED_REPORT_UPDATE,
        payload: { prop, value }
    };
};

export const weedReportCreate = ({ client_id, type, address, latitude, longitude, notes, user }) => {
    const weedReport = { client_id, type, address, latitude, longitude, notes };

    return (dispatch) => {
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                "access-token": user.id_token,
                "token-type": "Bearer",
                "client": user.client,
                "expiry": user.expiry,
                "uid": user.uid
            },
            body: JSON.stringify({
                weed_report: weedReport
            })
        }

        return fetch(`${API_URL}/weed_reports`, config)
            .then(response =>
                response.json().then(weed_report => ({ weed_report, response }))
            ).then(({ weed_report, response }) => {
                console.log(weed_report)
                console.log(response)

            }).catch(err => console.log("Error: ", err))
    };
};

export const weedReportsFetch = () => {

    return (dispatch) => {
        // firebase.database().ref(`/users/${currentUser.uid}/weedReports`)
        //     .on('value', snapshot => {
        //         dispatch({ type: weedReportS_FETCH_SUCCESS, payload: snapshot.val() });
        //     });
    };
};

export const weedReportSave = ({ name, phone, shift, uid }) => {

    return (dispatch) => {
        // firebase.database().ref(`/users/${currentUser.uid}/weedReports/${uid}`)
        //     .set({ name, phone, shift })
        //     .then(() => {
        //         dispatch({ type: WEED_REPORT_SAVE_SUCCESS })
        //         Actions.weedReportList({ type: 'reset' })
        //     });
    }
};