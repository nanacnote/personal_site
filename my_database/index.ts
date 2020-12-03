import PouchDB from 'pouchdb'

interface Ipayload {
  host: string
  userAgent: string
  referer: string
}

const db = new PouchDB('portfolioDB')

const visitorDocRev = '2-3ec63fb2eaccdae01fa3de3d11fcd28b'

const retrieveVisitorDoc = async () => {
  const data = db
    .get('visitorDoc')
    .then((doc) => doc)
    .catch((err) => console.warn(err))
  return data
}

const updateVisitorDoc = async (payload: Ipayload) => {
  const doc: any = await retrieveVisitorDoc()
  const concat = doc.list
  concat.push(payload)
  db.put({ _id: 'visitorDoc', _rev: doc._rev, list: concat }).catch((err) =>
    console.warn(err)
  )
  // db.remove(doc)
  return doc.list.length
}

export const logVisitor = updateVisitorDoc
