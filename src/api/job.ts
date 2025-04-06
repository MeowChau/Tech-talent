import axios from 'axios';
import { Job, Company, CV, JobPostFormData, City, Tag } from '../types/job';

const API_URL = 'http://localhost:3001'; // Giả định endpoint API

// Lấy danh sách công việc
export const getJobs = async (): Promise<Job[]> => {
  try {
    const response = await axios.get(`${API_URL}/jobs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Lấy thông tin chi tiết công việc
export const getJobById = async (id: string): Promise<Job> => {
  try {
    const response = await axios.get(`${API_URL}/jobs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching job:', error);
    throw error;
  }
};

// Đăng công việc mới
export const postJob = async (jobData: JobPostFormData): Promise<Job> => {
  try {
    const response = await axios.post(`${API_URL}/jobs`, jobData);
    return response.data;
  } catch (error) {
    console.error('Error posting job:', error);
    throw error;
  }
};

// Lấy danh sách công ty
export const getCompanies = async (): Promise<Company[]> => {
  try {
    const response = await axios.get(`${API_URL}/companies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};

// Lấy danh sách thành phố
export const getCities = async (): Promise<City[]> => {
  try {
    const response = await axios.get(`${API_URL}/cities`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};

// Lấy danh sách tags (ngôn ngữ)
export const getTags = async (): Promise<Tag[]> => {
  try {
    const response = await axios.get(`${API_URL}/tags`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
};

// Gửi CV ứng tuyển
export const submitCV = async (cvData: Omit<CV, 'id' | 'createAt' | 'statusRead'>): Promise<CV> => {
  try {
    const response = await axios.post(`${API_URL}/cvs`, {
      ...cvData,
      statusRead: false,
      createAt: new Date().toISOString()
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting CV:', error);
    throw error;
  }
};