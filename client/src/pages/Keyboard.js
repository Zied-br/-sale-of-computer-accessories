import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchAccessory } from "../redux/actions/postActions";
import Post from "../components/Post/Post";
import "./AllPost.js/allPost.css";
const Keyboard = () => {
    const dispatch = useDispatch();
   const postList = useSelector((state) => state.postReducers.postList);
  
    useEffect(() => {
      dispatch(switchAccessory("keyboard"));
    }, [dispatch]);
 console.log(postList[2].accessory)
    return (
      <div className="lista">
      
        {postList
          .filter((post) => post.accessory && post.accessory.toLowerCase() === "keyboard")
               .map((post, i) => <Post key={i} post={post} />).reverse()}
   
      </div>
    );
  };
  
  export default Keyboard;
  