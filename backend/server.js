const app = require('./app')
const databaseConnections = require('./dataBaseConnection')

const PORT = process.env.PORT || 5000;



databaseConnections()


const server = app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1)
    })
})