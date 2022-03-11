import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requireAuth: false }
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: { requireAuth: true }
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from,next) => {
  if (to.meta.requireAuth) {
    if (!JSON.parse(localStorage.getItem("vuex"))?.auth.token) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
})
export default router;