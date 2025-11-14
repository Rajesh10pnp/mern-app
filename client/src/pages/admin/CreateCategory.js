import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../components/form/CategoryForm";
import { Modal } from "antd";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/category/create-category", {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is Created`);
        getAllcategory();
        setName("");
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong input form");
    }
  };

  const getAllcategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data.success) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went worng getting category");
    }
  };

  useEffect(() => {
    getAllcategory();
  }, []);


  const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.put(
      `/api/v1/category/update-category/${selected._id}`,
      { name: updatedName }
    );

    if (data.success) {
      toast.success(`${updatedName} is updated`);
      setSelected(null);
      setUpdatedName("");
      setIsModalOpen(false);
      getAllcategory();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};


 const handleDelete = async (pId) => {
  try {
    const { data } = await axios.delete(
      `/api/v1/category/delete-category/${pId}`,
    );

    if (data.success) {
      toast.success(`Category is Deleted`);
      getAllcategory();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};

  return (
    <Layout title={"Admin Create-Category"}>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 p-4">
          <h2>Manage Category</h2>
          <div className="p-3 w-50">
            <CategoryForm
              handleSubmit={handleSubmit}
              value={name}
              setValue={setName}
            />
          </div>
          <div className="w-75">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories?.map((c) => (
                  <tr key={c._id}>
                    <td>{c.name}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success ms-3"
                        onClick={() => {
                          setIsModalOpen(true);
                          setUpdatedName(c.name);
                          setSelected(c);
                        }}
                      >
                        Edit
                      </button>
                      <button type="button" className="btn btn-danger ms-3"
                      onClick={()=>{handleDelete(c._id)}}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Modal
            onCancel={() => setIsModalOpen(false)}
            footer={null}
            open={isModalOpen}
          >
            <CategoryForm value={updatedName} setValue={setUpdatedName}
              handleSubmit={handleUpdate}/>
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
