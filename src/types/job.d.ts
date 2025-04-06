interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    description: string;
    requirements: string[];
    benefits: string[];
    postedAt: string;
    isRemote: boolean;
    jobType: 'full-time' | 'part-time' | 'contract' | 'internship';
  }
  
  interface JobPostFormData {
    title: string;
    company: string;
    location: string;
    salary: string;
    description: string;
    requirements: string;
    benefits: string;
    isRemote: string; // 'yes' | 'no'
    jobType: string;
  }
  
  export type { Job, JobPostFormData };