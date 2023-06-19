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
import { PrivateRoute } from "./PrivateRoute";

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/anonymous/request_print" element={<RequestPrinting />} />
      <Route path="/anonymous/search_print" element={<SearchPrint />} />

      <Route path="client" element={<PrivateRoute role="client" />}>
        <Route element={<SideBar variant="client" />}>
          <Route index path="my_prints" element={<MyPrints />} />
          <Route path="profile" element={<Profile />} />
          <Route path="my_prints/create_print" element={<CreatePrint />} />
          <Route path="my_prints/edit_print" element={<EditPrint />} />
        </Route>
      </Route>

      <Route path="admin" element={<PrivateRoute role="admin" />}>
        <Route element={<SideBar variant="admin" />}>
          <Route index path="list_prints" element={<ListPrints />} />
          <Route path="profile" element={<Profile />} />
          <Route path="list_prints/edit_print" element={<EditListPrint />} />
          <Route path="list_prints/register_print" element={<RegisterListPrint />} />
          <Route path="list_users" element={<ListUsers />} />
          <Route path="list_users/edit_user" element={<EditUser />} />
          <Route path="list_printers" element={<ListPrinters />} />
          <Route path="list_printers/edit_printer" element={<EditPrinter />} />
          <Route path="list_printers/register_printer" element={<RegisterPrinter />} />
          <Route path="my_prints" element={<MyPrints />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}
