/*
 * @Author: pengmeng@yangqianguan.com 
 * @Date: 2019-08-05 18:53:27 
 * @Last Modified by:   pengmeng@yangqianguan.com 
 * @Last Modified time: 2019-08-05 18:53:27 
 */


export default {
    data() {
        return {
            cond: {},
            defaultCond: {},
            records: [],

            fetched: false
        };
    },

    methods: {
        resetCond() {
            const vm = this;
            vm.cond = {...vm.defaultCond};
        },

        reset() {
            const vm = this;
            vm.resetCond();
            vm.fetched = false;
        },

        onReset() {
            const vm = this;
            vm.reset();
            vm.onRefresh();
        },

        onSearch(cond) {
            const vm = this;
            vm.cond = {...cond};
            vm.onRefresh();
        },

        onRefresh() {
            const vm = this;
            vm.list({...vm.cond});
        }
    }
};
