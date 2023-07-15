import { useRouter } from "next/navigation";

export function OAuthSignIn() {
  const router = useRouter();

  const handleSuccess = (response: any) => {
    console.log('Google Sign-In Successful', response);
    // Send the token to your server for verification and user creation
    // Replace this with your actual server-side logic
  };

  const handleFailure = (response: any) => {
    console.log('Google Sign-In Failed', response);
  };

  return (
    <div>
      
    </div>
  );
};
