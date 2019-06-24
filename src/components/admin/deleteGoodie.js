import React from 'react';
import { Link } from 'react-router-dom'

export default function DeleteAction(props) {

    function goodieDelete() {
        fetch (`https://hannahs-goodies-api.herokuapp.com/delete/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log("Fetch error in GoodieDelete" + error)
        })
    }

    return (
        <div>
            <Link onClick = {goodieDelete} to = {{pathname: "/goodies"}}> Delete </Link>
        </div>
    )
}