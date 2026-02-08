"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { contactLinks } from "@/lib/data";

const Contact = () => {
  const [contactData, setContactData] = useState<any>(contactLinks);
  const [result, setResult] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const json = JSON.stringify(Object.fromEntries(formData));

    setResult("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (response.status === 200) {
        setResult(data.message);
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setResult("Something went wrong!");
    }

    form.reset();

    setTimeout(() => setResult(""), 5000);
  };

  return (
    <section id="contact" className="no-print relative hero-section overflow-hidden before:absolute before:w-full before:h-full bg-muted dark:bg-gradient-to-b from-[#1a1a1a] to-black py-10">
      <div className="container relative z-10">
        <div className="pt-16 md:pt-32 pb-6 md:pb-10">
          <div className="flex items-center justify-between gap-2 border-b border-primary pb-7 mb-9 md:mb-16">
            <h2>Contact Me</h2>
            <p className="text-xl text-primary">( 05 )</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <form onSubmit={onSubmit}>
              <input
                type="hidden"
                name="access_key"
                value="a6a5e640-ed0a-43cf-a000-fd2b8650a53f"
              />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="flex flex-col gap-7 sm:gap-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Label htmlFor="firstname" className="label">
                      First Name *
                    </Label>
                    <Input
                      required
                      className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                      id="firstname"
                      name="firstname"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastname" className="label">
                      Last Name *
                    </Label>
                    <Input
                      required
                      className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                      id="lastname"
                      name="lastname"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Label htmlFor="email" className="label">
                      Email *
                    </Label>
                    <Input
                      required
                      className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="number" className="label">
                      Phone *
                    </Label>
                    <Input
                      required
                      className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2! [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      id="number"
                      type="number"
                      name="number"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="label">
                    Message *
                  </Label>
                  <Textarea
                    required
                    className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                    name="message"
                    id="message"
                    rows={2}
                    placeholder="Your Message"
                  />
                </div>
                {result && (
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground">{result}</p>
                  </div>
                )}
                <Button
                  variant="outline"
                  type="submit"
                  className="button relative overflow-hidden cursor-pointer w-fit h-full py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                >
                  <span className="relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-500">
                    Send Now
                  </span>
                </Button>
              </div>
            </form>
            <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end">
              <div className="flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6">
                {contactData?.socialLinks?.map((value: any, index: any) => {
                  return (
                    <div key={index}>
                      <Link
                        href={value?.href}
                        target="_blank"
                        className="text-base sm:text-lg font-normal text-muted-foreground hover:text-primary"
                      >
                        {value?.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap justify-center gap-5 lg:gap-11 items-end">
                {contactData?.contactInfo?.map((value: any, index: any) => {
                  return (
                    <div key={index}>
                      <Link
                        href={value?.link}
                        className="text-base lg:text-lg font-normal border-b pb-3 hover:text-primary hover:border-primary"
                      >
                        {value?.label}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
