
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, getDoc, doc} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC7qWoxQva31IhIAau24W78uWmT683FVz4",
  authDomain: "reactproyectofinal-8680a.firebaseapp.com",
  projectId: "reactproyectofinal-8680a",
  storageBucket: "reactproyectofinal-8680a.appspot.com",
  messagingSenderId: "266180633999",
  appId: "1:266180633999:web:70c9cbd83a7163294997fa"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export async function getItems (){
// 1. referencia a la colleción
const productosCollectionRef = collection(db, "productos")
//2. pedir a firebase docs de esa colección

/*getDocs(productosCollectionRef).then((snapshot) =>{
    const docsData = snapshot.docs.map(doc => doc.data())
    console.log(docsData)
    })*/

    const snapshot = await getDocs(productosCollectionRef)
    const docsData = snapshot.docs.map((doc) => {
       let dataFine = doc.data()
       dataFine.id = doc.id
       return dataFine
    })
    return docsData
} 

export async function getItem(detailId){
    const productosCollectionRef = collection(db, "productos")
    const productRef = doc(productosCollectionRef,detailId )
    const snapshot = await getDoc(productRef)
    return {...snapshot.data(), id: snapshot.id}
}
