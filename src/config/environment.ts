import dotenv from 'dotenv'

dotenv.config()

const { NODE_ENV, PORT, ORIGIN } = process.env

const environment = {
  port: PORT || 4000,
  nodeEnv: NODE_ENV || 'development',
  client: {
    origin: ORIGIN || 'http://localhost:3000'
  }
}

export default environment
