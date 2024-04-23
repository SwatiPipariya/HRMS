import React from 'react'
import './FrTable.css'
// import { BiSearch } from 'react-icons/bi'

function FrTable() {
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
        <div className='gfdjkc'>
            <div className='mrano'>
                <h2 className='qatxp'>Table</h2>
                {/* <div className='iqbs'>
                    <BiSearch className='rect-icon' />
                    <input type='search' className='qjxdsp' placeholder='Search' />
                </div> */}
            </div>
            <table className='mshopq'>
                <thead className='qlpeda'>
                    <tr>
                        {/* <th className='lxcwposfy'>Checkbox</th> */}
                        <th className='lxcwposfy suwbx' >Name</th>
                        <th className='lxcwposfy suwbx'>Email</th>
                        <th className='lxcwposfy suwbx'>Product</th>
                        <th className='lxcwposfy suwbx'>Price</th>
                        <th className='lxcwposfy suwbx'>Date</th>
                        <th className='lxcwposfy suwbx'>City</th>
                        {/* <th className='lxcwposfy'>Status</th> */}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            {/* <td className='lxcwposfy chck'><input type='checkbox' className='bxc' /></td> */}
                            <td className='lxcwposfy' >{row.Name}</td>
                            <td className='lxcwposfy'>{row.Email}</td>
                            <td className='lxcwposfy'>{row.Product}</td>
                            <td className='lxcwposfy'>{row.Price}</td>
                            <td className='lxcwposfy'>{row.Date}</td>
                            <td className='lxcwposfy'>{row.City}</td>
                            {/* <td className='lxcwposfy-new '>
                                <button className={`qhxcbxp ${row.Status === 'Sent' ? 'green-button' : row.Status === 'Pending' ? 'yellow-button' : row.Status === 'Denied' ? 'red-button' :
                                    row.Status === ''}`}>
                                    {row.Status}
                                </button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FrTable