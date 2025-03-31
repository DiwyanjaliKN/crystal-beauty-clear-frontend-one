import { Link, Route, Routes } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa6";

export default function AdminPage(){
    return(
        <div className="w-full h-screen bg-gray-300 flex p-2">
            <div className="h-full w-[300px] ">
                <Link  to="/admin/users" className="block p-2  flex items-center"><FaUsers className="mr-2" />Users</Link>
                <Link  to="/admin/products" className="block p-2  flex items-center"><MdWarehouse />Products</Link>
                <Link  to="/admin/orders" className="block p-2  flex items-center"><FaFileInvoice />Orders</Link>
            </div>
            <div className="h-full bg-white w-[calc(100vw-300px)] rounded-lg">
                <Routes path="/*">
                    <Route path="/users" element={<hi>Users</hi>}/>
                    <Route path="/products" element={<hi>Products</hi>}/>
                    <Route path="/orders" element={<hi>Orders</hi>}/>
                </Routes>

            </div>
            
        </div>
    );
}
