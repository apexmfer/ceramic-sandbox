


import {CeramicClient} from '@ceramicnetwork/http-client'
import { ThreeIdConnect,  EthereumAuthProvider } from '@3id/connect'

const authProvider = new EthereumAuthProvider(ethProvider, addresses[0])

const threeIdConnect = new ThreeIdConnect()
await threeIdConnect.connect(authProvider)

const provider = await threeIdConnect.getDidProvider()

ceramic.did.setProvider(provider)
await ceramic.did.authenticate()//prompt user with did popup 
y
