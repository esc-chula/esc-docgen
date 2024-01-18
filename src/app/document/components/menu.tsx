"use client";

export default function Menu() {
  return (
    <div className="print:hidden">
      <button
        className="rounded-md bg-blue-500 p-4 text-white shadow-md"
        onClick={() => {
          // print
          window.print();
        }}
      >
        Print
      </button>
    </div>
  );
}
