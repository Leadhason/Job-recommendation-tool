"use client";

import { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";

function Form() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    alert(`Submitted: ${inputValue}`);
    event.preventDefault();
    setInputValue(event.target.value);
  };

  return (
    <section className=" mb-7 fixed inset-x-0 bottom-0 flex justify-center items-center">
      <div className="w-full max-w-[900px] mx-auto px-5">
        <form className="flex items-center justify-between gap-4 bg-[#f0f4f9] px-3 py-2.5 rounded-full onSubmit={handleSubmit}">
          <input
            type="text"
            placeholder="Enter a prompt"
            className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-lg text-slate-900 dark:text-slate-500"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="flex items-center gap-0">
            <button
              type="submit"
              className="bg-gray-100 rounded-full py-2 px-4"
            >
              <Image src="/file.png" alt="file upload" width={25} height={25} />
            </button>
            <button className="bg-gray-100 rounded-full py-2 px-4">
              <Image src="/send.svg" alt="send" width={20} height={20} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
