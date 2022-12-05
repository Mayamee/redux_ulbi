import { FC } from "react";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer: FC<unknown> = () => {
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = postApi.useFetchAllPostsQuery(10, {
		pollingInterval: 1000,
	});
  return (
    <div>
      <button onClick={() => refetch()}>Refetch</button>
      <div className="post__list">
        {isLoading && <div>Loading...</div>}
        {error && <div>Произошла ошибка</div>}
        {posts &&
          posts.map((post, index) => (
            <PostItem
              body={post.body}
              id={post.id}
              key={`${index}-${post.id}`}
              title={post.title}
            />
          ))}
      </div>
    </div>
  );
};
export default PostContainer;
