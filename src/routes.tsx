import GlobalLayout from "./pages/_layout";

import Index from "./pages/index";
import ProductsIndex from "./pages/products/index";
import Id from "./pages/products/[id]";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index />, index: true },
      { path: "/products", element: <ProductsIndex />, index: true },
      { path: "/products/:id", element: <Id /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/products" },
  { route: "/products/:id" },
];
