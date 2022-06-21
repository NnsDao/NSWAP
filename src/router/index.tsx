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
const Asset = React.lazy(() => import('@/pages/pool/asset/Index'));
const CreatePair = React.lazy(() => import('../pages/pool/createPair/Index'));
const Success = React.lazy(() => import('@/pages/swap/components/success/Index'));
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
      element: <Swap></Swap>,
    },
    {
      path: '/swap',
      element: <Swap></Swap>,
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
