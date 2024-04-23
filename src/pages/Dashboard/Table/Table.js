import React from 'react'
import './Table.css'
import { BiSearch } from 'react-icons/bi'

function Table() {
    const tableData = [
        {
            Name: 'Mark Otto',
            Email: 'ottoto@example.com',
            Product: 'ON the Road',
            Price: '$25 224.2',
            Date: '10 June 2019',
            City: 'Amsterdam',
            Status: 'Sent'
        },
        {
            Name: 'Kevin Mussafir',
            Email: 'kevin@example.com',
            Product: 'Phones',
            Price: '$25 224.2',
            Date: '1 May 2013',
            City: 'Vegas',
            Status: 'Pending'
        },
        {
            Name: 'Sam Joseph',
            Email: 'sam53@example.com',
            Product: 'Earphones',
            Price: '$25 224.2',
            Date: '23 August 2011',
            City: 'Otsego',
            Status: 'Denied'
        },
        {
            Name: 'Veronica',
            Email: 'ver344@example.com',
            Product: 'Beauty',
            Price: '$25 224.2',
            Date: '11 May 2019',
            City: 'Paris',
            Status: 'Sent'
        }
    ];
    return (
        <div className='table_cont'>
            <div className='head-srch'>
                <h2 className='hd-tp'>Table</h2>
                <div className='ic-srch'>
                    <BiSearch className='rect-icon' />
                    <input type='search' className='tble-src' placeholder='Search' />
                </div>
            </div>
            <table className='table_main'>
                <thead>
                    <tr>
                        <th className='field'>Checkbox</th>
                        <th className='field'>Name</th>
                        <th className='field'>Email</th>
                        <th className='field'>Product</th>
                        <th className='field'>Price</th>
                        <th className='field'>Date</th>
                        <th className='field'>City</th>
                        <th className='field'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td className='field chck'><input type='checkbox' className='bxc' /></td>
                            <td className='field'>{row.Name}</td>
                            <td className='field'>{row.Email}</td>
                            <td className='field'>{row.Product}</td>
                            <td className='field'>{row.Price}</td>
                            <td className='field'>{row.Date}</td>
                            <td className='field'>{row.City}</td>
                            <td className='field-new '>
                                <button className={`stat-btn ${row.Status === 'Sent' ? 'green-button' : row.Status === 'Pending' ? 'yellow-button' : row.Status === 'Denied' ? 'red-button' :
                                    row.Status === ''}`}>
                                    {row.Status}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table