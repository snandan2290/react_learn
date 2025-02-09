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

// Lazy loading componenets
// const LoginComp = lazy(() => import("../layout/LoginComp.js"));
const LoginComp = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("../layout/LoginComp")), 2000);
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
    element: <MainDashBoardComp></MainDashBoardComp>,
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
        ],
      },
    ],
  },
]);

export default router;
