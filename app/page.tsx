import AddInvoice from "./component/AddInvoice";
import Invoice from "./component/Invoice";

async function getData() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/invoice/records",
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen w-full flex-col items-center p-2 md:p-24 sm:p-10">
      <AddInvoice data={data.items}/>
    </main>
  );
}
