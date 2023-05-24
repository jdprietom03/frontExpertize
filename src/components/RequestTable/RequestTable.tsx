import DataTable, { TableColumn } from "react-data-table-component";
import light from "../../styles/tableStyles";
import { CertificationStatus } from "../../types/Types";



interface DataRow {
    id: number;
    name: string;
    status: string;
}

const columns: TableColumn<DataRow>[] = [
    {
        name: 'Technology',
        selector: (row: { name: any; }) => row.name,
    },
    {
        name: 'Status',
        selector: row=> row.status,
        sortable: true
    },
];

const RequestTable = ({ loading, certificationsHistory }: { loading:boolean, certificationsHistory: CertificationStatus[] | any}) => {

    return(
        <div className="mt-8 mx-auto w-full max-w-prose rounded-xl">
            <DataTable
                columns={columns}
                data={certificationsHistory}
                pagination
                selectableRows
                customStyles={light}
                progressPending={loading}
            />
        </div>
    );
}

export default RequestTable;

