import '../styles/global.css'
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../auth/authConfig";
import { PublicClientApplication } from "@azure/msal-browser";

/**
 * MSAL should be instantiated outside of the component tree to prevent it from being re-instantiated on re-renders. 
 * For more, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */
 export const msalInstance = new PublicClientApplication(msalConfig);

 // Account selection logic is app dependent. Adjust as needed for different use cases.
 const accounts = msalInstance.getAllAccounts();
 
 if (accounts.length > 0) {
   msalInstance.setActiveAccount(accounts[0]);
 }
 
export default function App({ Component, pageProps }) {
    return   <MsalProvider instance={msalInstance}>
        <Component {...pageProps} />
        </MsalProvider>
  }
  