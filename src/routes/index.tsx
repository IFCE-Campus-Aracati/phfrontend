import { Routes, Route } from "react-router-dom";
import { RequestPrinting } from "../pages/Anonymous/RequestPrinting";

import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";
import { Profile } from "../pages/Client/Profile";
import { EditPrint } from "../pages/Client/EditPrint";

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/client/profile" element={<Profile />} />
      <Route path="/client/edit_print" element={<EditPrint />} />

      <Route path="/anonymous/request_print" element={<RequestPrinting />} />
    </Routes>
  );
}
