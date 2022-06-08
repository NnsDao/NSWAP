import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Faqs from '../pages/faqs/Index';
import Home from '../pages/Home';
import Pool from '../pages/pool/Index';
import Vote from '../pages/vote/Index';
const Swap = React.lazy(() => import('../pages/swap/Index'));
// const Pool = React.lazy(() => import('../pages/pool/Index'));
// const faqs = React.lazy(() => import('../pages/faqs/Index'));
// const Vote = React.lazy(() => import('../pages/vote/Index'));
// const Import = React.lazy(
//   () => import('../pages/swap/components/selectToken/components/importDialog/components/Index')
// );
const Exact = React.lazy(() => import('../pages/swap/components/exactToken/Index'));
const ConfirmSwap = React.lazy(() => import('../pages/swap/components/confirmSwap/Index'));
export default function AppRouter() {
  const routes: RouteObject[] = [
    {
      path: '/home',
      element: <Home />,
      children: [
        // { index: true, element: <Home /> },
        // {
        //   path: "/courses",
        //   element: <Courses />,
        //   children: [
        //     { index: true, element: <CoursesIndex /> },
        //     { path: "/courses/:id", element: <Course /> },
        //   ],
        // },
        // { path: "*", element: <NoMatch /> },
      ],
    },
    {
      path: '/',
      element: <Pool></Pool>,
    },
    {
      path: '/pool',
      element: <Pool></Pool>,
    },
    {
      path: '/faqs',
      element: <Faqs></Faqs>,
    },
    {
      path: '/vote',
      element: <Vote></Vote>,
    },
  ];
  return useRoutes(routes);
}
