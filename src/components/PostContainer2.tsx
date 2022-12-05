import { FC } from "react";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer2: FC<unknown> = () => {
  const { data: posts, isLoading, error } = postApi.useFetchAllPostsQuery(10);
  return (
    <div>
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
export default PostContainer2;
