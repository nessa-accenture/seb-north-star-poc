import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';
import { OverviewPage } from './OverviewPage';
import { ChatPage } from './ChatPage';
import { MarketsPage } from './MarketsPage';
import { PortfolioPage } from '../features/portfolio/PortfolioPage';
export function App(){return <Routes><Route element={<AppShell/>}><Route path="/" element={<OverviewPage/>}/><Route path="/chat" element={<ChatPage/>}/><Route path="/markets" element={<MarketsPage/>}/><Route path="/portfolio" element={<PortfolioPage/>}/></Route><Route path="*" element={<Navigate to="/" replace/>}/></Routes>}
