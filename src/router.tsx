import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import CapsulePreview from "./pages/CapsulePreview";
import CapsuleView from "./pages/CapsuleView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/capsule/preview",
    element: <CapsulePreview />,
  },
  {
    path: "/capsule/:id",
    element: <CapsuleView />,
  },
]);
