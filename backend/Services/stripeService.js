const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Function to create a Payment Intent
const createPaymentIntent = async (amount, currency = "usd") => {
   try {
      const paymentIntent = await stripe.paymentIntents.create({
         amount,
         currency,
      });
      return paymentIntent;
   } catch (error) {
      throw new Error(`Failed to create Payment Intent: ${error.message}`);
   }
};

// Function to confirm a Payment Intent (process payment)
const confirmPaymentIntent = async (paymentIntentId) => {
   try {
      const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
      return paymentIntent;
   } catch (error) {
      throw new Error(`Failed to confirm Payment Intent: ${error.message}`);
   }
};

// Function to handle webhook events from Stripe
const handleStripeWebhook = async (payload) => {
   try {
      // Retrieve the event from the Stripe webhook payload
      const event = stripe.webhooks.constructEvent(payload, process.env.STRIPE_WEBHOOK_SECRET);

      // Handle specific types of webhook events here
      switch (event.type) {
         case "payment_intent.succeeded":
            const paymentIntent = event.data.object;
            // Handle successful payment intent
            console.log("Payment Intent succeeded:", paymentIntent);
            break;
         case "payment_intent.payment_failed":
            const failedPaymentIntent = event.data.object;
            // Handle failed payment intent
            console.log("Payment Intent failed:", failedPaymentIntent);
            break;
         // Add more cases for other event types as needed
         default:
            console.log(`Unhandled event type: ${event.type}`);
      }

      // Return a response to acknowledge receipt of the event
      return {
         received: true,
      };
   } catch (error) {
      throw new Error(`Failed to handle Stripe webhook: ${error.message}`);
   }
};

module.exports = {
   createPaymentIntent,
   confirmPaymentIntent,
   handleStripeWebhook,
};
