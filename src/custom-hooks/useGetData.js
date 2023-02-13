import { collection, onSnapshot } from "firebase/firestore"
import { useCallback, useEffect, useMemo, useState } from "react"
import { db } from "../firebase.config"

const useGetData = (collectionName) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const collectionRef = useMemo(
    () => collection(db, collectionName),
    [collectionName]
  )

  const getData = useCallback(() => {
    // ==== firebase firestore realtime data update =====
    onSnapshot(collectionRef, (snapshot) => {
      const { docs } = snapshot
      const mappedDocs = docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      return setData(mappedDocs)
    })
  }, [collectionRef])

  useEffect(() => {
    getData()
    setLoading(false)
  }, [getData])

  return { data, loading }
}

export default useGetData
