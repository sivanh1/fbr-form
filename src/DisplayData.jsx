import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

const DisplayData = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      setUsers(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
    };
    fetchData();
  }, []);

  // Function to download data as an Excel file with a serial number
  const downloadExcel = () => {
    const formattedData = users.map((user, index) => ({
      "S.No": index + 1,
      Name: user.name,
      Email: user.email,
      Phone: user.phone,
      Institution: user.institution,
      Location: user.location,
    }));
    
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "UserData.xlsx");
  };

  return (
    <div style={styles.container}>
      <div style={styles.tableContainer}>
        <h2 style={styles.title}>User Data</h2>
        {users.length === 0 ? (
          <p style={styles.noData}>No data available.</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>S.No</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Institution</th>
                <th style={styles.th}>Location</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{user.name}</td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>{user.phone}</td>
                  <td style={styles.td}>{user.institution}</td>
                  <td style={styles.td}>{user.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button onClick={downloadExcel} style={styles.downloadButton}>
          Download Excel
        </button>
        <button onClick={() => navigate("/")} style={styles.goHomeButton}>
          Go Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f3f4f6",
    padding: "20px",
  },
  tableContainer: {
    width: "100%",
    maxWidth: "700px",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: "15px",
  },
  noData: {
    fontSize: "16px",
    color: "#6b7280",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "15px",
  },
  th: {
    background: "#2563eb",
    color: "white",
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
  },
  downloadButton: {
    width: "100%",
    backgroundColor: "#10b981",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease",
    marginBottom: "10px",
  },
  goHomeButton: {
    width: "100%",
    backgroundColor: "#3b82f6",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default DisplayData;
