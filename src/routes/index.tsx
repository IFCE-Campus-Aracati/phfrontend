import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";

import { Profile } from "../pages/Client/Profile";
import { EditPrint } from "../pages/Client/MyPrints/EditPrint";

import { SideBar } from "../components/SideBar";
import { ListPrints } from "../pages/Admin/ListPrints";
import { SearchPrint } from "../pages/Anonymous/SearchPrint";
import { RequestPrinting } from "../pages/Anonymous/RequestPrinting";
import { MyPrints } from "../pages/Client/MyPrints";
import { ListUsers } from "../pages/Admin/ListUsers";
import { ListPrinters } from "../pages/Admin/ListPrinters";
import { CreatePrint } from "../pages/Client/MyPrints/CreatePrint";

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/client" element={<SideBar variant="client" />}>
        <Route path="/client/profile" element={<Profile />} />
        <Route path="/client/edit_print" element={<EditPrint />} />
        <Route path="/client/create_print" element={<CreatePrint />} />
        <Route path="/client/my_prints" element={<MyPrints />} />
      </Route>

      <Route path="/anonymous/request_print" element={<RequestPrinting />} />
      <Route path="/anonymous/search_print" element={<SearchPrint />} />

      <Route path="/admin" element={<SideBar variant="admin" />}>
        <Route path="/admin/list_prints" element={<ListPrints />} />
        <Route path="/admin/list_users" element={<ListUsers />} />
        <Route path="/admin/list_printers" element={<ListPrinters />} />
        <Route path="/admin/my_prints" element={<MyPrints />} />
      </Route>
    </Routes>
  );
}
