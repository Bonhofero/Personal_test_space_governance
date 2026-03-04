import DashboardLayout from "../../components/DashboardLayout";

export default function FinanceDashboard() {
    const centerContent = (
        <div className="dashboard-content-area">
            <h2>Total Cost of Ownership</h2>
            <div className="placeholder-box">
                <p>Legacy vs Modern system costs · Technical debt translated to SEK</p>
            </div>

            <h2>Cost Savings Projections</h2>
            <div className="placeholder-box">
                <p>Status quo cost vs Transformation cost over 3 years</p>
            </div>
        </div>
    );

    const rightPanel = (
        <div className="dashboard-action-panel">
            <h3>Budget Flags</h3>
            <div className="alert-box amber">
                <p>Overrun on HR System maintenance</p>
            </div>

            <h3>Decommissioning Opportunities</h3>
            <div className="alert-box teal">
                <p>Save 500k SEK by retiring Legacy Server C</p>
            </div>
        </div>
    );

    return <DashboardLayout centerContent={centerContent} rightPanel={rightPanel} />;
}
