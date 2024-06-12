"use client";
import { CustomIcon } from "@/app/atoms/_components/icons/CustomIcons";
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

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const SigninSchema = z.object({
  pseudo: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).max(10, {
    message: "Username can't exceed 10 characters.",
  }),
  email: z.string().trim().min(1, "Email required !").email("Invalid email"),
  password: z
  .string()
  .min(8, "Password requires at least 8 characters !")
  .regex(passwordValidation, {
    message: 'Password not valid! Add at least one uppercase letter, one lowercase letter, one number and one special character',
  }),
    
    confirmPassword: z.string().min(8, "Password requires at least 8 characters !"),
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match",
      path: ['confirmPassword']
    });
  }
});

type SigninValues = z.infer<typeof SigninSchema>;

const Signin = () => {
  const form = useForm<SigninValues>({
    resolver: zodResolver(SigninSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmitSignin = (values: SigninValues) => {
    console.log("Should sign in with values:", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmitSignin)}>
        <Card>
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
              Enter your infos below to create an account.
            </CardDescription>
          </CardHeader>
          <CardContent>
          <FormField
              control={form.control}
              name="pseudo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="mycombosssname" />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-5">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="name@example.com"
                    />
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
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="mt-5">
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col gap-8">
            <Button className="w-full">Signin with Email</Button>
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button className="py-5 w-full gap-2" variant={"outline"}>
              <CustomIcon name="gmail" size={20} /> Signin with your Google
              adress
            </Button>

            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default Signin;
