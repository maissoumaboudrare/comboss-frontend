'use client'
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { fetchAPI } from "@/lib/utils";

import { useAuth } from "@/context/AuthContext";


const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email required !")
    .email("Invalid email"),
  password: z
    .string()
    .trim()
    .min(8, "Password requires at least 8 characters !"),
});

type LoginValues = z.infer<typeof LoginSchema>;

const Login = () => {
  const { setIsAuthenticated, checkAuthStatus } = useAuth();
  const router = useRouter();

  const form = useForm<LoginValues>({
    resolver: zodResolver(LoginSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmitLogin = async (values: LoginValues) => {
    try {
      const response = await fetchAPI('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      // const checkAuthStatus = async () => {
      //   try {
      //     const response = await fetchAPI("/api/auth/status", {
      //       method: "GET",
      //     });
      //     console.log(response.isAuthenticated);
      //     setIsAuthenticated(response.isAuthenticated);
      //   } catch (error) {
      //     console.error("Failed to check authentication status:", error);
      //   }
      // };

      // await checkAuthStatus();
      await checkAuthStatus();
      setIsAuthenticated(true);
      router.push('/');

    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmitLogin)}>
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Please login to access to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="Email" />
                  </FormControl>
                  <FormDescription>Please enter your email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-5">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormDescription/>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Login</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default Login;
