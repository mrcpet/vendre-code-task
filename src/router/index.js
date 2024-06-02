import { createRouter, createWebHashHistory } from "vue-router";
import EmployeeView from "../views/EmployeeView.vue";
import PageTwoView from "@/views/PageTwoView.vue";

const routes = [
  {
    path: "/",
    name: "EmployeeView",
    component: EmployeeView,
  },
  {
    path: "/2",
    name: "PageTwoView",
    component: PageTwoView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
