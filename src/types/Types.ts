export interface ControlsProps {
    name: string;
    url: string;
}

export interface Requirement {
    id: string;
    name: string;
    description: string;
    status: string;
    controls?: ControlsProps[];
}

export interface StyleProps {
    classes: string[];
    icon: string;
}

export interface Seniority {
    name: string;
    description: string;
    requirements?: Requirement[];
    priorTo?: string[];
    style: StyleProps;
    status: string;
    type: string;

}

export interface RankingResponse {
    ranking?: UserRanked[];
    myrank?: UserRanked;
}

export interface UserRanked {
    id: number;
    rank: number;
    username: string;
    points: number;
}

export interface CertificationResponse {
    certifications_history?: CertificationStatus[];
    available_requirements?: Requirement[];
}

export interface CertificationStatus {
    id: number;
    name: string;
    status: string;
}

export interface PendingRequestsStatus extends CertificationStatus {
    fullname: string;
}

export interface SeniorityRequestStatus {
    id: number;
    name: string;
    last_name: string;
    seniority: string;
}