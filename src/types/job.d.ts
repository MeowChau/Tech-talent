interface Company {
    id: string;
    companyName: string;
    phone: string;
    email: string;
    password?: string;
    token?: string;
    address: string;
    workingTime: string;
    website: string;
    quantityPeople: string;
    description: string;
    detail: string;
  }
  
  interface City {
    key: string;
    value: string;
  }
  
  interface Tag {
    key: string;
    value: string;
  }
  
  interface Job {
    id: string;
    idCompany: string;
    name: string;
    tags: string[];
    salary: string;
    description: string;
    status: boolean;
    city: string[];
    createAt: string;
    updateAt: string;
    company?: Company; // Thông tin công ty (join từ API)
  }
  
  interface CV {
    id: string;
    idCompany: string;
    idJob: string;
    name: string;
    phone: string;
    email: string;
    description: string;
    linkProject: string;
    city: string;
    statusRead: boolean;
    createAt: string;
  }
  
  interface JobPostFormData {
    idCompany: string;
    name: string;
    tags: string[];
    salary: string;
    description: string;
    city: string[];
  }
  
  export type { Company, City, Tag, Job, CV, JobPostFormData };