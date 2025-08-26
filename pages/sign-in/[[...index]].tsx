// app/sign-in/page.tsx or pages/sign-in.tsx
import { SignIn } from "@clerk/nextjs";
import bg from "@/assets/images/bg.jpg"; // adjust path based on your folder structure

export default function SignInPage() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                style={{
                    background: "rgba(255,255,255,0.85)",
                    padding: "32px",
                    borderRadius: "16px",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                }}
            >
                <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
            </div>
        </div>
    );
}
