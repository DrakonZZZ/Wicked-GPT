// import { Configuration, OpenAIApi } from "openai";

export const config = {
  runtime: "edge",
};

export default async function handler(req, context) {
  const { prompt } = await req.json();

  const completion = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    }),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
    stream: true,
  });

  return new Response(completion.body, {
    status: 200,
    headers: {
      "Content-type": "application/json",
    },
  });
}
