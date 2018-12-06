import * as types from './mutations_types'
export default {
    [types.COUNT_LOCAL](state, data) {
        state.count += 1
        state.allMoney = state.count * data.money
    } ,
    [types.REDUCE_LOCAL](state, data) {
        state.count -= 1
        state.allMoney = state.count * data.money
    } ,
    [types.ISSHOW_LOCAl](state,params) {
        // console.log(state.params)
        state.isshow = !state.isshow
        // if(state.params == "显示" ) {
        //     state.params = "隐藏"
        // } else {
        //     state.params = "显示"
        // }
        state.params = state.params == '隐藏' ? '显示' : '隐藏'
        console.log(state.params)
    },
    [types.REDUCE_MONEY](state, dough) {
        state.allMoney = dough.money * state.count
    },
}