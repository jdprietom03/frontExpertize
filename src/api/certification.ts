import { CertificationResponse, PendingRequestsStatus, Seniority, SeniorityRequestStatus } from "../types/Types";
import axios from "axios";
import { getCookie } from "./cookie";

export const getCertificationRequests = ():Promise<CertificationResponse>  => {

    const userData = JSON.parse(getCookie("user") || "{}")
    const { token, id } = userData
    return axios.get(`http://34.29.188.95:80/certifications/${id}`, 
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    )
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return [];
    });
}

export const uploadCertification = (data: FormData):Promise<any[]>  => {

    const userData = JSON.parse(getCookie("user") || "{}")
    const { token, id} = userData
    data.append("user_id", id)
    return axios.post('http://34.29.188.95:80/certifications/upload', data,
    {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
    }
    )
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return [];
    });
}

export const getPendingRequests = ():Promise<PendingRequestsStatus[]>  => {

    const userData = JSON.parse(getCookie("user") || "{}")
    const { token } = userData
    return axios.get(`http://34.29.188.95:80/certifications/pending`, 
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    )
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return [];
    });
}

export const updateRequestStatus = (data:any):Promise<any>  => {

    const userData = JSON.parse(getCookie("user") || "{}")
    const { token } = userData
    return axios.put(`http://34.29.188.95:80/certifications/update`, data,
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    )
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return [];
    });
}

export const getSeniorityRequests = ():Promise<SeniorityRequestStatus[]>  => {

    const userData = JSON.parse(getCookie("user") || "{}")
    const { token } = userData
    return axios.get(`http://34.29.188.95:80/certifications/seniority`, 
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    )
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return [];
    });
}

export const createSeniorityRequestStatus = (data:any):Promise<any>  => {

    const userData = JSON.parse(getCookie("user") || "{}")
    const { token } = userData
    return axios.post(`http://34.29.188.95:80/certifications/seniority`, data,
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    )
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return [];
    });
}

export const updateSeniorityRequestStatus = (data:any):Promise<any>  => {

    const userData = JSON.parse(getCookie("user") || "{}")
    const { token } = userData
    return axios.put(`http://34.29.188.95:80/certifications/seniority`, data,
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    )
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return [];
    });
}