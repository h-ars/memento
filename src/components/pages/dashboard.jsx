import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const [user] = useAuthState(getAuth());

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Welcome, {user.displayName}!</h1>
      <p>Your dashboard content will go here.</p>
    </div>
  );
}
