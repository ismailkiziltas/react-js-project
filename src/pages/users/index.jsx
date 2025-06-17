import { useEffect, useState } from "react";
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

  const token = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    fetch("http://45.94.4.223:8080/api/v1/admin/user", {
      method: "GET", // veya "POST", "PUT", "DELETE"
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + token, 
      },
    })
      .then((res) => res.json())
      .then((users) => {
        const mapped = users.map((user) => ({
          id: user.id,
          name: user.username,
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
