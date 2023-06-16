import { UnstructuredLoader } from 'langchain/document_loaders/fs/unstructured'
// import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

import { getAbsolutePath } from './util.js'

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

console.log(docs)
