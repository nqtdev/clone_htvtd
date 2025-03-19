// @ Bảng hiển thị Thông số kỹ thuật thiết bị của sản phẩm
import React from 'react'
import PropTypes from 'prop-types'

const TableSpecification = ({data}) => {
  return (
    <section>
      <div className='m-auto overflow-x-auto lg:w-3/4'>
        <table className='min-w-full table-auto'>
          <thead className='border-collapse border border-slate-500'>
            <tr>
              <th className='table_body '>Mục</th>
              <th className='table_body '>Mô tả kỹ thuật</th>
              <th className='table_body'>Mục</th>
              <th className='table_body '>Mô tả kỹ thuật</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id}>
                <td className='table_item '>{row.itemA}</td>
                <td className='table_specification '>
                  {row.specificationA.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </td>
                <td className='table_item '>{row.itemB}</td>
                <td className='table_specification '>
                  {row.specificationB.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

TableSpecification.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      itemA: PropTypes.string.isRequired,
      specificationA: PropTypes.string.isRequired,
      itemB: PropTypes.string.isRequired,
      specificationB: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default TableSpecification
