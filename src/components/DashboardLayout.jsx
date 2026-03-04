import { useAuth } from "../context/AuthContext";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ centerContent, rightPanel }) {
    const { user, logout } = useAuth();

    return (
        <div className="dashboard-shell">
            <div className="topbar">
                <div className="topbar-left">
                    <span className="topbar-logo">🏛️ Eskilstuna Kommun</span>
                </div>
                <div className="topbar-center">
                    <span style={{ fontWeight: 600 }}>Portfolio Overview</span>
                </div>
                <div className="topbar-right">
                    <button className="btn-primary">+ Add initiative / Add system</button>
                    <span className="user-identity">
                        {user.name} · {user.title}
                    </span>
                    <button className="btn-icon">🔔 <span className="notification-badge">3</span></button>
                    <button className="btn-logout" onClick={logout}>Log out</button>
                </div>
            </div>

            <div className="dashboard-body">
                <Sidebar />

                <main className="dashboard-center">
                    {centerContent}
                </main>

                <aside className="dashboard-right">
                    {rightPanel}
                </aside>
            </div>
        </div>
    );
}
