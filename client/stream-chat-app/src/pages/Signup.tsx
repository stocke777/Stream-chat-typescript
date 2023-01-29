import { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Signup() {
    const userNameRef = useRef(null)
    const name = useRef(null)
    const imageUrl = useRef(null)
  return <>
    <h1 className="text-3xl font-bold mb-8 text-center">Signup</h1>
    <form className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end">
        <label htmlFor="userName">Username</label>
        <Input id='userName' ref={userNameRef} required pattern="\S*" />
        <label htmlFor="name">Name</label>
        <Input id='name' ref={name} required  />
        <label htmlFor="imageUrl">Image Url</label>
        <Input id='imageUrl' ref={imageUrl} type="url" />
        <Button type="submit" className="col-span-full">Submit</Button>
    </form>

  </>;
}
