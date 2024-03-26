import { ProviderAPIConfig } from "../types";

const OpenAIAPIConfig: ProviderAPIConfig = {
  baseURL: "https://api.openai.lirtual.cloudns.org",
  headers: (API_KEY:string) => {
    return {"Authorization": `Bearer ${API_KEY}`}
  },
  complete: "/completions",
  chatComplete: "/chat/completions",
  embed: "/embeddings",
  imageGenerate: "/images/generations"
};

export default OpenAIAPIConfig;
