import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import Link from "next/link";

const Register = async () => {
    return (
        <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
          <h2>Welcome to MyCreation</h2>

          <p>Please provide all the necessary information</p>


        <form>
            <div>
                <Label>First Name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" name="firstname"/>
                <Label>Last Name</Label>
                <Input id="lastname" placeholder="Durden" type="text" name="lastname"/>
            </div>
        <Label>Email Address</Label>
        <Input id="email" placeholder="pavanisri@gmail.com" type="email" name="email"/>
        <Label>Password</Label>
        <Input id="password" placeholder="***********" type="password" name="password"/>

        <button>Sign up &rarr;</button>

        </form>

        </div>
    )
}

export default Register