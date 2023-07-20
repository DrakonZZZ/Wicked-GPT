import Head from "next/head";
import { Sidebar } from "src/components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function LayoutPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(message);

    const response = await fetch("api/conversation/pushMessage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ chatText: message }),
    });

    const resData = response.body;

    if (!resData) {
      console.log("resData");
      return;
    }

    const reader = resData.getReader();
    await streamReader(reader, (data) => console.log(data));
  };

  return (
    <>
      <Head>
        <title>Conversation</title>
      </Head>
      <main className="grid h-screen grid-cols-[1fr_3fr]">
        <Sidebar />
        <section className="flex flex-col bg-gray-300">
          <div className="flex-1">Chat screen</div>
          <hr className="m-auto w-[95%] border-[1.2px] border-[#b3b1b190]" />
          <footer className="px-8 py-6">
            <form onSubmit={handleSubmit}>
              <fieldset className="flex items-center justify-center gap-2">
                <input
                  type="text"
                  className="w-full resize-none bg-transparent text-[1.1rem] font-semibold text-gray-500 outline-none"
                  placeholder="Send a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className="mr-2 w-5">
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    style={{ color: "#555758" }}
                  />
                </button>
              </fieldset>
            </form>
          </footer>
        </section>
      </main>
    </>
  );
}
