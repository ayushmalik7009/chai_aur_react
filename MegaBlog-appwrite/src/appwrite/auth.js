import conf from "../config/conf.js";
import {Client ,Account , ID} from "appwrite";

export class AuthService {


    Client = new Client();
    account;

    constructor() {
        this.Client
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.Client);

    }
    async createAccount({email,password ,name}){
        try {
           const userAccount =  await this.account.create(ID.unique(), email,password,name);
           if (userAccount) {
                // call another method
                return this.login({email,password});
           } else {
            return userAccount;
           }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite surver :: getCurrentUser :: error",error);
        }

        return null;    
    }

    async logout(){
        try {
            await this.account.deleteSessions('current');  /*logout ke liye use hoga ye*/
        } catch (error) {
            console.log("Appwrite surver :: logout :: error",error)
        }
    }
};

const authService = new AuthService();
export default authService;   // object me convert krne ke liye