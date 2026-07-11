import Link from "next/link";

export default function Signup() {
  return (
    <main className="authPage">
      <div className="authCard">
        <Link className="backLink" href="/">← Back to home</Link>
        <h1>Create your account</h1>
        <p>Start organizing and improving your credit journey.</p>

        <form>
          <label>Full name</label>
          <input type="text" placeholder="Your full name" />

          <label>Email address</label>
          <input type="email" placeholder="you@example.com" />

          <label>Password</label>
          <input type="password" placeholder="Create a password" />

          <button type="button" className="button full">Create Account</button>
        </form>

        <p className="authFooter">
          Already registered? <Link href="/login">Log in</Link>
        </p>
      </div>
    </main>
  );
}
