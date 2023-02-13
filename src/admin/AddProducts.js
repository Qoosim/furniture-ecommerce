import { addDoc, collection } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { Col, Container, Form, FormGroup, Row } from "reactstrap"
import { db, storage } from "../firebase.config"
import styles from "./css/addProducts.module.css"

const AddProducts = () => {
  const [enterName, setEnterName] = useState("")
  const [enterShortDesc, setEnterShortDesc] = useState("")
  const [enterDescription, setEnterDescription] = useState("")
  const [enterCategory, setEnterCategory] = useState("")
  const [enterPrice, setEnterPrice] = useState("")
  const [enterProductImg, setEnterProductImg] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const addProduct = async (e) => {
    e.preventDefault()
    setLoading(true)

    // ===== Add product to the firebase database ====
    try {
      const docRef = collection(db, "products")
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + enterProductImg.name}`
      )
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg)

      uploadTask.on(
        "state_changed",
        (snapshot) => snapshot,
        () => {
          toast.error("Image not uploaded")
        },
        async () => {
          try {
            const downloadUrl = await getDownloadURL(storageRef)

            const result = await addDoc(docRef, {
              productName: enterName,
              shortDesc: enterShortDesc,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downloadUrl,
            })

            return result
          } catch (error) {
            console.error(error)
          }
        }
      )

      setLoading(false)
      toast.success("Product successfully added!")
      navigate("/dashboard/all-products")
    } catch (err) {
      setLoading(false)
      toast.error("Product not added!")
      console.error(err)
    }
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <h4 className="py-5">Loading...</h4>
            ) : (
              <>
                <h4 className="mb-5">Add Product</h4>
                <Form onSubmit={addProduct}>
                  <FormGroup className={styles.formGroup}>
                    <span>Product Name</span>
                    <input
                      type="text"
                      placeholder="Title"
                      value={enterName}
                      onChange={(e) => setEnterName(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className={styles.formGroup}>
                    <span>Short Description</span>
                    <input
                      type="text"
                      placeholder="Short Desc..."
                      value={enterShortDesc}
                      onChange={(e) => setEnterShortDesc(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className={styles.formGroup}>
                    <span>Description</span>
                    <input
                      type="text"
                      placeholder="Description..."
                      value={enterDescription}
                      onChange={(e) => setEnterDescription(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <FormGroup className={`${styles.formGroup} w-50`}>
                      <span>Price</span>
                      <input
                        type="number"
                        placeholder="$100"
                        value={enterPrice}
                        onChange={(e) => setEnterPrice(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className={`${styles.formGroup} w-50`}>
                      <span>Category</span>
                      <select
                        className="w-100"
                        value={enterCategory}
                        onChange={(e) => setEnterCategory(e.target.value)}
                      >
                        <option>Select category</option>
                        <option value="chair">Chair</option>
                        <option value="sofa">Sofa</option>
                        <option value="mobile">Mobile</option>
                        <option value="watch">Watch</option>
                        <option value="wireless">Wireless</option>
                      </select>
                    </FormGroup>
                  </div>

                  <div>
                    <FormGroup className={styles.formGroup}>
                      <span>Product Image</span>
                      <input
                        type="file"
                        onChange={(e) => setEnterProductImg(e.target.files[0])}
                        required
                      />
                    </FormGroup>
                  </div>
                  <button type="submit" className={styles.buyBtn}>
                    Add Product
                  </button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts
