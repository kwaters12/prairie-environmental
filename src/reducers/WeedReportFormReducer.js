import {
    WEED_REPORT_UPDATE,
    WEED_REPORT_CREATE,
    WEED_REPORT_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    client_id: '', 
    type: '', 
    address: '', 
    latitude: '', 
    longitude: '', 
    notes: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        
        case WEED_REPORT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case WEED_REPORT_CREATE:
            return INITIAL_STATE;
        case WEED_REPORT_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};