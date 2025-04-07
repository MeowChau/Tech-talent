// src/api/api.ts
import axios from 'axios';
import { Job } from '../models/Job';
import { Company } from '../models/Company';
import { CV } from '../models/CV';

const BASE_URL = 'http://localhost:3001';

// Job Services
export const fetchJobs = async () => {
    const response = await axios.get<Job[]>(`${BASE_URL}/jobs`);
    return response.data;
};

export const fetchJobById = async (id: string) => {
    const response = await axios.get<Job>(`${BASE_URL}/jobs/${id}`);
    return response.data;
};

export const createJob = async (job: Job) => {
    const response = await axios.post<Job>(`${BASE_URL}/jobs`, job);
    return response.data;
};

export const updateJob = async (id: string, job: Job) => {
    const response = await axios.put<Job>(`${BASE_URL}/jobs/${id}`, job);
    return response.data;
};

export const deleteJob = async (id: string) => {
    await axios.delete(`${BASE_URL}/jobs/${id}`);
};

// Company Services
export const fetchCompanies = async () => {
    const response = await axios.get<Company[]>(`${BASE_URL}/companies`);
    return response.data;
};

export const fetchCompanyById = async (id: string) => {
    const response = await axios.get<Company>(`${BASE_URL}/companies/${id}`);
    return response.data;
};

// CV Services
export const fetchCVs = async () => {
    const response = await axios.get<CV[]>(`${BASE_URL}/cvs`);
    return response.data;
};

export const fetchCVById = async (id: string) => {
    const response = await axios.get<CV>(`${BASE_URL}/cvs/${id}`);
    return response.data;
};

export const createCV = async (cv: CV) => {
    const response = await axios.post<CV>(`${BASE_URL}/cvs`, cv);
    return response.data;
};

export const updateCVStatus = async (id: string) => {
    await axios.patch(`${BASE_URL}/cvs/${id}`, { statusRead: true });
};

export const deleteCV = async (id: string) => {
    await axios.delete(`${BASE_URL}/cvs/${id}`);
};