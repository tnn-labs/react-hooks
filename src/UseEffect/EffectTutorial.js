import { useEffect, useState } from "react";
import axios from "axios";

const EffectTutorial = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <h1>EffectTutorial</h1>
      {Object.values(data).map(article => (
          <div key={article.id}>
            <h2>{article.id} - {article.title}</h2>
            <p>{article.body}</p>
            <hr/>
          </div>
        )
      )};
    </>
  );
};

export default EffectTutorial;
