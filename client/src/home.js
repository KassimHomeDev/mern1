import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "./api/posts";
import Post from "./components/post";

const Home = () => {
  const testText =
    "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise";
  const [data, setData] = useState();
  
  useEffect(() => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }
    const fetchPosts = async () => {
      try {
        const response = await api.get("get", {config});
        setData(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log("ERRO!!!!!!!!");
        if (err.response) {
          // not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.headers);
          console.log(err.response.status);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  return (
    <Contenair>
      {data &&
        data.map((res, index) => (
          <Post key={index} tile={res.title} text={res.text} />
        ))}
    </Contenair>
  );
};

const Contenair = styled.div`
  position: relative;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Home;
