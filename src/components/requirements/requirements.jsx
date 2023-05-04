import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Requirements = () => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=51a2aa2785884f64a58ef1dbd153b504`
        );
        setGame(response.data.platforms);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="requirements mt-5">
      {game.map((platform) => (
        <div key={platform.platform.id}>
          <h2>System Requirements For {platform.platform.name}</h2>
          {platform.requirements ? (
            <ul>
              {Object.entries(platform.requirements).map(([key, value]) => (
                <li key={key}>
                  {value.split("\n").map((line, i) => {
                    const boldRegex = /^(.*?):\s*/;
                    const boldMatch = line.match(boldRegex);
                    if (boldMatch) {
                      return (
                        <React.Fragment key={i}>
                          <strong>{boldMatch[1]}: </strong>
                          {line.replace(boldRegex, "")}
                          <br />
                        </React.Fragment>
                      );
                    } else {
                      return (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      );
                    }
                  })}
                </li>
              ))}
            </ul>
          ) : (
            <p>N/A</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Requirements;
