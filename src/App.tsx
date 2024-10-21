import Calculator from "./components/Calculator";
import History from "./components/History";
import NavBar from "./components/NavBar";

const App: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col overflow-y-hidden">
      <NavBar />
      <div className="flex flex-1">
        <History />
        <main className="flex justify-center items-center mx-auto">
          <Calculator />
        </main>
      </div>
    </div>
  );
};

export default App;
