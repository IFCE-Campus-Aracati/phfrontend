import { Routes, Route } from "react-router-dom";
import { RequestPrinting } from "../pages/Anonymous/RequestPrinting";

import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";
import { SideBar } from "../components/SideBar";
import { ListPrints } from "../pages/Admin/ListPrints";
import { SearchPrint } from "../pages/Anonymous/SearchPrint";

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/anonymous/request_print" element={<RequestPrinting />} />
      <Route path="/anonymous/search_print" element={<SearchPrint />} />

      <Route path="/" element={<SideBar variant="admin" />}>
        <Route path="/list_prints" element={<ListPrints />} />
      </Route>
    </Routes>
  );
}
