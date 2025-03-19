import {Divider, List, Typography, Row, Col} from 'antd'

const dataCard = [
  '1- Số Căn Cước',
  '2- Họ Và Tên',
  '3- Ngày Sinh',
  '4- Giới Tính',
  '5- Quốc Tịch',
  '6- Nguyên Quán',
  '7- Ngày Cấp',
  '8- Ngày Hết Hạn',
  '9- Số Căn Cước Cũ',
  '10- Dân Tộc',
  '11- Tôn Giáo',
  '12- Nhận Dạng Cá Nhân',
  '13- Thường Trú',
  '14- Họ Tên Cha, Mẹ',
  '15- Họ Tên Vợ, Chồng',
]

const dataCardPlus = ['1- Ảnh Chân Dung Trong CCCD', '4- Mã MRZ CCCD']

const dataCardExport = ['1- Định dạng PDF', '2- Định dạng EXCEL', '3- JSON']

const DataGet = () => {
  // Chia dataCard thành 2 cột
  const half = Math.ceil(dataCard.length / 2)
  const firstColumn = dataCard.slice(0, half)
  const secondColumn = dataCard.slice(half)

  return (
    <div>
      <h4 className='base_title'>Thông tin dữ liệu trả về</h4>
      <div className=' lg:flex gap-5 justify-center w-[90%] lg:w-3/4 m-auto'>
        <div className='w-full'>
          <Divider orientation='left'>15 trường thông tin</Divider>
          <Row gutter={16}>
            {/* Cột đầu tiên */}
            <Col span={12}>
              <List
                bordered
                dataSource={firstColumn}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text mark></Typography.Text> {item}
                  </List.Item>
                )}
              />
            </Col>
            {/* Cột thứ hai */}
            <Col span={12}>
              <List
                bordered
                dataSource={secondColumn}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text mark></Typography.Text> {item}
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </div>
        <div className='w-full'>
          <div>
            <Divider orientation='left'>Dữ liệu hình ảnh</Divider>
            <List
              bordered
              dataSource={dataCardPlus}
              renderItem={item => (
                <List.Item>
                  <Typography.Text mark></Typography.Text> {item}
                </List.Item>
              )}
            />
          </div>
          <div>
            <Divider orientation='left'>Xuất dữ liệu</Divider>
            <List
              bordered
              dataSource={dataCardExport}
              renderItem={item => (
                <List.Item>
                  <Typography.Text mark></Typography.Text> {item}
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataGet
