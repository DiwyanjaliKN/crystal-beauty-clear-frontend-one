/*import { Link, Route, Routes } from "react-router-dom";
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
}*/

import { Link, Route, Routes } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa6";

export default function AdminPage() {
    return (
        <div className="w-full h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <div className="h-full w-[250px] bg-gray-800 text-white p-4">
                <div className="text-xl font-bold mb-8 text-center">Admin Panel</div>
                <div>
                    <Link
                        to="/admin/users"
                        className="block p-3 mb-3 hover:bg-gray-700 rounded-lg flex items-center"
                    >
                        <FaUsers className="mr-3" /> Users
                    </Link>
                    <Link
                        to="/admin/products"
                        className="block p-3 mb-3 hover:bg-gray-700 rounded-lg flex items-center"
                    >
                        <MdWarehouse className="mr-3" /> Products
                    </Link>
                    <Link
                        to="/admin/orders"
                        className="block p-3 mb-3 hover:bg-gray-700 rounded-lg flex items-center"
                    >
                        <FaFileInvoice className="mr-3" /> Orders
                    </Link>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white p-6">
                <div className="text-2xl font-semibold mb-6">Admin Dashboard</div>
                <Routes>
                    <Route path="/users" element={<h1 className="text-xl">Users</h1>} />
                    <Route path="/products" element={<h1 className="text-xl">Products</h1>} />
                    <Route path="/orders" element={<h1 className="text-xl">Orders</h1>} />
                </Routes>
            </div>
        </div>
    );
}

