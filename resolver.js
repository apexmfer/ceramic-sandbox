import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import { Resolver } from 'did-resolver'


import {CeramicClient} from '@ceramicnetwork/http-client'

// You need an instance of Ceramic to call getResolver.
// This can be either @ceramicnetwork/core or @ceramicnetwork/http-client.
// You can also set an address for your own ethr-did-registry contract

const API_URL = "https://gateway.ceramic.network"
const ceramic = new CeramicClient(API_URL)

// getResolver will return an object with a key/value pair of { '3': resolver }
// where resolver is a function used by the generic did resolver.
const threeIdResolver = ThreeIdResolver.getResolver(ceramic)
const didResolver = new Resolver(threeIdResolver)

const doc = await didResolver.resolve('did:ethr:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74')
console.log(doc)