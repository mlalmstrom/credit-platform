import Link from "next/link";

export default function Login() {
  return (
    <main className="authPage">
      <div className="authCard">
        <Link className="backLink" href="/">← Back to home</Link>
        <h1>Welcome back</h1>
        <p>Log in to access your credit dashboard.</p>

        <form>
          <label>Email address</label>
          <input type="email" placeholder="you@example.com" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="button" className="button full">Log In</button>
        </form>

        <p className="authFooter">
          New here? <Link href="/signup">Create an account</Link>
        </p>
      </div>
    </main>
  );
}
