import app from './app'
import https from 'https'
import fs from 'fs'
import {connectDatabase} from './database'

const main = () => {
    app.listen(app.get('port'))
    console.log(`Server running on port ${app.get('port')}`)
    connectDatabase()
}

main()