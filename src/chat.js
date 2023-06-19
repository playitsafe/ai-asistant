import { ConversationalRetrievalQAChain } from 'langchain/chains'
import { OpenAI } from 'langchain/llms/openai'
import { PineconeClient } from '@pinecone-database/pinecone'
import { PineconeStore } from 'langchain/vectorstores/pinecone'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import {
  BaseChatMessage,
  HumanChatMessage,
  AIChatMessage,
} from 'langchain/schema'
import dotenv from 'dotenv'

dotenv.config()

const model = new OpenAI({
  // given a string, will match next string
  // the large number is, the less accuracy it is
  temperature: 0,
})

// get vector db as retriever
const pineconeClient = new PineconeClient()
await pineconeClient.init({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
})

const pineconeIndex = pineconeClient.Index(process.env.PINECONE_INDEX)
const pineconeStore = await PineconeStore.fromExistingIndex(
  new OpenAIEmbeddings(),
  {
    pineconeIndex,
    textKey: 'text',
    namespace: 'my-langchain-ai',
  },
)

const chain = ConversationalRetrievalQAChain.fromLLM(
  model,
  pineconeStore.asRetriever(),
  {
    returnSourceDocuments: true,
  },
)

/* // for local dev
const q1 = 'what authentication flow should be used for regular web app?'
const q2 = 'what about the mobile app?'
const histories = []

const res = await chain.call({
  question: q1,
  chat_history: [],
})

histories.push(new HumanChatMessage(q1))

console.log('1st chat res: ', res)

const res2 = await chain.call({
  question: q2,
  chat_history: [new HumanChatMessage(q1), new HumanChatMessage(res.text)],
})
console.log('2nd chat res: ', res2)
*/

export async function chat(question) {
  const res = await chain.call({
    question,
    chat_history: [],
  })
  return res
}
