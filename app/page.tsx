"use client";
import { insertInvite } from "@/db-actions";
import Image from "next/image";

import { useActionState, useEffect } from "react";

export default function Home() {
  const [state, formAction, isPending] = useActionState(
    insertInvite,
    undefined,
  );

  // Automatically download PDF when state.ok is true
  useEffect(() => {
    if (state?.ok) {
      // Create a temporary link element to trigger download
      const link = document.createElement("a");
      link.href = "/accept.pdf"; // Path to your PDF in the public folder
      link.download = "accept.pdf"; // Name of the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [state?.ok]);

  return (
    <div className="md:min-w-[700px] w-full">
      <div className="background-container"></div>
      <div className="container ">
        {state?.message ? (
          <div className="h-full">
            {state?.ok ? (
              <Image
                width={1000}
                height={2000}
                src="/accept.png"
                alt="GEOSA Logo"
                className="w-full h-full"
                priority
                quality={90}
                loading="eager"
              />
            ) : (
              <Image
                width={1000}
                height={2000}
                src="/not-accept.png"
                alt="GEOSA Logo"
                className="w-full h-full"
                priority
                quality={90}
                loading="eager"
              />
            )}
          </div>
        ) : (
          <div className="rsvp-card">
            <img src="mother-logo.png" alt="GEOSA Logo" className="logo" />
            <h2> ليــــــــــــــــلة مؤثــــــــــــــــر</h2>
            <p className="english-title">Moather Night</p>

            <p className="rsvp-text">
              <span className="rsvp-arabic">Tap To RSVP </span>
              <span className="text-white">لتأكيد حضورك</span>
            </p>

            <form action={formAction}>
              <input
                type="text"
                name="name"
                className="name-input"
                placeholder="أكتب اسمك هنا"
                required
              />

              <div className="button-container">
                <button
                  className="btn btn-decline"
                  type="submit"
                  name="status"
                  value="decline"
                  disabled={isPending}
                >
                  Decline اعتذار
                </button>
                <button
                  className="btn btn-confirm"
                  type="submit"
                  name="status"
                  value="confirm"
                  disabled={isPending}
                >
                  Confirm تأكيد
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
