import React from 'react';
import { Link } from 'react-router-dom'

export default function DeleteAction(props) {

    function bookDelete() {
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
            console.log("Fetch error in BookDelete" + error)
        })
    }

    return (
        <div>
            <Link onClick = {bookDelete} to = {{pathname: "/deleted_goodie"}}> Delete </Link>
        </div>
    )
}