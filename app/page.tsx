import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-green-600">
      <LoginButton>
        <Button>Login</Button>
      </LoginButton>
    </main>
  );
}
