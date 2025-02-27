import { Client, Account, Databases, Storage } from 'appwrite'

const client = new Client()

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) // Your Appwrite endpoint
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID) // Your Appwrite project ID

const account = new Account(client)
const databases = new Databases(client)
const storage = new Storage(client)

export { client, account, databases, storage }
