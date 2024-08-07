import { Route , Routes } from "react-router-dom";
import { Home, Pagenotfound } from "../Pages/compiler";
import Layout from "../Pages/layout/Landingpagelayout"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                
                <Route index element={<Home />} />
                {/* <Route path="/about" element={<About/>}></Route>
                <Route path="/services" element={<Services/>}></Route> */}
            </Route>
            <Route path="*" element={< Pagenotfound />} />
        </Routes>
    )
}
export default AllRoutes