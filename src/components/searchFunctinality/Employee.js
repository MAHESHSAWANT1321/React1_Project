import React, { useState } from 'react'
import SearchBar from 'react-js-search';

export default function Employee() {

  const initialEmployees = [
    { number: 12, name: "Buffon", position: "ST", success: true },
    { number: 21, name: "Pirlo", position: "MC", success: false },
    { number: 10, name: "Ruiz", position: "MDI" },
    { number: 7, name: "Nesta", position: "RB", success: true },
    { number: 4, name: "Cannavaro", position: "CB" },
    { number: 2, name: "Puyol", position: "CB", success: false },
    { number: 15, name: "Abate", position: "LB" },
    { number: 16, name: "Locatelli", position: "MDI" },
    { number: 1, name: "Buffon", position: "GK" },
    { number: 21, name: "Pirlo", position: "MC" },
    { number: 10, name: "Ruiz", position: "MDI" },
    { number: 7, name: "Nesta", position: "RB" },
  ];
  const [employees, setEmployees] = useState(initialEmployees);
  const [filteredEmployees, setFilteredEmployyes] = useState(initialEmployees);

  const onSearchClick = (searchText) => {
    console.log('search cliccked', searchText);
    setFilteredEmployyes(
      employees.filter((emp) => emp.name.includes(searchText))
    );
  };
  const onSearchTextChange = (searchText, filteredData) => {
    setFilteredEmployyes(filteredData);
  }

  const sortAsc = () => {
    const sortedDate = filteredEmployees.sort((e1, e2) => e1.name.localeCompare(e2.name))
    setFilteredEmployyes([...sortedDate]);
  };

  const sortDesc = () => {
    const sortedDate = filteredEmployees.sort((e1, e2) => e2.name.localeCompare(e1.name))
    setFilteredEmployyes([...sortedDate]);
  }


  return (
    <>
      <SearchBar
        onSearchTextChange={onSearchTextChange}
        onSearchButtonClick={onSearchClick}
        placeHolderText={'search here...'}
        data={employees}
      />
      <button onClick={sortAsc} className='btn btn-primary m-2'>Assending Data</button>

      <button onClick={sortDesc} className='btn btn-primary m-2'>Descending Data</button>
      <hr />

      <table className='table table-bordered'>
        <tbody>
          {filteredEmployees.map((emp, ind) => (
            <tr key={ind}>
              <td>{emp.number}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
