import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("./db.json")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="cards-container">
      {data &&
        data.map((item) => (
          <div key={item.id} className="card-content">
            <div
              className="card-cover"
              style={{ backgroundImage: `url(${item.cover})` }}
            >
              <p className="card-title">{item.title}</p>
              <p className="card-location">{item.location}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
