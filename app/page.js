import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="logo">Credit Platform</div>
        <div className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Log In</Link>
          <Link className="button small" href="/signup">Get Started</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">CREDIT MANAGEMENT, SIMPLIFIED</p>
          <h1>Build stronger credit with a smarter plan.</h1>
          <p className="heroText">
            Track disputes, manage documents, monitor progress, and receive
            personalized credit guidance from one secure platform.
          </p>
          <div className="actions">
            <Link className="button" href="/signup">Create an Account</Link>
            <Link className="button secondary" href="/login">Client Login</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="card">
          <h3>Credit Progress</h3>
          <p>Follow your credit improvement journey from one dashboard.</p>
        </div>
        <div className="card">
          <h3>Dispute Tracking</h3>
          <p>See every dispute round, status update, and expected response.</p>
        </div>
        <div className="card">
          <h3>Secure Documents</h3>
          <p>Keep reports and supporting documents organized in one place.</p>
        </div>
      </section>
    </main>
  );
}
