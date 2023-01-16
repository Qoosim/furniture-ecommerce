import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase.config"

const useGetData = (collectionName) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const collectionRef = collection(db, collectionName)

  useEffect(() => {
    const getData = async () => {
      // ==== firebase firestore realtime data update =====
      //const { docs } = await getDocs(collectionRef)
      //console.log(docs);
      //const mappedDocs = docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      //setData(mappedDocs)
      await onSnapshot(collectionRef, (snapshot) => {
        const { docs } = snapshot;
        const mappedDocs = docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setData(mappedDocs);
      })
    }
    getData()
    setLoading(false)
  }, [])

  return { data, loading }
}

export default useGetData
