import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";

const permission = false; //to simulate that user has no access to enter Admin mode. Authorization TODO

function AdminPage() {
    return (
           permission ? <h1>Welcome in the admin panel :)</h1> : <Navigate replace to="/login" />
    
    );
}

export default AdminPage;