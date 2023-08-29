import './App.css';
import { useMutation, useQuery } from '@apollo/client';
import { getAllPosts } from './GraphQl/Query';
import { CREATE_POST, DELETE_POST } from './GraphQl/Mutations';

function App() {
  const { loading, error, data } = useQuery(getAllPosts);
  const [createPost] = useMutation(CREATE_POST);
  const [deletePost] = useMutation(DELETE_POST);

  if (loading) return "Loading...";
  if (error) return "Error....";

  const addPost = async () => {
    await createPost({
      variables: {
        title: "This is 4th post",
        description: "GraphQL is a query language for your API, and a server-side runtime for executing queries ",
      },
      refetchQueries: [{ query: getAllPosts }],
    });
  };

  const removePost = async (id) => {
    console.log("id", id);
    await deletePost({
      variables: {
        id: id,
      },
      refetchQueries: [{ query: getAllPosts }]
    });
  };

  return (
    <>
      <div className="App">
        {data?.getAllPosts?.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <button onClick={() => removePost(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => addPost()}>Add post</button>
      </div>
    </>
  );
}

export default App;
