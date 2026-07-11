import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="dashboard">
      <aside className="sidebar">
        <div className="logo">Credit Platform</div>
        <Link href="/dashboard">Overview</Link>
        <a href="#">Credit Reports</a>
        <a href="#">Disputes</a>
        <a href="#">Documents</a>
        <a href="#">Messages</a>
        <a href="#">Billing</a>
        <Link href="/">Log Out</Link>
      </aside>

      <section className="dashboardContent">
        <div className="dashboardHeader">
          <div>
            <p className="eyebrow">CLIENT DASHBOARD</p>
            <h1>Good morning</h1>
            <p>Here is your current credit progress.</p>
          </div>
          <button className="button">Upload Report</button>
        </div>

        <div className="stats">
          <div className="statCard">
            <span>Active disputes</span>
            <strong>6</strong>
          </div>
          <div className="statCard">
            <span>Items removed</span>
            <strong>3</strong>
          </div>
          <div className="statCard">
            <span>Documents</span>
            <strong>4</strong>
          </div>
          <div className="statCard">
            <span>Next update</span>
            <strong>12 days</strong>
          </div>
        </div>

        <div className="panel">
          <h2>Recent dispute activity</h2>
          <div className="activity">
            <div>
              <strong>Equifax dispute round</strong>
              <p>Waiting for bureau response</p>
            </div>
            <span className="status">In progress</span>
          </div>
          <div className="activity">
            <div>
              <strong>TransUnion collection account</strong>
              <p>Documentation submitted</p>
            </div>
            <span className="status">Submitted</span>
          </div>
        </div>
      </section>
    </main>
  );
}
