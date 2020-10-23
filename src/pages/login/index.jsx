import React from 'react';
import {Form, Input, Button} from 'antd';
import {connect} from 'umi';
import {Alert} from 'antd';

const LoginMessage = ({content}) => {
    return (
        <Alert
            message={content}
            type="error"
            showIcon>
        </Alert>
    )
}

function Login (props) {

    const {dispatch, userId} = props;

    const onFinish = (value) => {
        if (dispatch) {

            dispatch(
                {
                    type:"login/login",
                    payload: value
                }
            )
        }
    }

    return (
        <>
            <Form onFinish={onFinish}>
                <Form.Item name="name">
                    <Input></Input>                    
                </Form.Item>

                <Form.Item name="pwd">
                    <Input></Input>
                </Form.Item>

                    {
                       userId === '' && (<LoginMessage content="帐号密码错误"></LoginMessage>)
                    }

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
                
            </Form>
        </>
    )
}

const mapState2Props = ({login}) => {

    const {id, nickName, name} = login;
    return {
        userId: id,
        nickName,
        loginName: name
    }
}

export default connect(mapState2Props)(Login);