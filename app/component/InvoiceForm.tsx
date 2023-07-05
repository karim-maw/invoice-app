import React from "react";

export default function () {
  return (
    <div className="bg-[#141625] fixed z-10 w-[42%] h-screen top-0 left-0 ml-[6rem] rounded-e-3xl p-16 shadow-black shadow-2xl invoice-slide-up">
      <h1 className="text-3xl font-bold">Create Invoice</h1>
      <div>
        <p className="text-purple-600 text-sm font-bold my-10">Bill Info</p>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="clientName" className="text-sm font-light ml-1">
              Client's name
            </label>
            <input
              type="text"
              id="clientName"
              className="bg-[#1E2139] text-sm font-bold p-4 w-full rounded-md mt-2"
            />
          </div>
          <div>
            <label htmlFor="clientEmail" className="text-sm font-light ml-1">
              Client's email
            </label>
            <input
              type="text"
              id="clientEmail"
              className="bg-[#1E2139] text-sm font-bold p-4 w-full rounded-md mt-2"
              placeholder="e.g. email@example.com"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-sm font-light ml-1">
              Description
            </label>
            <input
              type="text"
              id="description"
              className="bg-[#1E2139] text-sm font-bold p-4 w-full rounded-md mt-2"
              placeholder="e.g. Graphic Design Service"
            />
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-400 my-10">ItemList</h1>
        </div>
      </div>
    </div>
  );
}
