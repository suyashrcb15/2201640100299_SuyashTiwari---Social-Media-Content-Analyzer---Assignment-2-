import { SignUp } from "@clerk/nextjs";
import bg from "@/assets/images/bg.jpg";

export default function SignUpPage() {
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
                <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
            </div>
        </div>
    );
}
