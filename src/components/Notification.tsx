import React from 'react';
import { notification } from 'antd';

interface NotificationProps {
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
    description?: string;
}

const Notification: React.FC<NotificationProps> = ({ type, message, description }) => {
    const openNotification = () => {
        notification[type]({
            message,
            description,
        });
    };

    return (
        <div>
            <button onClick={openNotification}>Show Notification</button>
        </div>
    );
};

export default Notification;