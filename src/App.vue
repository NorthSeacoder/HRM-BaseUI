<template>
  <div class="app">
        <!-- <yqg-nav-loading :is-requesting="showLoading" /> -->

        <b-layout
            :is-nav-open="isNavOpen"
            @nav-open-change="navOpenChange"
        >
            <div slot="header">
                <b-header @on-nav-toggle="toggleNav">
                    <div slot="center">
                        <h3>{{ $route.meta.pageTitle }}</h3>
                    </div>

                    <div slot="right">
                        <div v-if="isFetched">
                            <!-- <yqg-nav-popover v-if="isLogin">
                                <li class="user-name">
                                    {{ userName }}
                                </li>
                                <hr>
                                <li @click="showPreModifyModal">
                                    修改密码
                                </li>
                                <hr>
                                <li @click="logout">
                                    登出
                                </li>
                            </yqg-nav-popover> -->

                            <div class="login" @click="showLoginModal">
                                登录
                            </div>
                        </div>
                    </div>
                </b-header>
            </div>

            <div slot="side-left">
                <div v-if="isNavOpen && isLogin">
                    <b-nav-side :routes="routes" @toggle="toggleNav">
                        <div slot="nav-top">
                            <router-link :to="{name: 'index'}" class="logo">
                                HRM-Base-UI
                            </router-link>
                        </div>
                    </b-nav-side>
                </div>
            </div>

            <div slot="content">
                <div v-if="isFetched" class="container router-view-area">
                    <transition name="slide-fade" mode="out-in">
                        <router-view v-if="isFetched" />
                    </transition>
                </div>
            </div>
        </b-layout>
    </div>
</template>

<script>
import BaseUI from 'base-ui';
import Vue from 'vue'

import router from './router'
import routes from './routes'
import store from './store'
import './assets/style/main.scss';

Vue.use(BaseUI, {router, store});

export default {
    name: 'App',
    router,
    store,
    data() {
        return {
            toUrlBeforeLogin: '/',
            isNavOpen: true,
            isLogin:true,
            isFetched:true,
            routes
        };
    },
    methods: {
        navOpenChange(isNavOpen) {
            this.isNavOpen = isNavOpen;
        },

        toggleNav() {
            const vm = this;
            vm.isNavOpen = !vm.isNavOpen;
        },

        showLoginModal() {
            console.log('等待登录')
        },

        showPreModifyModal() {
            console.log('修改密码')
        },

        logout() {
            console.log('登出')
        },
    }
}
</script>

<style lang="scss" scoped>
</style>
