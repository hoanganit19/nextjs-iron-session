import ClientComponent from "./components/ClientComponent";
import ServerComponent from "./components/ServerComponent";

export default function HomePage() {
  return (
    <div>
      <ServerComponent />
      <ClientComponent />
    </div>
  );
}
