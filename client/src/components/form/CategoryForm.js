import React from "react";

const CategoryForm = ({handleSubmit, value, setValue}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputText1"
            aria-describedby="textlHelp"
            placeholder="Enter Category"
            value={value}
           onChange={(e)=>setValue(e.target.value)} 
          /> 
        </div> 
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
