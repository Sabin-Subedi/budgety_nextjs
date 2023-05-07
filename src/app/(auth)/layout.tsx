import { AppBox } from "ui";
interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <AppBox minHeight="100vh">{children}</AppBox>;
}
