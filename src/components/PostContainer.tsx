import { FC } from "react";
import { IPost } from "../models/IPost";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer: FC<unknown> = () => {
  const { data: posts, isLoading, error } = postApi.useFetchAllPostsQuery(10);
  const [
    createPost,
    { error: CreateError, isLoading: isCreateLoading, data: CreateData },
  ] = postApi.useCreatePostMutation();
  const [updatePost] = postApi.useUpdatePostMutation();
  const [deletePost] = postApi.useDeletePostMutation();
  const handleCreatePost = async () => {
    const title = prompt("Enter title");
    const body = prompt("Enter body");
    await createPost({ title, body: title } as IPost);
  };
  return (
    <div>
      <button onClick={handleCreatePost}>Add new</button>
      <div className="post__list">
        {isLoading && <div>Loading...</div>}
        {error && <div>Произошла ошибка</div>}
        {posts &&
          posts.map((post, index) => (
            <PostItem
              post={post}
              key={`${index}-${post.id}`}
              remove={deletePost}
              update={updatePost}
            />
          ))}
      </div>
    </div>
  );
};
export default PostContainer;
