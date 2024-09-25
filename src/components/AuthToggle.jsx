import { Tabs, Button, Form, Input } from "antd";

const { TabPane } = Tabs;

const AuthToggle = ({activeKey, setActiveKey}) => {
  

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  const handleLogin = (values) => {
    console.log("Login values:", values);
  };

  const handleSignUp = (values) => {
    console.log("Sign Up values:", values);
  };

  return (
    <div style={{ width:'100%' }}>
      <Tabs activeKey={activeKey} onChange={handleTabChange}>
        <TabPane tab="Login" key="1">
          <Form onFinish={handleLogin}>
            <Form.Item
              name="username"
              label="username"
              rules={[{ required: true, message: 'لطفا نام کاربری را وارد نمایید' }]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: "لطفا پسورد را وارد نمایید'" }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="default" htmlType="submit" className="w-full bg-orange-300">
                Login
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="Sign Up" key="2">
          <Form onFinish={handleSignUp}>
            <Form.Item
              name="email"
              label="email"
              rules={[{ required: true, message: "لطفا ایمیل خود را وارد کنید" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="username"
              label="username"
              rules={[{ required: true, message: 'لطفا نام کاربری را وارد نمایید' }]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: "لطفا پسورد را وارد نمایید'" }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="default" htmlType="submit" className="w-full bg-orange-300">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AuthToggle;