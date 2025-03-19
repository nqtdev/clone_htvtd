import {Card} from 'antd'
import dataShowDeviceLaptop from 'data/dataDeviceLaptop'

const ShowDeviceLaptop = () => {
  return (
    <div className='mt-10'>
      <div className='bg-slate-500 rounded-lg'>
        <p className='p-3 font-roboto text-white'>Laptop - Máy tính xách tay</p>
      </div>
      <div className='grid grid-cols-5 gap-4 mt-4'>
        {dataShowDeviceLaptop.map(device => (
          <Card
            key={device.id}
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt={device.name} src={device.image} />}
            className='border-4'
          >
            <div>
              <h3 className='font-roboto text-sm text-blue-600'>{device.name}</h3>
              <h4 className='font-roboto text-red-500 text-center'>
                {device.price.toLocaleString('vi-VN')}đ
              </h4>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ShowDeviceLaptop
