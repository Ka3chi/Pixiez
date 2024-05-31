import { Route , Routes } from "react-router-dom";
import { Home } from "../Pages/compiler";
import Layout from "../Pages/layout/Landingpagelayout"

const AllRoutes = () => {
    return (
        <div>
        <Routes>
            <Route path="/" element={<Layout/>}>
                
                <Route index element={<Home />} />
                {/* <Route path="/about" element={<About/>}></Route>
                <Route path="/services" element={<Services/>}></Route> */}
            </Route>
        </Routes>
        </div>

    )
}
export default AllRoutes