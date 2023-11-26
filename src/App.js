import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import History from "./components/History";
import Services from "./components/Services";
import Design from "./components/Design";
import Contact from "./components/Contact";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: {
          crumb: () => "Home",
        },
      },
      {
        path: "about",
        element: <About />,
        handle: {
          crumb: () => "About",
        },
        children: [
          {
            path: "team",
            element: <Team />,
            handle: {
              crumb: () => "Team",
            },
          },
          {
            path: "history",
            element: <History />,
            handle: {
              crumb: () => "History",
            },
          },
        ],
      },
      {
        path: "services",
        element: <Services />,
        handle: {
          crumb: () => "Services",
        },
        children: [
          {
            path: "design",
            element: <Design />,
            handle: {
              crumb: () => "Design",
            },
          },
          // ... other nested routes
        ],
      },

      {
        path: "contact",
        element: <Contact />,
        handle: {
          crumb: () => "Contact",
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
