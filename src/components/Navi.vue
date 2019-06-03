<template>
    <div class="header">
        <a-row>
            <a-col :xs="{ span:24 }" :sm="{ span: 24 }" :md="{ span:16, offset:4 }" :lg="{ span:12, offset:6 }" :xl="{ span: 12, offset: 6 }" :xxl="{ span: 12, offset: 6 }">
                <a-menu
                    v-model="current"
                    mode="horizontal"
                    :theme="theme"
                >
                    <a-menu-item key="home" @click="go('home')">
                        <a-icon type="home" /> Home
                    </a-menu-item>
                    <a-menu-item key="edit" @click="go('write')">
                        <a-icon type="edit" /> Write
                    </a-menu-item>
                    <a-menu-item key="book" @click="notOk">
                        <a-icon type="book" />Articles
                    </a-menu-item>
                    <a-menu-item key="setting" @click="go('setting', true)">
                        <a-icon type="setting" /> Setting
                    </a-menu-item>
                    <a-menu-item key="login">
                        <router-link to="/DateWithYou/login">
                            <a-icon type="login"/> Login
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="bg-colors" @click="$emit('change-bg')">
                        <a-icon type="bg-colors" /> ChangeBG
                    </a-menu-item>
                    <a-menu-item key="theme">
                        <a-switch
                            defaultChecked
                            @change="changeTheme"
                            checkedChildren="light"
                            unCheckedChildren="light"
                        />
                    </a-menu-item>
                </a-menu>
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'navi',
    data () {
        return {
            theme: 'light',
            current: ['home'],
        };
    },
    methods: {
        changeTheme(checked) {
            this.theme = checked ? 'light' : 'dark';
        },
        go(where, isLogin) {
            if (isLogin) {
                this.isLogin(where);
            } else {
                this.$router.push({ path: '/DateWithYou/' + where });
            }
        },
        isLogin(where) {
            if (this.$store.getters['USER/USER_IDENTIFY'] !== 1) {
                this.$message.warning('Please Login!');
            } else {
                this.$router.push({ path: '/DateWithYou/' + where });
            };
        },
        notOk() {
            this.$message.warning('The Page is not Completed!');
        },
    },
};
</script>
<style scoped>
    .header{
        background: #fff;
        border-bottom: 1px solid #f1f1f1;
        color: #909090;
    }
</style>
