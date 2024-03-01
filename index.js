const OpenAI = require("openai");
const apiKey = "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"
const openai = new OpenAI({apiKey});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();