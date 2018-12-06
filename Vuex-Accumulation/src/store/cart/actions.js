import * as types from './mutations_types'
export default {
    change_count: ({
        commit
    },dough) => {
        commit(types.COUNT_LOCAL, dough);
    },
    change_isshow: ({
        commit
    },{params}) => {
        commit(types.ISSHOW_LOCAl,{params});
    },
    change_reduce: ({
        commit
    }, dough) => {
        commit(types.REDUCE_LOCAL, dough)
    },
    change_money: ({
        commit
    },dough) => {
        commit(types.REDUCE_MONEY,dough);
    },
}