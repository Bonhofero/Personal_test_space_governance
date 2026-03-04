import DashboardLayout from "../../components/DashboardLayout";

export default function CDODashboard() {
    const centerContent = (
        <div className="dashboard-content-area">
            <h2>Infrastructure Map</h2>
            <div className="placeholder-box">
                <p>System overlaps · Integration health · Redundancy view</p>
            </div>

            <h2>Active Initiatives</h2>
            <div className="placeholder-box">
                <p>Portfolio status · Quick wins · Moonshots</p>
            </div>
        </div>
    );

    const rightPanel = (
        <div className="dashboard-action-panel">
            <h3>Innovation Pipeline</h3>
            <div className="alert-box teal">
                <p>3 initiatives awaiting CDO decision</p>
            </div>

            <h3>Flagged Governance Issues</h3>
            <div className="alert-box amber">
                <p>Governance blocking progress on 2 initiatives</p>
            </div>
        </div>
    );

    return <DashboardLayout centerContent={centerContent} rightPanel={rightPanel} />;
}
