import { Route, Routes } from "react-router-dom";
import { Layout } from "../Pages/Layout/Layout";
import { Home } from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import { Community } from "../Pages/Community/Community";
import { LearnWork } from "../Pages/LearnWork/LearnWork";
import { CommunityRules } from "../Pages/CommunityRules/CommunityRules";
import { Register } from "../Pages/Register/Register";
import { Login } from "../Pages/Login/Login";
import { Lab } from "../Pages/Lab/Lab";
import { LearnWorkKonfig1 } from "../Pages/LearnWorkKonfigs/LearnWorkKonfig1";
import { LearnWorkKonfig2 } from "../Pages/LearnWorkKonfigs/LearnWorkKonfig2";
import { Documentation } from "../Pages/Documentation/Documentation";
import { NotFound } from "../Pages/NotFound/NotFound";
import PrivacyPolicy from "../Pages/Privacy/Privacy";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/community" element={<Community/>}/>
                <Route path="communityrules" element={<CommunityRules/>}/>
                <Route path="/learnwork" element={<LearnWork/>}>
                    <Route index element={<LearnWorkKonfig1/>} />
                    <Route path="Whatispseudocode" element={<LearnWorkKonfig1/>}/>
                    <Route path="Howtowritepseudocode" element={<LearnWorkKonfig2/>}/>
                </Route>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/lab" element={<Lab/>}/>
                <Route path="/documentation" element={<Documentation/>}/>
                <Route path="/privacyPolicy" element={<PrivacyPolicy/>}/>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}