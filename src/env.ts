const API_KEY = process.env.API_KEY
const API_URL = process.env.API_URL

if (!API_KEY || !API_URL) {
  throw new Error('Env not set')
}

export const Env = {
  API_KEY,
  API_URL,
}
