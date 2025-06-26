// src/main.tsx
import './tailwind.css';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

// Add this console log to see what rootElement is
console.log("Attempting to find root element:", rootElement);

if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  // This error will appear if the root element is not found
  console.error("Error: Root element with ID 'root' not found in the document.");
}
