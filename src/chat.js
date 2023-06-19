import { ConversationalRetrievalQAChain } from 'langchain/chains'
import { OpenAI } from 'langchain/llms/openai'
import { PineconeClient } from '@pinecone-database/pinecone'
import { PineconeStore } from 'langchain/vectorstores/pinecone'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
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
const pineconeStore = await PineconeStore.fromExistingIndex(new OpenAIEmbeddings(), {
  pineconeIndex,
  textKey: 'text',
  namespace: 'my-langchain-ai',
})

const chain = ConversationalRetrievalQAChain.fromLLM(model, pineconeStore.asRetriever())

const res = await chain.call({
  question: 'what authentication flow should be used for regular web app?',
  chat_history: [],
})

console.log('chat res: ', res)
