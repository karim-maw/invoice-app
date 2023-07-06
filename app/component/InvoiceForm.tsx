"use client";
import { ChangeEvent, useState } from "react";
import ItemList from "./ItemList";

type BillInfo = {
  name: string;
  email: string;
  desc: string;
}; 

export default function () {
  const [billInfo, setBillInfo] = useState<BillInfo>({
    name: "",
    email: "",
    desc: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    propertyName: keyof BillInfo
  ) => {
    const { value } = event.target;
    setBillInfo((prevState) => ({
      ...prevState,
      [propertyName]: value,
    }));
  };

  return (
    <div className="bg-[#141625] fixed z-10 w-[42%] h-screen top-0 left-0 ml-[6rem] rounded-e-3xl p-10 shadow-black shadow-2xl invoice-slide-up">
      <h1 className="text-3xl font-bold pb-10">Create Invoice</h1>
      <div className="overflow-y-scroll h-full p-8">
        <p className="text-purple-600 text-sm font-bold mb-5 pl-1">Bill Info</p>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="clientName" className="text-sm font-light ml-1">
              Client's name
            </label>
            <input
              type="text"
              id="clientName"
              value={billInfo.name}
              onChange={(event) => handleInputChange(event, "name")}
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
              value={billInfo.email}
              onChange={(event) => handleInputChange(event, "email")}
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
              value={billInfo.desc}
              onChange={(event) => handleInputChange(event, "desc")}
              className="bg-[#1E2139] text-sm font-bold p-4 w-full rounded-md mt-2"
              placeholder="e.g. Graphic Design Service"
            />
          </div>
        </div>
        <ItemList info={billInfo}/>
      </div>
    </div>
  );
}
