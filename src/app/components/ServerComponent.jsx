import { headers } from "next/headers";
import { getSessionServer } from "../utils/session";

export default async function ServerComponent() {
  const session = await getSessionServer(headers().get("cookie"));
  return (
    <div>
      <h1>Session From Server</h1>
      {JSON.stringify(session)}
    </div>
  );
}
