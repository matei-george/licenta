import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalProvider = ({ children }) => {
   return <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>{children}</PayPalScriptProvider>;
};

export default PayPalProvider;
