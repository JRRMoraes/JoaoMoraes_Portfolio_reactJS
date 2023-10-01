import React from "react";
import ApiFetch from "../ui_visuais/apiFetch";

export default (props) => {
    return (
        <div>
            <h2>### ApiFetch direto:</h2>
            <ApiFetch url="https://api.randomuser.me/"></ApiFetch>
        </div>
    );
};
