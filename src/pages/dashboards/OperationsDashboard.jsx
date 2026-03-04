import DashboardLayout from "../../components/DashboardLayout";

export default function OperationsDashboard() {
    const centerContent = (
        <div className="dashboard-content-area">
            <h2>Risk Heatmap</h2>
            <div className="placeholder-box">
                <p>End-of-life servers · Single points of failure</p>
            </div>

            <h2>System Dependency Graph</h2>
            <div className="placeholder-box">
                <p>Connection mapping · Database dependencies</p>
            </div>
        </div>
    );

    const rightPanel = (
        <div className="dashboard-action-panel">
            <h3>End-of-Life Alerts</h3>
            <div className="alert-box red">
                <p>Critical: 2 servers reaching EOL next month</p>
            </div>

            <h3>Maintenance Deadlines</h3>
            <div className="alert-box amber">
                <p>3 patches scheduled for this weekend</p>
            </div>
        </div>
    );

    return <DashboardLayout centerContent={centerContent} rightPanel={rightPanel} />;
}
