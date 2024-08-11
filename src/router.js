import {createWebHistory, createRouter} from 'vue-router'
import AboutUs from "./pages/AboutUs.vue"
import Services from "./pages/Services.vue"
import Work from "./pages/Work.vue";
import News from "@/pages/News.vue";
import Contacts from "@/pages/Contacts.vue";
import Main from "@/pages/Main.vue";


export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Main},
        {path: '/about-us', component: AboutUs},
        {path: '/services', component: Services},
        {path: '/work', component: Work},
        {path: '/news', component: News},
        {path: '/contacts', component: Contacts},
    ]
})