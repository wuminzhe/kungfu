import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
import moment from 'moment';


export default {
    state: {
        tasks: null, // 系统内正在运行的tasks
        calendar: { //交易日等相关日期信息
            trading_day: moment().format('YYYYMMDD')
        },
        processStatus: null,
        accountSource: {}
    },
    actions,
    mutations,
    getters
}
