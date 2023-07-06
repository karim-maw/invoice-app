import { TrashSimple } from "phosphor-react";
import { useState, ChangeEvent } from "react";
import { pb } from "../lib/pocketbase";

export default function ItemList({ info }: any) {
  const [itemName, setItemName] = useState("");
  const [itemQnt, setItemQnt] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDisplay, setItemDisplay] = useState(false);

  const handleInputChange = (event: any, setInputValue: any) => {
    const { value } = event.target;
    setInputValue(value);
  };

  async function sendInvoice() {
    const data = {
      username: "guest",
      price: itemPrice,
      status: "Pending",
      array: { itemName, itemQnt, itemPrice },
      client_name: info.name,
      client_email: info.email,
      client_desc: info.desc,
    };

    const record = await pb.collection("invoice").create(data);
  }

  console.log(itemPrice)

  return (
    <div className="">
      <h1 className="text-lg font-bold text-gray-400 pl-2 mt-10 mb-6">
        ItemList
      </h1>
      {itemDisplay && (
        <div className="flex gap-2 items-center">
          <input
            value={itemName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e, setItemName)
            }
            className="bg-[#1E2139] p-3 w-2/5 rounded-md my-4"
            placeholder="Item name"
          />
          <input
            value={itemQnt}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e, setItemQnt)
            }
            className="bg-[#1E2139] p-3 w-1/6 rounded-md my-4"
            placeholder="Qty."
          />
          <input
            value={itemPrice}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e, setItemPrice)
            }
            className="bg-[#1E2139] p-3 w-1/5 rounded-md my-4"
            placeholder="Price"
          />
          <p className="w-1/6 text-center">0</p>
          <TrashSimple
            size={20}
            className="cursor-pointer text-gray-500 hover:text-red-500"
            onClick={() => setItemDisplay(false)}
          />
        </div>
      )}
      <button
        className="bg-[#252945] text-gray-200 text-sm font-bold w-full p-3 my-5 rounded-3xl hover:bg-[#1E2139]"
        onClick={() => setItemDisplay(true)}
      >
        + Add new Item
      </button>
      <button
        onClick={sendInvoice}
        className="bg-purple-600 px-5 py-2 mt-2 rounded-full hover:bg-purple-500"
      >
        Create
      </button>
    </div>
  );
}
