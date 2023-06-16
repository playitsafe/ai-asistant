import { UnstructuredLoader } from 'langchain/document_loaders/fs/unstructured'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { getAbsolutePath } from './util.js'

// Feed MD file
const mdFile = getAbsolutePath('./data/doc.md')
const unstructuredLoader = new UnstructuredLoader(mdFile)
const mdDoc = await unstructuredLoader.load()

// Feed pdf file - will need `pdf-parse` pkg
// const pdfFile = getAbsolutePath('./data/oauth2.pdf')
// const pdfLoader = new PDFLoader(pdfFile)
// const pdfDoc = await pdfLoader.load()

console.log(mdDoc)
