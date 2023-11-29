import React, { useEffect, useState } from "react";
import { MdDelete, MdDownload, MdModeEdit } from "react-icons/md";
import "./Product.scss";
import ProductModal from "./ProductModal";
import Modal from "../../../components/Modal/Modal";
import { axiosPrivate } from "../../../services/axios";
import { useSelector } from "react-redux";
import { FaRegImage } from "react-icons/fa";
import useSubCategory from "../../../hooks/useSubCategory";
const Product = () => {
  const [productData, setProductData] = useState([]);
  const [open, setOpen] = useState();
  const [deleteModal, setDeleteModal] = useState(false);
  const [productDelete, setProductDelete] = useState();
  const [id, setId] = useState();
  const [editModal, setEditModal] = useState(false);
  const [name_uz, setName_uz] = useState();
  const [name_ru, setName_ru] = useState();
  const [getImage, setGetImage] = useState();
  const [img, setImg] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [description_uz, setDescription_uz] = useState();
  const [description_ru, setDescription_ru] = useState();
  const [allSubCategoryCurrent, setAllSubCategoryCurrent] = useState();
  const { allSubCategory } = useSelector((state) => state.subcategory);
  const fetchSubCategories = useSubCategory()
  console.log(allSubCategory, "Bu allsub");

  useEffect(() => {
    fetchSubCategories()
  }, [])

  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    axiosPrivate
      .post("/products/image", formData)
      .then((res) => {
        setGetImage(res.data.image);
      })
      .catch((err) => console.log(err, "Error uploading image"));
  };

  const onDelete = (e) => {
    e.preventDefault();
    axiosPrivate
      .delete(`/products/delete/${id}`)
      .then((res) => {
        console.log(res?.data);
        setProductDelete(res?.data);
        setDeleteModal(false);
        axiosPrivate
          .get("/products/ru/list")
          .then((res) => setProductData(res.data))
          .catch((err) => console.log(err, console.log("Bu xato")));
      })
      .catch((error) => {
        console.error("Error deleting:", error);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name_ru: name_ru,
      name_uz: name_uz,
      img_path: getImage,
      price: price,
      quantity: quantity,
      description_ru: description_ru,
      description_uz: description_uz,
      subcategory_id: allSubCategoryCurrent,
    };
    axiosPrivate.put(`/products/edit/${id}`, data).then((res) => {
      console.log(res?.data);
      setEditModal(false);
      axiosPrivate
        .get("/products/ru/list")
        .then((res) => setProductData(res.data))
        .catch((err) => console.log(err, console.log("Bu xato")));
    });
  };

  const handleEdit = (id) => {
    GetId(id);
    setId(id);
    setEditModal(true);
  };

  const handleDelete = (id) => {
    GetId(id);
    setId(id);
    setDeleteModal(true);
  };
  console.log(id, "id");
  const GetId = (paramId) => {
    axiosPrivate.get(`/products/view/${paramId}`).then((response) => {
      console.log(response?.data, "data get id");
      setName_uz(response?.data?.name_uz);
      setName_ru(response?.data?.name_ru);
      setImg(response?.data?.img_path);
      setPrice(response?.data?.price);
      setQuantity(response?.data?.quantity);
      setDescription_uz(response?.data?.description_uz);
      setDescription_ru(response?.data?.description_ru);
    });
  };

  const handleSelect = (e) => {
    setAllSubCategoryCurrent(e.target.value);
  };

  return (
    <>
      <div className="admin-category d-flex items-center justify-content-between mb-5">
        <h1 className="fs-1">Product</h1>
        <button
          className="btn btn-success fs-5"
          onClick={() => setOpen((prev) => !prev)}
        >
          Add Product
        </button>
      </div>

      <div className="table-box">
        <table className="category-table">
          <thead>
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Images</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subcategory_id</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productData?.map((product, imdex) => (
              <tr>
                <td>{imdex + 1}</td>
                <td>{product?.name_ru}</td>
                <td className="d-flex align-items-center justify-content-center">
                  <img
                    className="rounded-circle"
                    src={product?.img_path}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{product?.description_ru}</td>
                <td>{product?.price}</td>
                <td>{product?.quantity}</td>
                <td>{product?.subcategory_id}</td>
                <td>
                  <div className="d-flex align-items-center justify-content-end">
                    <button onClick={() => handleEdit(product.id)}>
                      <MdModeEdit />
                    </button>
                    <button onClick={() => handleDelete(product.id)}>
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ProductModal
        open={open}
        setOpen={setOpen}
        setProductData={setProductData}
      />

      <Modal open={deleteModal} setOpen={setDeleteModal}>
        <div className="title">
          <h2 className="text-center">Product Delete</h2>
          <h3 className="text-center">Do you want to delete data?</h3>
          <div className="d-flex align-items-center flex-column justify-content-center  mb-2 gap-2">
            <img
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              src={img}
              alt=""
            />

            <p className="fs-3">{name_ru}</p>
          </div>
        </div>
        <div className="edit-box mt-4">
          <button className="edit-buttons" type={"submit"} onClick={onDelete}>
            Delete
          </button>
          <button
            className="close-edit-button"
            onClick={() => setDeleteModal(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>

      <Modal open={editModal} setOpen={setEditModal}>
        <div>
          <h1 className="fs-1 mb-3 text-center">Product</h1>
          <div className="d-flex align-items-center justify-content-center rounded-circle mb-1">
            <img
              className="rounded-circle"
              src={getImage ? getImage : img}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <form onSubmit={onSubmit}>
            <div className="d-flex align-items-center justify-content-between gap-2">
              <div className="product-add-input w-50">
                <h3 className="product-placeholder">Name uz</h3>
                <input
                  type="text"
                  placeholder="Name uz"
                  name="name_uz"
                  value={name_uz}
                  onChange={(e) => setName_uz(e.target.value)}
                  required
                />
              </div>
              <div className="product-add-input w-50">
                <h3 className="product-placeholder">Name Ru</h3>
                <input
                  type="text"
                  placeholder="Name ru"
                  name="name_ru"
                  value={name_ru}
                  onChange={(e) => setName_ru(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-end gap-3">
              <div className="product-add-input">
                <label
                  className="bg-primary cursor-pointer ps-2 d-flex align-items-center justify-content-between rounded-2 overflow-hidden"
                  htmlFor="img_file"
                  style={{
                    width: "250px",
                    height: "50px",
                    cursor: "pointer",
                  }}
                >
                  <h3 className="text-light fs-5">Rasmni tanlang</h3>
                  <MdDownload className="text-light bg-success fs-1 h-100" />
                </label>
                <input
                  className="d-none"
                  type="file"
                  placeholder="Name uz"
                  name="img_file"
                  id="img_file"
                  onChange={(e) => handleUpload(e)}
                  required
                />
              </div>
              
              <div className="w-50 ">
                <label htmlFor="subcategory">Select SubCategory</label>
                <select onChange={handleSelect} className="form-select mb-3">
                  {allSubCategory?.map((subcategory) => (
                    <option value={subcategory?.id}>{subcategory?.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="d-flex gap-3">
              <div className="product-add-input w-50">
                <h3 className="product-placeholder">Price</h3>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div className="product-add-input w-50">
                <h3 className="product-placeholder">Quantity</h3>
                <input
                  type="number"
                  placeholder="Quantity"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="d-flex gap-2">
              <div className="product-add-input w-50">
                <h3 className="product-placeholder">Description ru</h3>
                <input
                  type="text"
                  placeholder="Description ru"
                  name="description_ru"
                  value={description_ru}
                  onChange={(e) => setDescription_ru(e.target.value)}
                  required
                />
              </div>

              <div className="product-add-input w-50">
                <h3 className="product-placeholder">Description uz</h3>
                <input
                  type="text"
                  placeholder="Description uz"
                  name="description_uz"
                  value={description_uz}
                  onChange={(e) => setDescription_uz(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="d-flex items-center justify-content-between gap-4">
              <button type="submit" className="product-add-btn w-50">
                Create
              </button>
              <button
                className="btn btn-danger w-50"
                type="button"
                onClick={() => setEditModal(false)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Product;