function Navbar() {
  return (
    <div className="h-20 flex items-center justify-center gap-x-4 bg-[#876445] mb-6 rounded-b-full w-lg mx-auto">
      <h1 className="md:text-xl text-sm font-bold text-slate-300">
        Inventory App
      </h1>
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#3c2a21] border-2 border-slate-300 font-bold text-slate-300">
        7
      </span>
    </div>
  );
}

export default Navbar;
