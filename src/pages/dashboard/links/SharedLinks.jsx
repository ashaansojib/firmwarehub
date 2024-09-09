import React from "react";
import { DTitile } from "../../../components/DTitle";
import { useForm } from "react-hook-form";
import { useAddSharedLinkMutation } from "../../../redux/features/SharedLinkSlice";

const SharedLinks = () => {
  const [addLink] = useAddSharedLinkMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addLink(data);
    reset();
  };
  return (
    <div className="p-2">
      <DTitile title="Add Shared Links..." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
        <div>
          <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Link Titile"
            />
            <input
              type="text"
              {...register("url", { required: true })}
              placeholder="Link"
            />
            <input
              type="text"
              {...register("category", { required: true })}
              placeholder="Category"
            />
            <input
              type="submit"
              value="Add Link"
              className="d-btn cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SharedLinks;
