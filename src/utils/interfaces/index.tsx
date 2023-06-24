export interface PrintProps {
  id: string;
  identifier: string;
  title: string;
  description: string;
  status: "pending" | "approved" | "decline" | "available" | "unavailable" | "done" | undefined;
  material: string;
  archive: string;
  printing_date: string;
  printing_duration: string;
  created_at: string;
  updated_at: string;
  owner_id: string;
  printer_id: string;
}

export interface PrinterProps {
  id: string;
  title: string;
  description: string;
  type: string;
  material: string;
  status: "pending" | "approved" | "decline" | "available" | "unavailable" | undefined;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  role: string;
  profile_photo: string;
}

export interface PrinterRequestProps {
  printers: PrinterProps[];
  totalPage: number;
}

export interface UserRequestProps {
  users: UserProps[];
  totalPage: number;
}

export interface ListTableDataProps {
  id?: string;
  title: string;
  identifier?: string;
  owner_id?: string;
  owner?: {
    name?: string;
  };
  created_at: string;
  status: "pending" | "approved" | "decline";
  description?: string;
  material?: string;
  archive?: string;
  printer_id?: string;
  printing_date?: string;
  printing_duration?: string;
}

export interface ChangePasswordProps {
  oldPassword: string;
  password: string;
}

export interface ChangeRoleProps {
  id: string;
  role: string;
}
