import Display from "../components/Display";
import Search from "../components/Search";

const Index = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/4 p-6 bg-slate-500 border border-gray-200 rounded-lg ">
        <Display />
        <Search />
      </div>
    </div>
  );
};

export default Index;
