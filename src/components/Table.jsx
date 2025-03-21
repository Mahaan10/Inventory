function Table({ children }) {
  return (
    <div className="bg-neutral-400 text-stone-900 overflow-x-auto rounded-b-lg">
      <table className="border-collapse border-spacing-0 w-full">
        {children}
      </table>
    </div>
  );
}

export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="bg-stone-900 text-slate-300 ">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr className="text-center border-b last:border-b-0 ">{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
