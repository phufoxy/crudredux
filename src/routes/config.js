import { HomePage, AboutPage } from '../components/pages';
export default [
    {
        path: '/',
        exact: true,
        component: HomePage,
        key: 'home'
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage,
        key: 'about'
    },
]