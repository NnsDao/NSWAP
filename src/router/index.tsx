import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Aboutnswap from '../pages/aboutnswap/Index';
import Home from '../pages/Home';
import Pool from '../pages/pool/Index';
import Vote from '../pages/vote/Index';
const Swap = React.lazy(() => import('../pages/swap/Index'));
// const Pool = React.lazy(() => import('../pages/pool/Index'));
// const Aboutnswap = React.lazy(() => import('../pages/aboutnswap/Index'));
// const Vote = React.lazy(() => import('../pages/vote/Index'));
const Import = React.lazy(
  () => import('../pages/swap/components/selectToken/components/importDialog/components/Index')
);
const ConfirmSwap = React.lazy(() => import('../pages/swap/components/selectToken/components/confirmSwap/Index'));
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
      element: <ConfirmSwap></ConfirmSwap>,
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
      path: '/pool',
      element: <Pool></Pool>,
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
      path: '/aboutnswap',
      element: <Aboutnswap></Aboutnswap>,
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
      path: '/vote',
      element: <Vote></Vote>,
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
  ];
  return useRoutes(routes);
}
