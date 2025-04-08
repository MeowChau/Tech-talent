export interface Job {
    id: string;
    name: string;
    city: string[];
    deadline: string;
    unit: string; // Added the 'unit' property
}