import Home from '~/pages/Home';
import Questions from '~/pages/Questions';
import Submissions from '~/pages/Submissions';
import Tests from '~/pages/Tests';
import Login from '~/pages/Login';
import EmptyLayout from '~/components/Layout/EmptyLayout';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/tests', component: Tests },
    { path: '/questions', component: Questions },
    { path: '/submissions', component: Submissions },
    { path: '/login', component: Login, layout: EmptyLayout },
];

export const privateRoutes = [];
