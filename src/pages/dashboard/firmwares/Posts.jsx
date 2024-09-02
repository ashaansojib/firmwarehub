import React from "react";
import { useForm } from "react-hook-form";

const Posts = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
  }
  return (
    <section className="p-2">
      <h3>Create a new Posts</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4 py-3 px-2">
          <div className="col-span-3">
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Write a title..."
            />
            <textarea
              {...register("description", { required: true })}
              placeholder="Write a short description..."
              rows={4}
            ></textarea>
            <p className="py-2">*Features</p>
            <div className="md:flex justify-between gap-2">
              <input
                type="text"
                {...register("brand", { required: true })}
                placeholder="Brand"
              />
              <input
                type="text"
                {...register("model", { required: true })}
                placeholder="Model"
              />
              <input
                type="text"
                {...register("chipset", { required: true })}
                placeholder="Chipset"
              />
              <input
                type="text"
                {...register("version", { required: true })}
                placeholder="Version"
              />
            </div>
          </div>
          <div className="space-y-2">
            <input
              type="text"
              {...register("link", { required: true })}
              placeholder="Download Link..."
            />
            <input
              type="text"
              {...register("category", { required: true })}
              placeholder="Category Name..."
            />
            <input
              type="text"
              {...register("image", { required: true })}
              placeholder="Image Link..."
            />
            <p>*Specifications</p>
            <div className="space-y-2">
              <input
                type="text"
                {...register("status", { required: true })}
                placeholder="File Status..."
              />
              <input
                type="text"
                {...register("Size", { required: true })}
                placeholder="File Size..."
              />
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="File Price..."
              />
            </div>
            <input type="submit" value="Publish" className="d-active" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Posts;
