import Home from "@/pages/Home";
import List from "@/pages/List";
import AddCard from "@/pages/AddCard"
import VueRouter from "vue-router";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/list", name: "list", component: List },
  { path: "/add", name: "addCard", component: AddCard },
];

const router = new VueRouter({
  routes,
});

export default router;
