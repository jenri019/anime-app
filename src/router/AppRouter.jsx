import React from 'react'
import {
  RouterProvider,
} from "react-router-dom";
import { AppRoutes } from './AppRoutes';

const router = AppRoutes;

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
