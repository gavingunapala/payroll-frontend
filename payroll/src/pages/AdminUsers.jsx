import React, { useMemo, useState } from "react";

const MOCK_USERS = [
  { serviceNo: "0001", rank: "Test", name: "Test", username: "admin", role: "Admin", status: "Active" },
  { serviceNo: "0002", rank: "Test", name: "Test", username: "admin2", role: "Admin", status: "Inactive" },
  { serviceNo: "0003", rank: "Test", name: "Test", username: "clark1", role: "Clark", status: "Active" },
  { serviceNo: "0004", rank: "Test", name: "Test", username: "clark2", role: "Clark", status: "Inactive" },
  { serviceNo: "0005", rank: "Test", name: "Test", username: "clark3", role: "Clark", status: "Inactive" },
  { serviceNo: "0006", rank: "Test", name: "Test", username: "clark4", role: "Clark", status: "Active" },
  { serviceNo: "0007", rank: "Test", name: "Test", username: "clark5", role: "Clark", status: "Active" },
  { serviceNo: "0008", rank: "Test", name: "Test", username: "clark6", role: "Clark", status: "Inactive" },
  { serviceNo: "0009", rank: "Test", name: "Test", username: "clark7", role: "Clark", status: "Active" },
  { serviceNo: "0010", rank: "Test", name: "Test", username: "clark8", role: "Clark", status: "Active" },
  { serviceNo: "0011", rank: "Test", name: "Test", username: "user1", role: "User", status: "Active" },
  { serviceNo: "0012", rank: "Test", name: "Test", username: "user2", role: "User", status: "Inactive" },
  { serviceNo: "0013", rank: "Test", name: "Test", username: "user3", role: "User", status: "Active" },
  { serviceNo: "0014", rank: "Test", name: "Test", username: "user4", role: "User", status: "Active" },
];

function TrashIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 3H15V5H19V7H5V5H9V3ZM7 9H17L16.2 19.2C16.13 20.18 15.32 21 14.34 21H9.66C8.68 21 7.87 20.18 7.8 19.2L7 9Z"
        fill="#dc3545"
      />
    </svg>
  );
}

export default function AdminUsers() {
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    if (!search.trim()) return MOCK_USERS;
    const q = search.toLowerCase();
    return MOCK_USERS.filter((u) =>
      [u.serviceNo, u.rank, u.name, u.username, u.role, u.status]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [search]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / rowsPerPage));
  const safePage = Math.min(page, totalPages - 1);
  const startIndex = safePage * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, total);
  const pageItems = filtered.slice(startIndex, endIndex);

  const handlePrev = () => {
    setPage((p) => Math.max(0, p - 1));
  };

  const handleNext = () => {
    setPage((p) => Math.min(totalPages - 1, p + 1));
  };

  const handleRowsChange = (e) => {
    const value = Number(e.target.value) || 10;
    setRowsPerPage(value);
    setPage(0);
  };

  return (
    <div className="bg-white rounded shadow-sm h-100 d-flex flex-column">
      <header
        className="px-3 py-2 d-flex align-items-center"
        style={{ backgroundColor: "#87CEEB", color: "#000", fontWeight: 500 }}
      >
        <span>User Details - Sri Lanka Air Force</span>
      </header>

      <div className="px-3 py-2 border-bottom">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search For"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>

      <div className="flex-grow-1 overflow-auto">
        <div className="table-responsive">
          <table className="table table-sm table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th scope="col">Service No</th>
                <th scope="col">Rank</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
                <th scope="col" className="text-end">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {pageItems.map((user) => (
                <tr key={user.serviceNo}>
                  <td>{user.serviceNo}</td>
                  <td>{user.rank}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>{user.status}</td>
                  <td className="text-end">
                    <button
                      type="button"
                      className="btn btn-link p-0"
                      title="Delete"
                    >
                      <TrashIcon />
                    </button>
                  </td>
                </tr>
              ))}
              {pageItems.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-4 text-muted">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <footer className="px-3 py-2 border-top d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <span className="small text-muted">Rows per page:</span>
          <select
            className="form-select form-select-sm"
            style={{ width: "80px" }}
            value={rowsPerPage}
            onChange={handleRowsChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
        </div>

        <div className="small text-muted">
          {total === 0 ? "0 of 0" : `${startIndex + 1} - ${endIndex} of ${total}`}
        </div>

        <div className="d-flex align-items-center gap-1">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={handlePrev}
            disabled={safePage === 0}
          >
            &lt;
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={handleNext}
            disabled={safePage >= totalPages - 1}
          >
            &gt;
          </button>
        </div>
      </footer>
    </div>
  );
}

