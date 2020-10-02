import React from 'react';
import {Dropdown,DropdownButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const SortBy = ({setSort}) => {
    return (
        <React.Fragment>
                <DropdownButton onSelect={(e)=>setSort(e)} title="Sort By" style={{marginBottom: '2rem'}}>
                    <Dropdown.Item eventKey="option-1">First Name</Dropdown.Item>
                    <Dropdown.Item eventKey="option-2">Last Name</Dropdown.Item>
                </DropdownButton>
        </React.Fragment>
    );
};
export default SortBy;