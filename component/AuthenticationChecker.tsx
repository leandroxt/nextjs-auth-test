import Link from 'next/link';
import { useUserContext } from '@lib/user.context';

// Component's children only shown to logged-in users
export default function AuthenticationChecker(props: any) {
  const { user } = useUserContext();

  return user ? props.children : props.fallback || <Link href="/login">You must be signed in</Link>;
}