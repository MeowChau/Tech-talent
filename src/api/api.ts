// src/api/api.ts
import axios from 'axios';
import { Job } from '../models/Job';
import { Company } from '../models/Company';
import { CV } from '../models/CV';

const BASE_URL = 'http://localhost:3001';

// Tạo đối tượng axios với cấu hình mặc định
const api = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
});

// Hàm đăng nhập admin
export const loginAdmin = async (data: { email: string; password: string }) => {
    const adminEmail = "admin@example.com";  // Email admin giả định
    const adminPassword = "admin123";         // Mật khẩu admin giả định

    if (data.email === adminEmail && data.password === adminPassword) {
        return {
            data: {
                token: 'mockToken123', // Token giả định
            },
        };
    } else {
        throw new Error("Invalid credentials");
    }
};

// Job Services
export const fetchJobs = async (): Promise<Job[]> => {
    const response = await api.get('/jobs');
    return response.data;
};

export const fetchJobById = async (id: string): Promise<Job> => {
    const response = await api.get(`/jobs/${id}`);
    return response.data;
};

export const createJob = async (job: Job): Promise<Job> => {
    const response = await api.post('/jobs', job);
    return response.data;
};

export const updateJob = async (id: string, job: Job): Promise<Job> => {
    const response = await api.put(`/jobs/${id}`, job);
    return response.data;
};

export const deleteJob = async (id: string): Promise<void> => {
    await api.delete(`/jobs/${id}`);
};

// Company Services
export const fetchCompanies = async (): Promise<Company[]> => {
    const response = await api.get('/companies');
    return response.data;
};

export const fetchCompanyById = async (id: string): Promise<Company> => {
    const response = await api.get(`/companies/${id}`);
    return response.data;
};

// CV Services
export const fetchCVs = async (): Promise<CV[]> => {
    const response = await api.get('/cvs');
    return response.data;
};

export const fetchCVById = async (id: string): Promise<CV> => {
    const response = await api.get(`/cvs/${id}`);
    return response.data;
};

export const createCV = async (cv: CV): Promise<CV> => {
    const response = await api.post('/cvs', cv);
    return response.data;
};

export const updateCVStatus = async (id: string): Promise<void> => {
    await api.patch(`/cvs/${id}`, { statusRead: true });
};

export const deleteCV = async (id: string): Promise<void> => {
    await api.delete(`/cvs/${id}`);
};