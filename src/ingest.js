import { UnstructuredLoader } from 'langchain/document_loaders/fs/unstructured'
import { getAbsolutePath } from './util.js'

const unstructuredLoader = new UnstructuredLoader(getAbsolutePath('./data/doc.md'))

const doc = await unstructuredLoader.load()

console.log(doc)
