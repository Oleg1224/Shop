'use client'
import { useAppSelector } from "@/redux/store"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

export const Headers = () => {
    const {email} = useAppSelector(store=>store.user)
    return (
        <header>
            <Link href="/">Products</Link>
            {/* <Link href="/">Main</Link>
            <Link href="/">Main</Link> */}
            <div>Sign Up</div>
            <div>Sign In</div>
        </header>
    )
}
