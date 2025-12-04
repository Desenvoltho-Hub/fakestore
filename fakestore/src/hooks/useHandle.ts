import { useForm, type FieldValues } from "react-hook-form";


export const useHandleChange = <T extends FieldValues>() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues
  } = useForm<T>();
  return {
    register,
    errors,
    handleSubmit,
    watch,
    getValues
  };
};
