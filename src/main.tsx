import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  return <h1>Hello, World!</h1>;
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement!);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
