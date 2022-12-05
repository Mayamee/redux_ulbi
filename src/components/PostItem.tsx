import { FC } from "react";
import { IPost } from "../models/IPost";

interface IPostItem {
	post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<IPostItem> = ({post, remove, update }) => {
  return (
    <div
      className="post"
      onClick={() => {
        const title = prompt("Enter title");
        if (title) {
          update({ ...post, title });
        }
      }}
    >
      {post.id}. {post.title}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          remove(post);
        }}
      >
        X
      </button>
    </div>
  );
};
export default PostItem;
