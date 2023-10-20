export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className="text-slate-50 bg-cyan-700 hover:bg-cyan-600 font-medium rounded-lg text-base px-4 py-2">
        Log out
      </button>
    </form>
  );
}
