import React from 'react';
import { Form, Input, Button } from 'antd';
var styles = {
  'title': {
    width: 200,
    display: 'inline-block',
    marginRight: 10,
    verticalAlign: 'top'
  }
}

class AppForm extends React.Component {
  render () {
    const onFinish = (values) => {
      this.props.AddTodoItem({
        id:Math.floor(Math.random()*1000), // 随机数
        text:values.addTodo, // 写的字
        complete:false
      });
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item name="addTodo">
          <Input placeholder="TODO" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default AppForm;