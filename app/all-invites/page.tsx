import { getInvites } from "@/db-actions";
import React from "react";
import InviteList from "../InviteList";

export const dynamic = "force-dynamic";
//comment
export default async function page() {
  const invites = await getInvites();
  console.log(invites);
  return (
    <div>
      <div className="background-container"></div>

      <InviteList invites={invites} />
    </div>
  );
}
