import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../modules/Users/views/Dashboard.vue';
import UsersView from '../modules/Users/views/UsersView.vue';
import Settings from '../modules/Users/views/Settings.vue';
import Reports from '../modules/Users/views/Reports.vue';
import Profile from '../modules/Users/views/Profile.vue';
import LoginPage from '../modules/Users/views/LoginPage.vue';
import UserProfile from '../modules/Users/views/UserProfile.vue';
import Accounts from '../modules/Users/components/Accounts.vue';
import Business from '../modules/Users/components/Business.vue';
import UserInfo from '../modules/Users/components/UserInfo.vue';
const routes = [
  { path: '/', name: 'LoginPage', component: LoginPage ,meta: { title: 'Loginpage' }},
  { path: '/Users', name: 'UsersView', component: UsersView ,meta: { title: 'Users And Accounts'}},
  { path: '/dashboard', name: 'Dashboard', component: Dashboard,meta: { title: 'Dashboard' }},
  { path: '/profile', name: 'Profile', component: Profile ,meta: { title: 'Profile' }  },
  { path: '/reports', name: 'Reports', component: Reports ,meta: { title: 'Reports' } },
  { path: '/settings', name: 'Settings', component: Settings ,meta: { title: 'Settings' }  },
  { path: '/userprofile', name: 'UserProfile', component: UserProfile ,meta: { title: 'UserProfile' } },
  { path: '/accounts', name: 'Accounts', component: Accounts ,meta: { title: 'Accounts' } },
  { path: '/business', name: 'Business', component: Business ,meta: { title: 'Business' } },
  { path: '/user-info', name: 'UserInfo', component: UserInfo ,meta: { title: 'UserInfo' } },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default Title';
  next();
});

export default router