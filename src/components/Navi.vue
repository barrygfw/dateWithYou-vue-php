<template>
    <div class="header">
        <a-row>
            <a-col :xs="{ span:24 }" :sm="{ span: 24 }" :md="{ span:16, offset:4 }" :lg="{ span:12, offset:6 }" :xl="{ span: 12, offset: 6 }" :xxl="{ span: 12, offset: 6 }">
                <a-menu
                    v-model="current"
                    mode="horizontal"
                    :theme="theme"
                >
                    <a-menu-item key="home">
                        <router-link to="/DateWithYou/home">
                            <a-icon type="home" /> Home
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="drag">
                        <a-icon type="drag" /> Point
                    </a-menu-item>
                    <a-menu-item key="edit">
                        <router-link to="/DateWithYou/write">
                            <a-icon type="edit" /> Write
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="book">
                        <a-icon type="book" /> Article
                    </a-menu-item>
                    <a-menu-item key="setting">
                        <router-link to="/DateWithYou/setting">
                            <a-icon type="setting" /> Setting
                        </router-link>
                    </a-menu-item>
                    <a-menu-item key="login">
                        <router-link to="/DateWithYou/login">
                            <a-icon type="login"/> Login
                        </router-link>
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
