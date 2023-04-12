import CreatePost from "@/components/CreatePost/CreatePost";
import RestrictedRoute from "@/context/RestrictedRoute";

const Create = () => {
  return (
    <RestrictedRoute>
      <CreatePost />;
    </RestrictedRoute>
  );
};

export default Create;
