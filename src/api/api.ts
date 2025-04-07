import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // URL cho json-server

// Hàm lấy danh sách công ty
export const fetchCompanies = async () => {
    const response = await axios.get(`${BASE_URL}/companies`);
    return response.data; // Trả về dữ liệu danh sách công ty
};

// Hàm lấy danh sách công việc
export const fetchJobs = async () => {
    const response = await axios.get(`${BASE_URL}/jobs`);
    return response.data; // Trả về dữ liệu danh sách công việc
};

// Hàm lấy chi tiết công việc theo ID
export const fetchJobById = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/jobs/${id}`);
    return response.data; // Trả về chi tiết công việc theo ID
};

// Hàm lấy chi tiết công ty theo ID
export const fetchCompanyById = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/companies/${id}`);
    return response.data; // Trả về chi tiết công ty theo ID
};

// Hàm lấy danh sách thành phố
export const fetchCities = async () => {
    const response = await axios.get(`${BASE_URL}/cities`);
    return response.data;
};

// Hàm lấy danh sách thẻ ngôn ngữ
export const fetchTags = async () => {
    const response = await axios.get(`${BASE_URL}/tags`);
    return response.data;
};

// Hàm lấy danh sách CV
export const fetchCVs = async () => {
    const response = await axios.get(`${BASE_URL}/cvs`);
    return response.data;
};