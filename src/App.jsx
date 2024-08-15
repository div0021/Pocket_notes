import CreateGroupModel from "./components/CreateGroupModel";
import Instruction from "./components/Instruction";
import Notes from "./components/Notes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <main className="w-screen flex flex-col justify-start items-center h-screen">
        <CreateGroupModel />
        <div className="grid grid-cols-5 lg:grid-cols-6 xl:grid-cols-5 w-full max-w-screen-2xl">
          <div className="lg:col-span-2 xl:col-span-1">
            <Sidebar />
          </div>

          <div className="col-span-5 lg:col-span-4 bg-primary-background">

            <Instruction />

            <Notes />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
