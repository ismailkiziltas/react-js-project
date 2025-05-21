import React, { useEffect, useState } from "react";
import "./_users.scss";
import Table from "../../components/table";

const Users = () => {
  const columns = [
    { key: "name", label: "Ad" },
    { key: "age", label: "Yaş" },
    { key: "email", label: "E-posta" },
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        const mapped = users.map((user) => ({
          name: user.name,
          age: Math.floor(Math.random() * 30) + 20,
          email: user.email,
        }));
        setData(mapped);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <div>Yükleniyor...</div>
      ) : (
        <Table columns={columns} data={data} pageSize={5} />
      )}
    </div>
  );
};

export default Users;
