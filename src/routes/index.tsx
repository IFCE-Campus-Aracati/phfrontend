import { Routes, Route } from "react-router-dom";

import { SideBar } from "../components/SideBar";

import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";

import { Profile } from "../pages/Client/Profile";
import { EditPrint } from "../pages/Client/MyPrints/EditPrint";

import { RequestPrinting } from "../pages/Anonymous/RequestPrinting";
import { SearchPrint } from "../pages/Anonymous/SearchPrint";

import { ListPrints } from "../pages/Admin/ListPrints";
import { ListUsers } from "../pages/Admin/ListUsers";
import { ListPrinters } from "../pages/Admin/ListPrinters";
import { CreatePrint } from "../pages/Client/MyPrints/CreatePrint";
import { MyPrints } from "../pages/Client/MyPrints";
import { EditListPrint } from "../pages/Admin/ListPrints/EditListPrint";
import { RegisterListPrint } from "../pages/Admin/ListPrints/RegisterListPrint";
import { EditPrinter } from "../pages/Admin/ListPrinters/EditPrinter";
import { RegisterPrinter } from "../pages/Admin/ListPrinters/RegisterPrinter";
import { EditUser } from "../pages/Admin/ListUsers/EditUser";
import { Dashboard } from "../pages/Admin/Dashboard";

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/client" element={<SideBar variant="client" />}>
        <Route path="/client/profile" element={<Profile />} />
        <Route path="/client/my_prints/create_print" element={<CreatePrint />} />
        <Route path="/client/my_prints/edit_print" element={<EditPrint />} />
        <Route path="/client/my_prints" element={<MyPrints />} />
      </Route>

      <Route path="/anonymous/request_print" element={<RequestPrinting />} />
      <Route path="/anonymous/search_print" element={<SearchPrint />} />

      <Route path="/admin" element={<SideBar variant="admin" />}>
        <Route path="/admin/list_prints" element={<ListPrints />} />
        <Route path="/admin/list_prints/edit_print" element={<EditListPrint />} />
        <Route path="/admin/list_prints/register_print" element={<RegisterListPrint />} />
        <Route path="/admin/list_users" element={<ListUsers />} />
        <Route path="/admin/list_users/edit_user" element={<EditUser />} />
        <Route path="/admin/list_printers" element={<ListPrinters />} />
        <Route path="/admin/list_printers/edit_printer" element={<EditPrinter />} />
        <Route path="/admin/list_printers/register_printer" element={<RegisterPrinter />} />
        <Route path="/admin/my_prints" element={<MyPrints />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
