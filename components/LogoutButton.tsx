export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-4 py-2">
        Logout
      </button>
    </form>
  );
}
