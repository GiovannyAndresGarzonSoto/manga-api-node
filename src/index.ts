import app from './app'
import https from 'https'
import fs from 'fs'
import {connectDatabase} from './database'

const main = () => {
    https.createServer({
        cert: fs.readFileSync('certificate.crt'),
        key:  fs.readFileSync('secret.key'),
    }, app).listen(app.get('port'))
    
    console.log(`Server running on port ${app.get('port')}`)
    connectDatabase()
}

main()