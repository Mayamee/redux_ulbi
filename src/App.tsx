import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { userSlice } from "./store/reducers/UserSlice";

function App() {
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      {isLoading && <div>Loading...</div>}
			{error && <div>{error}</div>}
      <div className="App">{JSON.stringify(users, null, 2)}</div>
    </>
  );
}

export default App;
