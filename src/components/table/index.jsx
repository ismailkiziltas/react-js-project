import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import "./_table.scss";

const Table = ({ columns, data, pageSize = 5 }) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  const filteredData = useMemo(() => {
    let filtered = data;
    if (filter) {
      filtered = filtered.filter((row) =>
        columns.some((col) =>
          String(row[col.key]).toLowerCase().includes(filter.toLowerCase())
        )
      );
    }
    if (sortKey) {
      filtered = [...filtered].sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortAsc ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortAsc ? 1 : -1;
        return 0;
      });
    }
    return filtered;
  }, [data, filter, sortKey, sortAsc, columns]);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const pagedData = filteredData.slice((page - 1) * pageSize, page * pageSize);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setPage(1);
  };

  return (
    <div className="table-container">
      <input
        className="table-filter"
        placeholder="Filtrele..."
        value={filter}
        onChange={handleFilterChange}
      />
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                style={{ cursor: "pointer" }}
              >
                {col.label}
                {sortKey === col.key ? (sortAsc ? " ▲" : " ▼") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pagedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center" }}>
                Kayıt bulunamadı.
              </td>
            </tr>
          ) : (
            pagedData.map((row, i) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="table-pagination">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Önceki
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageSize: PropTypes.number,
};

export default Table;
