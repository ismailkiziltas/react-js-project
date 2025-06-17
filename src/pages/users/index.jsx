import { useEffect, useState } from "react";
import "./_users.scss";
import Table from "../../components/table";

const Users = () => {
  const columns = [
    { key: "username", label: "Ad" },
    { key: "birthday", label: "Yaş" },
    { key: "email", label: "E-posta" },
    { key: "gender", label: "Cinsiyet" },
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = import.meta.env.VITE_API_TOKEN;
  const url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${url}/api/v1/admin/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((users) => {
        setData(users);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [token, url]);

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
