// src/models/Job.ts
export interface Job {
    id: string;
    idCompany: string;
    name: string;
    tags: string[];
    salary: number;
    description: string;
    status: boolean;
    city: string[];
    createAt: string;
    updateAt: string;
}