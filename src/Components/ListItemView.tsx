import React from "react";
import { Link } from "react-router-dom";

const List = (props: any) => {
 const {records} = props;
 if (!records || records.length === 0) return <p> No Records to Display</p>;
 return (
     <ul>
        {records.map((record:any)=> {
            return (
                <p key={record.id} className= "list">
                    <Link style={{ textDecoration: "none" }} to={{ pathname: `/item/${record.id}`,state: { record } }}>
                    <p className="record-title"> {record.metadata.titles[0].title} </p> {" "}
                    </Link>
                    
                    <p className="record-description">{record.metadata.abstracts[0].value}</p>
                </p>   
             );
         })}
     </ul>
 );
};
export default List;