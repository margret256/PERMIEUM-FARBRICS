import AdminPage, { type AdminPageKind } from "@/components/admin-page";
import AdminShell from "@/components/admin-shell";

export default function AdminRoute({ kind }: { kind: AdminPageKind }) {
  return <AdminShell><AdminPage kind={kind} /></AdminShell>;
}
