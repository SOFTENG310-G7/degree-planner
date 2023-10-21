export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className="btn">Log out</button>
    </form>
  );
}
