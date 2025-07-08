"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Loader } from "lucide-react";
import useLogin from "./_hooks/useLogin";
import Link from "next/link";

const SignIn = () => {
  const { mutateAsync: login, isPending } = useLogin();

  return (
    <main className="relative flex min-h-screen items-center justify-center p-4 sm:p-10">
      <Card className="relative z-10 w-full max-w-md overflow-hidden rounded-xl border-2 border-green-200 shadow-2xl">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            await login({ login: values.email, password: values.password });
          }}
        >
          <Form className="space-y-6 p-6">
            <CardHeader className="pb-0 text-center">
              <CardTitle className="mb-2 text-3xl font-extrabold text-green-700">
                Join GreenStride
              </CardTitle>
              <CardDescription className="text-base text-green-800">
                Enter your details below to access your account and make an
                impact.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-col gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="font-medium text-green-800">
                    Email
                  </Label>
                  <Field
                    name="email"
                    as={Input}
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-green-300 text-gray-800 focus:border-green-500 focus:ring-green-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-sm text-red-600"
                  />
                </div>

                <div className="grid gap-2">
                  <Label
                    htmlFor="password"
                    className="font-medium text-green-800"
                  >
                    Password
                  </Label>
                  <Field
                    name="password"
                    as={Input}
                    type="password"
                    placeholder="••••••••"
                    className="border-green-300 text-gray-800 focus:border-green-500 focus:ring-green-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-sm text-red-600"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4 pt-0">
              <Button
                type="submit"
                className="w-full rounded-lg bg-green-600 py-3 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:bg-green-700"
                disabled={isPending}
              >
                {isPending ? (
                  <Loader className="h-6 w-6 animate-spin" />
                ) : (
                  "Login to GreenStride"
                )}
              </Button>
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/sign-up"
                  className="font-semibold text-green-600 hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </CardFooter>
          </Form>
        </Formik>
      </Card>
    </main>
  );
};

export default SignIn;
