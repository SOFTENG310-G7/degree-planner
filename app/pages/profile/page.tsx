import LogoutButton from "@/components/LogoutButton";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center text-3xl">
      <div className="font-bold w-1/5 text-center py-[200px]">
        <p>Welcome to your profile page.</p>
        <div className="mt-12">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
