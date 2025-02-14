import { createBrowserRouter } from "react-router-dom";
// import LoginComp from "../layout/LoginComp";
import PageNotFoundComp from "../layout/PageNotFoundComp";
import ClassComp from "../componenets/ClassComp";
import MainDashBoardComp from "../layout/MainDashBoardComp";
import ParentComp from "../componenets/ParentComp";
import MyImagesComp from "../componenets/MyImagesComp";
import { lazy, Suspense } from "react";
import ReactHookComp from "../Hooks/ReactHookComp";
import UseStateComp from "../Hooks/UseStateComp";
import UseEffectComp from "../Hooks/UseEffectComp";
import ProductDashComp from "../CRUD/ProductDashComp";
import ProductEditComp from "../CRUD/ProductEditComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProtectRouteComp from "./ProtectRouteComp";
import UseRefHookComp from "../Hooks/UseRefHookComp";
import UseContextComp from "../Hooks/UseContextComp";

// Lazy loading componenets
// const LoginComp = lazy(() => import("../layout/LoginComp"));
const LoginComp = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("../layout/LoginComp")), 500);
    })
);

const router = createBrowserRouter([
  {
    // default rouiting
    path: "",
    element: <LoginComp></LoginComp>,
  },
  {
    // Named routed
    path: "login",
    // element: <LoginComp></LoginComp>,
    element: (
      <Suspense fallback={<div>Loading....</div>}>
        <LoginComp />
      </Suspense>
    ),
  },
  {
    // Unknow or wildcard roting
    path: "*",
    element: <PageNotFoundComp></PageNotFoundComp>,
  },
  {
    // child routing
    path: "maindashboard",
    // element: <MainDashBoardComp></MainDashBoardComp>,
    element: (
      <ProtectRouteComp component={MainDashBoardComp}></ProtectRouteComp>
    ),
    children: [
      {
        //default child route
        path: "",
        element: <ParentComp></ParentComp>,
      },
      {
        path: "parent",
        element: <ParentComp></ParentComp>,
      },
      {
        path: "images",
        element: <MyImagesComp></MyImagesComp>,
      },
      {
        // parameytered routing
        path: "classcomp/:id",
        element: <ClassComp></ClassComp>,
      },
      {
        path: "hook",
        element: <ReactHookComp></ReactHookComp>,
        children: [
          {
            path: "state",
            element: <UseStateComp></UseStateComp>,
          },
          {
            path: "effect",
            element: <UseEffectComp></UseEffectComp>,
          },
          {
            path: "ref",
            element: <UseRefHookComp></UseRefHookComp>,
          },
          {
            path: "context",
            element: <UseContextComp></UseContextComp>,
          },
        ],
      },
      {
        path: "crud",
        element: <ProductDashComp></ProductDashComp>,
      },
      {
        path: "productAdd",
        element: <ProductAddComp></ProductAddComp>,
      },
      {
        path: "productEdit/:id",
        element: <ProductEditComp></ProductEditComp>,
      },
    ],
  },
]);

export default router;
