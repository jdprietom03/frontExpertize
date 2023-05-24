import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getPendingRequests, updateRequestStatus } from "../api/certification";
import { PendingRequestsStatus } from "../types/Types";
import DataTable, { TableColumn } from "react-data-table-component";
import light from "../styles/tableStyles";
import { Link } from "react-router-dom";

interface DataRow {
  id: number;
  name: string;
  status: string;
  fullname: string;
}

const columns: TableColumn<DataRow>[] = [
  {
    name: "Technology",
    selector: (row: { name: any }) => row.name,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) =>
      row.fullname
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
    sortable: true,
  },
  {
    name: "Action",
    cell:(row) => (
        <ApiButton id={row.id} />
    )
  }
];

export default function Home() {
  const [data, setData] = useState<PendingRequestsStatus[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const data = getPendingRequests();
    data.then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex flex-wrap ">
        <div className="mt-8 mx-auto w-full max-w-prose rounded-xl">
          <DataTable
            columns={columns}
            data={data}
            pagination
            selectableRows
            customStyles={light}
            progressPending={loading}
          />
        </div>
      </div>
    </>
  );
}

const ApiButton = ({ id }: { id: number }) => {
    const handleClick = () => {
      const requestData = {
        id: id,
        status: "COMPLETED",
      };
  
      // Llamar al método updateStatus con el objeto requestData
      updateRequestStatus(requestData);
    };
  
    return (
      <div className="form-button">
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Approve
      </button>
      </div>
    );
  };