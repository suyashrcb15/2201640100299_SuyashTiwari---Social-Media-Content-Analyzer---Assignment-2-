import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Profile() {
    return (
        <div className="container card">
            <SignedIn>
                <h2>Welcome!</h2>
                <p>You are signed in 🎉</p>
                <UserButton afterSignOutUrl="/sign-in" />
            </SignedIn>
            <SignedOut>
                <p>You are signed out. <a href="/sign-in">Sign in</a></p>
            </SignedOut>
        </div>
    );
}
