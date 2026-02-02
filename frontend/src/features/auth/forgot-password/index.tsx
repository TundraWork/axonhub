import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AuthLayout from '../auth-layout';
import { ForgotPasswordForm } from './components/forgot-password-form';

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <div className='mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-md items-center px-6 py-10'>
        <Card className='w-full gap-4 border-slate-200 bg-white shadow-sm'>
          <CardHeader>
            <CardTitle className='text-lg tracking-tight'>Forgot Password</CardTitle>
            <CardDescription>
              Enter your registered email and <br /> we will send you a link to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ForgotPasswordForm />
          </CardContent>
          <CardFooter>
            <p className='text-muted-foreground px-8 text-center text-sm'>
              Don't have an account?{' '}
              <Link to='/sign-up' className='hover:text-primary underline underline-offset-4'>
                Sign up
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </AuthLayout>
  );
}
