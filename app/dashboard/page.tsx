import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const { getUser } = getKindeServerSession();

export default async function DashboardPage() {
  const session = await getUser();
  if (!session) {
    redirect("/api/auth/register");
  }
  return (
    <div>
      <h1>Dashbord</h1>
    </div>
  );
}
