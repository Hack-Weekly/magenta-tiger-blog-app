import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Enter from "./pages/Enter";
import Create from "./pages/Create";
import RestrictedRoute from "./context/RestrictedRoute";
import PrivateRoute from "./context/PrivateRoute";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <SharedLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
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
                <RestrictedRoute>
                  <Enter />
                </RestrictedRoute>
              }
            />
            <Route path="*" element={<p>Page not Found :c</p>} />
          </Routes>
        </SharedLayout>
      </BrowserRouter>
    </>
  );
}
