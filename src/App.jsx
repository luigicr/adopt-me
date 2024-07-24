import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 10, // 10 minutes
    },
  },
});

// const App = () => {
//   return React.createElement(
//     "div",
//     // Attributes can go here
//     { id: "test" },
//     // childrens components

//     React.createElement("h1", {}, "Adopt Me"),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Coti",
//       breed: "Pomerian",
//     }),
//     React.createElement(Pet, {
//       animal: "Cat",
//       name: "Pinina Franscisca",
//       breed: "Mixed",
//     }),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Gandi",
//       breed: "Stray",
//     })
//   );
// };

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>

        {/* <Pet animal="Dog" name="Coti" breed="Pomerian" />
      <Pet animal="Cat" name="Pinina Franscisca" breed="Mixed" />
      <Pet animal="Dog" name="Gandi" breed="Stray" /> */}
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
