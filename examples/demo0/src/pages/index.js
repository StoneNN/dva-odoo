import React from 'react';
import { connect } from "dva";
import { Form, Input, Icon, Checkbox, Button } from 'antd';
import styles from './index.css';


const FormItem = Form.Item;

class LoginForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {

    };
  }  
  //登录操作
  handleSubmit = (e) => {
    console.log('----------========== login =====----')
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('--- value判断 ----', values, '???', err);
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.dispatch({
          type: 'login/login',
          payload: { name: values.userName, pwd: values.password }
        });
      } else {
        console.log('请填写完整......');
        this.showModal();
      }

    });
  }
  
  render(){
    const { getFieldDecorator } = this.props.form;
    console.log('this.props.form ----',this.props.form);
    return(
      <div className={styles.normal}>
      <h1 className={styles.title}>智赛棋牌</h1>
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
const NormalLoginForm = Form.create()(LoginForm);

const mapStateToProps =({login}) =>{

  console.log('----- loginModel ------',login)
  return{loginForm1:login}
}
export default connect(mapStateToProps)(NormalLoginForm);

