import InvoiceBtns from "@/app/component/InvoiceBtns";

async function fetchData(id: any) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/invoice/records/${id}`,
    { next: { revalidate: 0 } }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function page({ params }: any) {
  const {
    id,
    username,
    price,
    status,
    item,
    client_name,
    client_email,
    client_desc,
  } = await fetchData(params.id);
  return (
    <div className="flex min-h-screen w-full flex-col items-center p-24">
      <div className="bg-[#1E2139] flex justify-between items-center w-1/2 p-7 gap-2 rounded-lg">
        <div className="flex items-center gap-4">
          <p className="text-sm font-light">Status</p>
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
        <InvoiceBtns params={params} />
      </div>
      <div className="bg-[#1E2139] flex flex-col justify-between w-1/2 p-7 my-5 gap-10 rounded-lg">
        <div>
          <h3 className="font-bold">
            <span>#</span>
            {id}
          </h3>
          <p className="text-sm font-light">{client_desc}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div>
            <p className="text-sm font-light">Client's name</p>
            <p className="font-bold">{client_name}</p>
          </div>
          <div>
            <p className="text-sm font-light">Client's email</p>
            <p className="font-bold">{client_email}</p>
          </div>
          <div>
            <p className="text-sm font-light">Description</p>
            <p className="font-bold">{client_desc}</p>
          </div>
        </div>
        <table className="rounded-xl bg-[#252945]">
          <thead>
            <tr className="text-left">
              <th className="p-7">Item Name</th>
              <th>QTY.</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-7 pb-5">{item?.itemName}</td>
              <td>{item?.itemQnt}</td>
              <td>$120</td>
              <td>120</td>
            </tr>
          </tbody>
          <tfoot className="bg-[#0C0E16]">
            <tr>
              <td className="p-9">Amount Due</td>
              <td></td>
              <td></td>
              <td>120</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
