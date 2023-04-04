import * as dotenv from "dotenv";
import { OpenAI } from "langchain/llms";
import { PromptTemplate } from "langchain/prompts";
import { initializeAgentExecutor } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { NextApiRequest, NextApiResponse } from 'next';

dotenv.config();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 const domain = req.body.domain;

 if (!domain) {
  return res.status(400).json({ error: "Missing domain parameter" });
}

try {

const template = "Can you provide a brief overview of {domain}, including pricing information? Additionally, could you provide any information about whether the product has an API and the names of the tools it has official integrations with. Lastly, could you provide the direct links to the web pages of the product's help resources, docs, or documentation pages";
const prompt = new PromptTemplate({
  template,
  inputVariables: ["domain"],
});

const answer = await prompt.format({ domain: domain });
console.log(answer);
const model = new OpenAI({ temperature: 0 });
const tools = [new SerpAPI()];

const executor = await initializeAgentExecutor(
  tools,
  model,
  "zero-shot-react-description"
);
console.log("Loaded agent.");

const input =
  answer;
console.log(`Executing with input "${input}"...`);

const result = await executor.call({ input });

console.log(`Got output ${result.output}`);

 // Send the response back to the client
 res.status(200).json({ output: result.output });
 } catch (error) {
 console.error("Error processing request:", error);

 // Send an error response to the client
 res.status(500).json({ error: "Error processing request" });
}
}