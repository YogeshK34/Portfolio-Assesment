"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners"; // Import from react-spinners

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/signin");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <ClipLoader size={50} color="#3498db" loading={true} />
        <p className="text-xl mt-4">Redirecting ...</p>
      </div>
    </div>
  );
}
