import React from "react";
import { DTitile } from "../../../components/DTitle";
import { useForm } from "react-hook-form";
import {
  useAddSharedLinkMutation,
  useAllSharedLinksQuery,
  useRemoveSharedLinkMutation,
} from "../../../redux/features/SharedLinkSlice";
import MyLoader from "../../../components/MyLoader";

const SharedLinks = () => {
  const [addLink] = useAddSharedLinkMutation();
  const { data: SharedLink, isLoading } = useAllSharedLinksQuery();
  const [removeLink] = useRemoveSharedLinkMutation();
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
  const handleRemove = (id) => {
    removeLink(id);
  };
  return (
    <div className="p-2">
      <DTitile title="Add Shared Links And Managed..." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
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
        <div>
          {isLoading ? (
            <MyLoader />
          ) : (
            SharedLink?.data.map((item) => (
              <div key={item._id}>
                <p>{item.title}</p>
                <span className="text-red-500">{item.category}</span>
                <span
                  onClick={() => handleRemove(item._id)}
                  className="p-1 bg-primary rounded-md text-red-500 mx-2"
                >
                  Remove
                </span>
                <span className="italic text-sm text-gray-400">{item.url} </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SharedLinks;
