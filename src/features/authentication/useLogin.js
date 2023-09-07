import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      console.log(user);
      navigate("/dashboard");
    },

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}