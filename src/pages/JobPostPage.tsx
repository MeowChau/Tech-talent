import { useState } from 'react';
import { Form, Input, Button, Select, InputNumber, message, Card } from 'antd';
import { useForm } from 'react-hook-form';
import { DollarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { postJob } from '../api/jobs';
import { JobPostFormData } from '../types/job';

const { TextArea } = Input;
const { Option } = Select;

const JobPostPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm<JobPostFormData>();

  const onSubmit = async (data: JobPostFormData) => {
    setLoading(true);
    try {
      await postJob({
        ...data,
        requirements: data.requirements.split('\n').filter(item => item.trim()),
        benefits: data.benefits.split('\n').filter(item => item.trim()),
        isRemote: data.isRemote === 'yes',
      });
      message.success('Đăng tin tuyển dụng thành công!');
      navigate('/');
    } catch (error) {
      message.error('Có lỗi xảy ra khi đăng tin');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '24px 16px' }}>
      <Card title="Đăng tin tuyển dụng mới" bordered={false}>
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Form.Item label="Tiêu đề công việc" required>
            <Input
              {...control.register('title', { required: true })}
              placeholder="Ví dụ: Senior React Developer"
            />
            {errors.title && <span style={{ color: 'red' }}>Vui lòng nhập tiêu đề</span>}
          </Form.Item>

          <Form.Item label="Tên công ty" required>
            <Input
              {...control.register('company', { required: true })}
              placeholder="Tên công ty của bạn"
            />
            {errors.company && <span style={{ color: 'red' }}>Vui lòng nhập tên công ty</span>}
          </Form.Item>

          <Form.Item label="Địa điểm làm việc" required>
            <Input
              {...control.register('location', { required: true })}
              prefix={<EnvironmentOutlined />}
              placeholder="Ví dụ: Hà Nội hoặc Remote"
            />
            {errors.location && <span style={{ color: 'red' }}>Vui lòng nhập địa điểm</span>}
          </Form.Item>

          <Form.Item label="Mức lương" required>
            <Input
              {...control.register('salary', { required: true })}
              prefix={<DollarOutlined />}
              placeholder="Ví dụ: $2000 - $3000 hoặc Thương lượng"
            />
            {errors.salary && <span style={{ color: 'red' }}>Vui lòng nhập mức lương</span>}
          </Form.Item>

          <Form.Item label="Loại công việc" required>
            <Select
              {...control.register('jobType')}
              defaultValue="full-time"
            >
              <Option value="full-time">Toàn thời gian</Option>
              <Option value="part-time">Bán thời gian</Option>
              <Option value="contract">Hợp đồng</Option>
              <Option value="internship">Thực tập</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Làm việc từ xa">
            <Select
              {...control.register('isRemote')}
              defaultValue="no"
            >
              <Option value="yes">Có</Option>
              <Option value="no">Không</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Mô tả công việc" required>
            <TextArea
              {...control.register('description', { required: true })}
              rows={4}
              placeholder="Mô tả chi tiết về công việc..."
            />
            {errors.description && <span style={{ color: 'red' }}>Vui lòng nhập mô tả</span>}
          </Form.Item>

          <Form.Item label="Yêu cầu công việc (mỗi yêu cầu trên 1 dòng)" required>
            <TextArea
              {...control.register('requirements', { required: true })}
              rows={4}
              placeholder="Ví dụ:\n3+ năm kinh nghiệm React\nThành thạo TypeScript"
            />
            {errors.requirements && <span style={{ color: 'red' }}>Vui lòng nhập yêu cầu</span>}
          </Form.Item>

          <Form.Item label="Phúc lợi (mỗi phúc lợi trên 1 dòng)">
            <TextArea
              {...control.register('benefits')}
              rows={4}
              placeholder="Ví dụ:\nBảo hiểm sức khỏe\nLàm việc từ xa"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} size="large">
              Đăng tin tuyển dụng
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default JobPostPage;