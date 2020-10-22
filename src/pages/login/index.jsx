import React, {Component} from 'react';
import {Form, Input, Button} from 'antd';

export default function Login () {

    const onFinish = () => {
        
    }

    return (
        <>
            <Form onFinish={onFinish}>
                <Form.Item>
                    <Input></Input>                    
                </Form.Item>

                <Form.Item>
                    <Input></Input>
                </Form.Item>

                <Button>
                    登录
                </Button>
            </Form>
        </>
    )
}