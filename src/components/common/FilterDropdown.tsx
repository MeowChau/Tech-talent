import React from 'react';
import { Dropdown, Menu, Checkbox, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

interface FilterDropdownProps {
    title: string;
    options: string[];
    selectedOptions: string[];
    onChange: (item: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ title, options, selectedOptions, onChange }) => {
    const menu = (
        <Menu>
            {options.map((item) => (
                <Menu.Item key={item}>
                    <Checkbox
                        checked={selectedOptions.includes(item)}
                        onChange={() => onChange(item)}
                    >
                        {item}
                    </Checkbox>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div style={{ width: '100%', marginBottom: '10px' }}>
            <Dropdown overlay={menu} trigger={['click']}>
                <Button style={{ width: '100%', textAlign: 'left' }}>
                    {title} <DownOutlined />
                </Button>
            </Dropdown>
        </div>
    );
};

export default FilterDropdown;