
import {RouteRecordRaw} from "vue-router";
import MainLayout from "@/layouts/DefaultLayout.vue";
import Top from "@/pages/Top.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: MainLayout,
        children: [
            {
                path: "",
                component: Top,
            },
        ],
    },
    // {
    //     path: "/:catchAll(.*)*",
    //     component: NotFound,
    // },
];

export default routes;