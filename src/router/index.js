import Vue from "vue";
import VueRouter from "vue-router";
import Posteingang from '../views/Posteingang.vue';
import Drafts from '@/views/Drafts';
import Sent from '@/views/Sent';
import spam from '@/views/spam';
import Trash from '@/views/Trash';

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "posteingang",
        component: Posteingang
    },
    {
        path: "/drafts",
        name: "drafts",
        component: Drafts
    },
    {
        path: "/sent",
        name: "sent",
        component: Sent
    },
    {
        path: "/trash",
        name: "trash",
        component: Trash
    },
    {
        path: "/spam",
        name: "spam",
        component: spam
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;