"use client";

import { Key } from "react";

type InvoiceType = {
  id: Key;
  // date: any;
  username: string;
  price: number;
  status: string;
};

export default function Invoice({
  id,
  // date,
  username,
  price,
  status,
}: InvoiceType) {
  return (
    <div className="invoice flex justify-between items-center py-5 px-6 rounded-lg">
      <div className="flex gap-4 flex-wrap">
        <div className="flex">
          <p className="text-[#6D76AB]">#</p>
          <p className="font-semibold">{id}</p>
        </div>
        {/* <p>{date}</p> */}
        <p className="font-light">{username}</p>
      </div>
      <div className="flex gap-4 items-center flex-wrap">
        <p className="font-extrabold text-lg font-mono">
          <span>$</span>
          {price}
        </p>
        {status == "Paid" ? (
          <p className="bg-[#1F2C3F] text-[#33D69F] text-sm font-bold rounded-lg text-center w-28 py-2 px-5">
            {status}
          </p>
        ) : (
          <p className="bg-[#2B2736] text-[#FF8F00] text-sm font-bold rounded-lg text-center w-28 py-2 px-5">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
