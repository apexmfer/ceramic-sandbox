import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import { Resolver } from 'did-resolver'


import {CeramicClient} from '@ceramicnetwork/http-client'
import { IDX } from '@ceramicstudio/idx'

//https://developers.idx.xyz/build/installation/


async function  start(){


// You need an instance of Ceramic to call getResolver.
// This can be either @ceramicnetwork/core or @ceramicnetwork/http-client.
// You can also set an address for your own ethr-did-registry contract

const API_URL = "https://gateway.ceramic.network"
const ceramic = new CeramicClient(API_URL)


const aliases = {
    alias1: 'definitionID 1',
    alias2: 'definitionID 2',
  }

  const idx = new IDX({ ceramic, aliases })

// getResolver will return an object with a key/value pair of { '3': resolver }
// where resolver is a function used by the generic did resolver.
const threeIdResolver = ThreeIdResolver.getResolver(ceramic)
const didResolver = new Resolver(threeIdResolver)



const doc = await didResolver.resolve('did:3:kjzl6cwe1jw145c2q70qv1xlzljithk72u1c8s3o3duwxwtibxlmfqezyj2i5jk')
logDocument(doc)


//basicProfile

const bucketNames = ['basicProfile','alsoKnownAs']

for (let b of bucketNames ){
    let result = await idx.get(b, 'did:3:kjzl6cwe1jw145c2q70qv1xlzljithk72u1c8s3o3duwxwtibxlmfqezyj2i5jk')
    logDocument(result)
}



/*
let internalDoc = doc.didDocument

let verificationMethods = internalDoc.verificationMethod

for(let vm of verificationMethods){

    let method = await didResolver.resolve(vm.id)
    
    logDocument(method)

}*/



}

function logDocument(d){
    console.log(JSON.stringify(d, null, 2 ))
}


start()