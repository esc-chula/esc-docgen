import Document from "./components/document";
import Menu from "./components/menu";

export default function Vanilla() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Menu />
      <Document />
    </main>
  );
}
