import React from 'react';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
import styles from './index.css';


const FormItem = Form.Item;

class loginForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div className={styles.normal}>
      <Form onSubmit={this.handleSubmit} className={styles.login_form}>
      <FormItem>
        {getFieldDecorator('userName', {
          rules: [{ required: true, message: '请输入您的账号' }],
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: '请输入您的密码' }],
        })(
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(
          <Checkbox className={styles.login_form_remember}>记住我</Checkbox>
        )}
        <a className={styles.login_form_forgot} href="">忘记密码</a>
        <Button type="primary" htmlType="submit" className={styles.login_form_button}>
          登录
        </Button>
        <a href="">注册!</a>
      </FormItem>
    </Form>
  </div>
    );
  }
}

export default loginForm;

