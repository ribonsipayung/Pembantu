import { Route, Routes } from "react-router-dom";
import LayoutNav from "../Layouts/LayoutNav";
import Artikel from "../Pages/Profile/Artikel";
import DashboardAuthRoute from "./DashboardAuthRoute";
import Home from "../Pages/Home";
import Login from "../Pages/Account/Login";

// Dashboard
import DashboardPage from "../Pages/Dashboard/DashboardPage";
import TentangKami from "../Pages/Profile/TentangKami";
import KontakKami from "../Pages/Profile/KontakKami";
import DashboardProfesi from "../Pages/Dashboard/DashboardList/DashboardProfesi";
import DashboardAssistant from "../Pages/Dashboard/DashboardAssistant";
import AddAssistant from '../Pages/Dashboard/DashboardAssistant/AddAssistant'
import DetailAssistant from "../Pages/Dashboard/DashboardAssistant/DetailAssistant";
import DetailProfession from "../Pages/Profesi/DetailAssistant";
import Interview from "../Pages/Profesi/Interview";
import Payment from "../Pages/Profesi/Payment";
import Dashboard from "../Pages/Dashboard-Frontend/Account";
import OrderTransactions from "../Pages/Dashboard-Frontend/OrderTransactions/OrderList";
import InterviewTransactions from "../Pages/Dashboard-Frontend/InterviewTransactions/InterviewList";
import DetailInterviewTransactions from "../Pages/Dashboard-Frontend/InterviewTransactions/Detail";
import DetailOrderTransactions from "../Pages/Dashboard-Frontend/OrderTransactions/Detail";
import AddProfesi from "../Pages/Dashboard/DashboardList/DashboardProfesi/AddProfesi";
import DetailProfesi from "../Pages/Dashboard/DashboardList/DashboardProfesi/DetailProfesi";
import SignUp from "../Pages/Account/SignUp";

import DashboardSkills from "../Pages/Dashboard/DashboardList/DashboardSkills";
import AddSkills from "../Pages/Dashboard/DashboardList/DashboardSkills/AddSkills";
import DetailSkills from "../Pages/Dashboard/DashboardList/DashboardSkills/DetailSkills";
import DashboardTransaction from "../Pages/Dashboard/DashboardTransaction";
import ProfessionById from "../Pages/Profesi/DetailProfession";
import Order from "../Pages/Profesi/Order";
import AllProfession from "../Pages/Profesi/AllProfession";
import DetailArtikel from "../Pages/Profile/Artikel/DetailArtikel";

const Routing = () => {
  return (
    <Routes>
      <Route element={<LayoutNav />}>
        <Route path="/" element={<Home />} />
    
        <Route path="/profession/:id" element={<ProfessionById />} />
        <Route path="/detail-profession/:id" element={<DetailProfession />} />
        <Route path="/pesan/:id/:profession" element={<Order />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/profesi" element={<AllProfession/>}/>
        <Route path="/payment/:id" element={<Payment/>}/>
        <Route path="/article" element={<Artikel />} />
        <Route path="/detail-article" element={<DetailArtikel />} />
        <Route path="/contact-us" element={<KontakKami />} />
        <Route path="/about-us" element={<TentangKami />} />
        <Route path="/account" element={<Dashboard />} />
        <Route path="/interview-transactions" element={<InterviewTransactions />} />
        <Route path="/order-transactions" element={<OrderTransactions/>} />
        <Route path="/detail-interview-transactions" element={<DetailInterviewTransactions />} />
        <Route path="/detail-order-transactions/:id/:assistant" element={<DetailOrderTransactions/>} />
       

      </Route>
      <Route element={<DashboardAuthRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard-assistant" element={<DashboardAssistant />} />
        <Route path="/dashboard-assistant/:id" element={<DetailAssistant />} />

        <Route path="/dashboard-skills" element={<DashboardSkills />} />
        <Route path="/detail-skills/:id" element={<DetailSkills />} />

        <Route path="/dashboard-profesi" element={<DashboardProfesi />} />
        <Route path="/detail-profesi/:id" element={<DetailProfesi />} />
        {/* {/* <Route path="/dashboard-kontak" element={<DashboardKontak />} /> */}
        <Route path="/add-profesi" element={<AddProfesi />} />
        <Route path="/add-assistant" element={<AddAssistant />} />
        <Route path="/add-skills" element={<AddSkills />} />

        <Route path="/dashboard-transaction" element={<DashboardTransaction />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
};
export default Routing;
