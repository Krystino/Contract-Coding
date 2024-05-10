import { Tabs, Typography, Table } from '@arco-design/web-react';
const TabPane = Tabs.TabPane;
const style = {
  textAlign: 'left',
  marginTop: 40,
  marginBottom: 40,
  marginLeft: 40,
  width: '100%',
};

const columns = [
  {
    title: '编码',
    dataIndex: 'code',
  },
  {
    title: '简称',
    dataIndex: 'acronym',
  },
  {
    title: '主体名称（全称）',
    dataIndex: 'name',
  },
];
const data = [
  {
    key: '1',
    code: '3100',
    acronym: '红狮控股',
    name: '红狮控股集团有限公司',
  },
  {
    key: '2',
    code: '3101',
    acronym: '兰溪红狮',
    name: '浙江红狮水泥股份有限公司',
  },
  {
    key: '3',
    code: '3102',
    acronym: '建德红狮',
    name: '建德红狮水泥有限公司',
  },
  {
    key: '4',
    code: '3103',
    acronym: '缙云红狮',
    name: '缙云红狮水泥有限公司',
  },
  {
    key: '5',
    code: '3104',
    acronym: '兰溪超峰',
    name: '兰溪市超峰水泥有限公司',
  },
  {
    key: '6',
    code: '3105',
    acronym: '建德安仁',
    name: '建德红狮安仁建材有限公司',
  },
  {
    key: '7',
    code: '3106',
    acronym: '桐庐红狮',
    name: '桐庐红狮水泥有限公司',
  },
];

const columns1 = [
  {
    title: '部门名称',
    dataIndex: 'name',
  },
  {
    title: '对应编码',
    dataIndex: 'code',
  },
];
const data1 = [
  {
    key: 1,
    name: '战略事业部',
    code: 'TC',
  },
  {
    key: 2,
    name: '系统事业部',
    code: 'XT',
  },
  {
    key: 3,
    name: '科技事业部',
    code: 'TECH',
  },
  {
    key: 4,
    name: '行政事业部',
    code: 'XZ',
  },
];

const App = () => {
  return (
    <div style={{ margin: '5vw' }}>
      <h1>合同编码规则</h1>
      <img src="合同编码.png" alt="合同编码图" style={{ width: '35vw' }} />
      <Tabs defaultActiveTab="1" type="card-gutter">
        <TabPane key="1" title="一级编码">
          <Typography.Paragraph style={style}>
            合同起草的年份+月份
          </Typography.Paragraph>
        </TabPane>
        <TabPane key="2" title="二级编码">
          <Typography.Paragraph style={style}>
            <div>二级编码为NCC系统公司编码：</div>
            <Table
              columns={columns}
              data={data}
              style={{ width: '80%' }}
            ></Table>
          </Typography.Paragraph>
        </TabPane>
        <TabPane key="3" title="三级编码">
          <Typography.Paragraph style={style}>
            三级编码为部门编码
            <Table
              columns={columns1}
              data={data1}
              style={{ width: '40%' }}
            ></Table>
          </Typography.Paragraph>
        </TabPane>
        <TabPane key="4" title="四级编码">
          <Typography.Paragraph style={style}>
            <div>四级编码为合同类型编码</div>

            <img src="合同类型编号.png" alt="" style={{ width: '30vw' }} />
          </Typography.Paragraph>
        </TabPane>
        <TabPane key="5" title="五级编码">
          <Typography.Paragraph style={style}>
            五级编码为合同流水号，从0001开始编码
          </Typography.Paragraph>
        </TabPane>
        <TabPane key="6" title="六级编码">
          <Typography.Paragraph style={style}>
            六级编码为补充协议编码，用SA开头，后接上两位的流水号，如第一份补充协议为-SA01。
            对于非补充协议的合同，补充协议编码和前面的横杠“-”一同省略。
          </Typography.Paragraph>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default App;
