
import { AccountResponseLogin, AccountResponseRegister, ChangePassword, LoginType, RegisterType } from "../../types";
import axiosClient from "./axios-client";

const accountAPI = {
    postLogin(data: LoginType): Promise<AccountResponseLogin> {
        const url = "auth/login";
        return axiosClient.post(url, data);
    },
    postRegister(data: RegisterType): Promise<AccountResponseRegister> {
        const url = "auth/register";
        return axiosClient.post(url, data);
    },

    postCheckToken(): Promise<any> {
        const url = "checktoken";
        return axiosClient.get(url);
    },

    postChangePassWord(data: ChangePassword): Promise<any> {
        const url = "auth/changepassword";
        return axiosClient.post(url, data);
    },
};
export default accountAPI;