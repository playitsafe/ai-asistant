import { UnstructuredLoader } from 'langchain/document_loaders/fs/unstructured'
// import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { PineconeClient } from '@pinecone-database/pinecone'
import { PineconeStore } from 'langchain/vectorstores/pinecone'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import dotenv from 'dotenv'
import { getAbsolutePath } from './util.js'

// Load environment variables
dotenv.config()

// Feed MD file
const mdFile = getAbsolutePath('./data/doc.md')
const unstructuredLoader = new UnstructuredLoader(mdFile)
const rawDoc = await unstructuredLoader.load()

// Feed pdf file - will need `pdf-parse` pkg
// const pdfFile = getAbsolutePath('./data/oauth2.pdf')
// const pdfLoader = new PDFLoader(pdfFile)
// const pdfDoc = await pdfLoader.load()

// console.log(mdDoc)

const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000, chunkOverlap: 200 })
const docs = await splitter.splitDocuments(rawDoc)

// Save it to vector DB
// https://js.langchain.com/docs/modules/indexes/vector_stores/integrations/pinecone

const pineconeClient = new PineconeClient()
await pineconeClient.init({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
})
// console.log(docs)
const pineconeIndex = pineconeClient.Index(process.env.PINECONE_INDEX)

try {
  PineconeStore.fromDocuments(docs, new OpenAIEmbeddings(), {
    pineconeIndex,
    textKey: 'text',
    namespace: 'my-langchain-ai',
  })
} catch (e) {
  console.log(e)
}
