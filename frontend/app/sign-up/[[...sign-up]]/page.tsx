import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] flex items-center justify-center relative overflow-hidden">


      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl top-20 left-20"></div>

        <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bottom-20 right-20"></div>

      </div>


      {/* Clerk Signup Card */}
      <div className="relative z-10">

        <SignUp
          appearance={{
            elements: {

              card:
                "bg-[#121212] border border-gray-800 shadow-2xl",

              headerTitle:
                "text-white",

              headerSubtitle:
                "text-gray-400",

              formButtonPrimary:
                "bg-yellow-500 hover:bg-yellow-400 text-black",

              formFieldInput:
                "bg-[#0b0b0f] text-white border-gray-700",

              footerActionText:
                "text-gray-400",

              footerActionLink:
                "text-yellow-500",

            },
          }}
        />

      </div>


    </main>
  );
}