"use client";

import { useEffect, useState } from "react";
import { getSessionClient } from "../utils/session";

export default function ClientComponent() {
  const [session, setSession] = useState({});
  useEffect(() => {
    getSessionClient().then(setSession);
  }, []);
  return (
    <div>
      <h1>Session From Client</h1>
      {JSON.stringify(session)}
    </div>
  );
}
