// src/pages/Job/JobManagement.tsx
import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, Select, notification } from 'antd';
import { fetchJobs, createJob, deleteJob, updateJob } from '../../api/api';
import fetchTags from '../../api/api';
import { Option } from 'antd/es/mentions';
import { Job } from '../../models/Job';

const JobManagement: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [visible, setVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentJob, setCurrentJob] = useState<Job | null>(null);
    const [tags, setTags] = useState<{ key: string; value: string }[]>([]);

    useEffect(() => {
        const loadJobs = async () => {
            const jobsData = await fetchJobs();
            setJobs(jobsData);
        };

        const loadTags = async () => {
            const response = await fetchTags({});
            setTags(response.data);
        };

        loadJobs();
        loadTags();
    }, []);

    const showJobModal = (job?: Job) => {
        if (job) {
            setCurrentJob(job);
            setIsEditing(true);
        } else {
            setCurrentJob(null);
            setIsEditing(false);
        }
        setVisible(true);
    };

    const handleDelete = async (jobId: string) => {
        await deleteJob(jobId);
        notification.success({ message: 'Job Đã Được Xóa' });
        setJobs(jobs.filter(job => job.id !== jobId));
    };

    const handleFinish = async (values: Job) => {
        const job = {
            ...values,
            createAt: new Date().toISOString(),
            updateAt: new Date().toISOString(),
            idCompany: "1", // Lưu ý: Thay thế bằng ID công ty thực tế
        };

        if (isEditing && currentJob) {
            await updateJob(currentJob.id, { ...job, updateAt: new Date().toISOString() });
            notification.success({ message: 'Job Đã Được Cập Nhật' });
        } else {
            await createJob(job);
            notification.success({ message: 'Job Mới Đã Được Tạo' });
        }

        setVisible(false);
        const updatedJobs = await fetchJobs();
        setJobs(updatedJobs);
    };

    return (
        <div>
            <Button type="primary" onClick={() => showJobModal()}>Tạo Job Mới</Button>
            <Table dataSource={jobs} rowKey="id">
                <Table.Column title="Tên Job" dataIndex="name" />
                <Table.Column title="Tags" dataIndex="tags" render={(tags) => tags.join(', ')} />
                <Table.Column title="Mức Lương" dataIndex="salary" />
                <Table.Column title="Ngày Đăng" dataIndex="createAt" />
                <Table.Column title="Trạng Thái" dataIndex="status" render={(status) => (status ? 'Bật' : 'Tắt')} />
                <Table.Column
                    title="Hành Động"
                    render={(text, record: Job) => (
                        <>
                            <Button onClick={() => showJobModal(record)}>Chỉnh Sửa</Button>
                            <Button onClick={() => handleDelete(record.id)} danger>Xóa</Button>
                        </>
                    )}
                />
            </Table>

            <Modal
                title={isEditing ? 'Chỉnh Sửa Job' : 'Tạo Job Mới'}
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
            >
                <Form initialValues={currentJob || undefined} onFinish={handleFinish}>
                    <Form.Item name="name" label="Tên Job" rules={[{ required: true }]}>
                        <Input placeholder="Tên Job" />
                    </Form.Item>
                    <Form.Item name="tags" label="Tags" rules={[{ required: true }]}>
                        <Select mode="multiple" placeholder="Chọn Tags">
                            {tags.map(tag => (
                                <Option key={tag.key} value={tag.value}>{tag.value}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item name="salary" label="Mức Lương" rules={[{ required: true }]}>
                        <Input placeholder="Mức Lương" />
                    </Form.Item>
                    <Form.Item name="description" label="Mô Tả Job" rules={[{ required: true }]}>
                        <Input.TextArea placeholder="Mô Tả Job" />
                    </Form.Item>
                    <Form.Item name="status" label="Trạng Thái">
                        <Select>
                            <Option value="true">Bật</Option>
                            <Option value="false">Tắt</Option>
                        </Select>
                    </Form.Item>
                    <Button type="primary" htmlType="submit">{isEditing ? 'Cập Nhật' : 'Tạo'}</Button>
                </Form>
            </Modal>
        </div>
    );
};

export default JobManagement;