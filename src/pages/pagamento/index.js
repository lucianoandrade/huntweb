import React from "react";

function pagamento() {
  const API_KEY =
    "T1QtNDQ3MjYwOkItcWEyLTAtNWU3Y2RmNjgtMC0zMDJkMDIxNTAwODM1ZGUwZjM0MDk5YjlkYzY3MzcwYzc2ZTlkZTA3MWFkZmQ1MmRmNDAyMTQ3ZmViMGI1MDRiZjQ3ZTMyNDNhODA5Yzc1ODBkNzg3MTExYmU4ZDI3";

  const checkout = () => {
    window.paysafe.checkout.setup(
      API_KEY,
      {
        amount: 1,
        currency: "USD",
        environment: "TEST",
        companyName: "Example Inc."
      },
      function(instance, error, result) {
        if (result.token) {
          console.log(result.token);
          console.log(result.paymentMethod);

          if (result.paymentMethod === "Cards") {
            // use AJAX to send result.token to your merchant server to take CC payment
            // enviar result.token ao servidor do comerciante para receber o pagamento

            console.log(result);
          }

          if (result.paymentMethod === "DirectDebit") {
            // use AJAX to send result.token to your merchant server to take DD payment
            console.log(result);
          }

          if (result.paymentMethod === "Interac") {
            // use AJAX to send result.token to your merchant server to take Interac payment
            console.log(result);
          }

          if (result.paymentMethod === "PayPal") {
            // use AJAX to send result.token to your merchant server to take PayPal payment
            console.log(result);
          }
        } else {
          // error handling
          console.log("error", error);
        }
      }
    );
  };
  return (
    <>
      <div style={{textAlign: "center", margin: "10%"}}>
        <h1>Stars</h1>
        <h1>Stars</h1>
        <h1>Stars</h1>
        <h1>Stars</h1>
        <h1>Stars</h1>
        <h1>Stars</h1>
        <h1>Stars</h1>
        <h1>Stars</h1>
        <h1>Stars</h1>
        <button
          style={{
            width: "300px",
            height: "30px",
            backgroundColor: "#C00000",
            color: "white",
            cursor: "pointer",
            marginTop: "30px"
          }}
          onClick={checkout}
        >
          Comprar
        </button>
      </div>
    </>
  );
}

export default pagamento;
