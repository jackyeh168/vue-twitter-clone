import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MessagePage from "../components/MessagePage.vue";
import NotificationsPage from "../components/NotifcationsPage.vue";
import ProfilePage from "../components/ProfilePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    iconClass: "fas fa-home",
    mainMenu: true,
  },
  {
    path: "/Explore",
    name: "Explore",
    component: HomeView,
    iconClass: "fas fa-search",
    mainMenu: true,
  },
  {
    path: "/Notifications",
    name: "Notifications",
    component: NotificationsPage,
    iconClass: "fas fa-bell",
    mainMenu: true,
  },
  {
    path: "/Messages",
    name: "Messages",
    component: MessagePage,
    iconClass: "fas fa-envelope",
    mainMenu: true,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: ProfilePage,
    iconClass: "fa-solid fa-user",
    mainMenu: false,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
