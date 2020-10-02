import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import SortBy from './SortBy';

const Users = ({ usersList }) => {

    const [tempList, setTempList] = useState(usersList.data)
    const [sort,setSort] = useState()
    let tempArr;

    useEffect(()=>{  
        if(sort === "option-1"){
            tempArr = tempList?.sort((a,b)=> (a.last_name.toLowerCase() > b.last_name.toLowerCase() ? 1 : -1));
        }else{
            tempArr = tempList?.sort((a,b)=> (a.first_name.toLowerCase() > b.first_name.toLowerCase() ? 1 : -1));
        }
        setTempList(tempArr)
    },[sort])

    return (
        <React.Fragment>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
                <h2>Users</h2>
                <SortBy setSort={setSort}/>
                <div style={{display:'flex', flexWrap:'wrap'}}>{tempList.map((item) => {
                    return (<Link to={`/user/${item.id}`} key={item.id}>
                        <div style={{padding: 20}}>
                            <Card border='secondary' style={{ width: '15rem' }} text={'secondary'}>
                            <Card.Img variant="top" src={item.avatar} alt="Avatar" />
                            <Card.Body>
                                <Card.Title>{item?.first_name} {item?.last_name}</Card.Title>
                                <Card.Text>{item?.email}</Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </Link>)
                })}</div>
            </div>
        </React.Fragment>
    );
};
export default Users;