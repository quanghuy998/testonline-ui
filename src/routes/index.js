import Home from '~/pages/Home';
import Questions from '~/pages/Questions';
import Submissions from '~/pages/Submissions';
import Tests from '~/pages/Tests';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/tests', component: Tests },
    { path: '/questions', component: Questions },
    { path: '/submissions', component: Submissions },
];

export const privateRoutes = [];
