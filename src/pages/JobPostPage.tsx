import { useState, useEffect } from 'react';
import { Form, Select, message } from 'antd';
import { useForm } from 'react-hook-form';
import { getCompanies, getCities, getTags, postJob } from '../api/job';
import { JobPostFormData, Company, City, Tag } from '../types/job.d';

// Removed unused TextArea to resolve the compile error
const { Option } = Select;

const JobPostPage = () => {
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  
  const { handleSubmit } = useForm<JobPostFormData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [companiesRes, citiesRes, tagsRes] = await Promise.all([
          getCompanies(),
          getCities(),
          getTags()
        ]);
        setCompanies(companiesRes);
        setCities(citiesRes);
        setTags(tagsRes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  const onSubmit = async (data: JobPostFormData) => {
    setLoading(true);
    try {
      await postJob(data);
      message.success('Đăng tin tuyển dụng thành công!');
    } catch (error) {
      message.error('Có lỗi xảy ra khi đăng tin');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
      {/* Các trường form tương tự như trước nhưng cập nhật theo cấu trúc mới */}
      <Form.Item label="Công ty" name="idCompany" rules={[{ required: true }]}>
        <Select placeholder="Chọn công ty">
          {companies.map(company => (
            <Option key={company.id} value={company.id}>
              {company.companyName}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Thành phố" name="city" rules={[{ required: true }]}>
        <Select mode="multiple" placeholder="Chọn thành phố">
          {cities.map(city => (
            <Option key={city.key} value={city.key}>
              {city.value}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Ngôn ngữ yêu cầu" name="tags" rules={[{ required: true }]}>
        <Select mode="multiple" placeholder="Chọn ngôn ngữ">
          {tags.map(tag => (
            <Option key={tag.key} value={tag.key}>
              {tag.value}
            </Option>
          ))}
        </Select>
      </Form.Item>

      {/* Các trường khác... */}
      <Form.Item>
        <button type="submit" disabled={loading}>
          {loading ? 'Đang xử lý...' : 'Đăng tin'}
        </button>
      </Form.Item>
    </Form>
  );
};

export default JobPostPage;