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
import { Wrench } from "lucide-react";
import * as Yup from "yup";
import useRegister from "./_hooks/useRegister";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(3),
  email: Yup.string().required("Email is required").email(),
  password: Yup.string().required("Password is required").min(6),
});

const SignUp = () => {
  const { mutateAsync: register, isPending } = useRegister();

  return (
    <main className="container mx-auto flex min-h-[100vh] items-center justify-center px-10">
      <Card className="mx-auto w-full max-w-sm">
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await register(values);
          }}
        >
          <Form className="space-y-4">
            <CardHeader>
              <CardTitle>Register to your account</CardTitle>
              <CardDescription>
                Enter your data below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                {/* NAME */}
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Field
                    name="name"
                    as={Input}
                    type="text"
                    placeholder="Your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* EMAIL */}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Field
                    name="email"
                    as={Input}
                    type="email"
                    placeholder="Your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* PASSWORD */}
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Field
                    name="password"
                    as={Input}
                    type="password"
                    placeholder="Your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? <Wrench className="animate-spin" /> : "Register"}
              </Button>
            </CardFooter>
          </Form>
        </Formik>
      </Card>
    </main>
  );
};

export default SignUp;
