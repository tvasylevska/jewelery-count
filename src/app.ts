import Jewelery from './jewelery';

const appPort = Number(process.env.BASE_PORT) || 3000
new Jewelery().start(appPort)
    .then(() => console.log(`Running on port http://localhost:${appPort}/jewelery`))
    .catch(error => {
        console.log(error)
    });
