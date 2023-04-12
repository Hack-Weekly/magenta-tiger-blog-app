import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilterProvider from "./context/filterContext";
import PrivateRoute from "./context/PrivateRoute";
import RestrictedRoute from "./context/RestrictedRoute";
import Create from "./pages/Create";
import Enter from "./pages/Enter";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import SharedLayout from "./pages/SharedLayout";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <FilterProvider>
        <BrowserRouter>
          <SharedLayout>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route
                path="/create"
                element={
                  <PrivateRoute>
                    <Create />
                  </PrivateRoute>
                }
              />
              <Route
                path="/enter"
                element={
                  // <RestrictedRoute>
                    <Enter />
                  // </RestrictedRoute>
                }
              />
              <Route path="*" element={<p>Page not Found :c</p>} />
            </Routes>
          </SharedLayout>
        </BrowserRouter>
      </FilterProvider>
    </>
  );
}
