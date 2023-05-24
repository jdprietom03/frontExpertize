import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { createSeniorityRequestStatus, getSeniorityRequests, updateRequestStatus, updateSeniorityRequestStatus } from "../api/certification";
import { SeniorityRequestStatus } from "../types/Types";
import DataTable, { TableColumn } from "react-data-table-component";
import light from "../styles/tableStyles";

interface DataRow {
  id: number;
  name: string;
  last_name: string;
  seniority: string;
}

const columns: TableColumn<DataRow>[] = [
  {
    name: "Seniority",
    selector: (row: { seniority: any }) => row.seniority,
  },
  {
    name: "Status",
    selector: (row) => "PENDING",
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.name + " " + row.last_name,
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
  const [data, setData] = useState<SeniorityRequestStatus[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const data = getSeniorityRequests();
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
      updateSeniorityRequestStatus(requestData)
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