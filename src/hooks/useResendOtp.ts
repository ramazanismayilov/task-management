import { useResendOtpMutation } from "../store/services/authApi";

export function useResendOtp() {
    const [resendOtp] = useResendOtpMutation();

    const email = localStorage.getItem("email");

    const handleResend = async () => {
        await resendOtp({ email }).unwrap();
    };
    return { handleResend };
}
