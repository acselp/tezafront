import TopBar  from '../../widgets/topbar/TopBar';
import { ChakraProvider } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Review from '../review/review';

import { Flex } from '@chakra-ui/react'

import Dashboard from '../dashboard/Dashboard';
import Profile from '../profile/Profile';
import Login from '../login/Login';
import Registration from '../registration/Registration';
import Settings from '../settings/Settings';
import ProfileTab from '../settings/settingsTabs/ProfileTab';
import NotificationTab from '../settings/settingsTabs/NotificationTab';
import SecurityTab from '../settings/settingsTabs/SecurityTab';
import HelpTab from '../settings/settingsTabs/HelpTab';
import AboutTab from '../settings/settingsTabs/AboutTab';
import Search from '../search_kidali';
import CreateCompany from '../newcompany/CreateCompany';
import KidalaDetailed from '../kidala_detailed/KIdalaDetailed';
import Pricing from '../pricing/pricing';


// -------------Admin Imports-------------

import React from "react";
import ReactDOM from "react-dom";
import "../../admin/assets/css/App.css";
import AuthLayout from "../../admin/layouts/auth";
import AdminLayout from "../../admin/layouts/admin";
import RTLLayout from "../../admin/layouts/rtl";
// import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../admin/theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";





function App() {
  return (
    <ChakraProvider>
      <ThemeEditorProvider>
        <Router>
          <Routes>

            {/* Admin routes */}
            <Route path={`/auth`} element={<AuthLayout />} />
            <Route path={`/admin`} element={<AdminLayout />} />
            <Route path={`/rtl`} element={<RTLLayout />} />
            <Route path="/" element={<Dashboard />} />
            
            
            {/* User routes */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/create-company" element={<CreateCompany />} />
            
            <Route path="/settings" element={<Settings tab={ProfileTab}/>} />
            <Route path="/settings/profile" element={<Settings tab={ProfileTab}/>} />
            <Route path="/settings/notification" element={<Settings tab={NotificationTab}/>} />
            <Route path="/settings/security" element={<Settings tab={SecurityTab}/>} />
            <Route path="/settings/help" element={<Settings tab={HelpTab}/>} />
            <Route path="/settings/about" element={<Settings tab={AboutTab}/>} />

            <Route path="/search" element={<Search />} />
            <Route path="/search/:q" element={<Search />} />

            <Route path="/company/detailed/:id" element={<KidalaDetailed />} />
            <Route path="/company" element={<Search />} />
            <Route path="/review/create" element={<Review />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Router>
      </ThemeEditorProvider>
    </ChakraProvider>
  );
}

export default App;
