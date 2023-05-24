import DataTable, { createTheme, TableColumn } from "react-data-table-component";
import light from "../../styles/tableStyles"
import { getCookie } from "../../api/cookie";
import { getRanking } from "../../api/ranking";
import { useEffect, useState } from "react"
import { RankingResponse } from "../../types/Types";

interface DataRow {
    id: number;
    rank: number;
    username: string;
    points: number;
}

const columns: TableColumn<DataRow>[] = [
    {
        name: 'Ranking',
        selector: row => row.rank,
        sortable: true
    },
    {
        name: 'Username',
        selector: row => row.username,
    },
    {
        name: 'Points',
        selector: row=> row.points,
        sortable: true
    },
];



const LeaderboardTable = () => {
    const [rankingData, setRankingData] = useState<RankingResponse>({});

    useEffect( () => {
        const rankingCall = getRanking()

        rankingCall.then( response => {
            response.ranking = response.ranking?.map( userRanked => {
                userRanked.id = userRanked.rank;

                return userRanked
            })
            setRankingData(response)
        })


    }, [])

    const data =  rankingData.ranking || []
    
const conditionalRowStyles = [
    {
        when: (cells: { username: string; }) => cells.username == rankingData.myrank?.username,
        style: {
            backgroundColor: '#000',
            color: 'white',
        },
        classNames: ['pruebita']
    }
];


    return(
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-prose rounded-xl">
            <DataTable
                columns={columns}
                data={data}
                customStyles={light}
                pagination
                conditionalRowStyles={conditionalRowStyles}
            />
        </div>
    );
}

export default LeaderboardTable;

