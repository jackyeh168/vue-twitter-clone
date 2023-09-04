import ProfilePage from "../components/ProfilePage.vue";

const routes2 = [
  {
    path: "/Profile",
    name: "Profile",
    component: ProfilePage,
    iconClass: "fa-solid fa-user",
    mainMenu: true,
  },
];

const router2 = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes2,
});

export { router2 };
