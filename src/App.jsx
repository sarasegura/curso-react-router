import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Menu";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { BlogPost } from "./BlogPost";
import "./App.css";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { AuthProvider } from "./auth";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />

            <Route path="/logout" element={<LogoutPage />} />

            <Route path="/profile" element={<ProfilePage />} />

            <Route path="*" element={<p>Not found </p>} />
          </Routes>

          <footer></footer>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
