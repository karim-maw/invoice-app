"use client";

import { useRouter } from "next/navigation";
import { pb } from "../lib/pocketbase";

export default function ({ params }: any) {
  const router = useRouter();
  async function handleDelete() {
    const remove = await pb.collection("invoice").delete(params.id);
    router.push("/");
  }
  return (
    <div className="flex gap-2 items-center">
      <button className="bg-[#252945] text-sm font-semibold rounded-full py-3 px-6">
        Edit
      </button>
      <button
        className="bg-[#EC5757] py-3 px-6 text-sm font-semibold rounded-full"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button className="bg-[#7C5DFA] py-3 px-6 text-sm font-semibold rounded-full">
        Mark as Paid
      </button>
    </div>
  );
}
