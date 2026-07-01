const ZohoSalesIQ = {
     init(props) {
          if (!props.widgetcode.length || !props.domain) {
               throw new Error(
                    `[zoho-salesiq] Enter SalesIQ ${props.widgetcode.length ? "Domain" : "Widget code"}`
               );
          }
          
          window.$zoho = window.$zoho || {};
          $zoho.salesiq = $zoho.salesiq || { ready : function() {} };
          
          // $zoho.salesiq.ready = function() {
               // Set visitor email
               // $zoho.salesiq.visitor.email("visitor@example.com");
               
               // Set visitor name
               // $zoho.salesiq.visitor.firstname("John");
               // $zoho.salesiq.visitor.lastname("Doe");
               
               // Set visitor phone number
               // $zoho.salesiq.visitor.contactnumber("+1234567890");
               
               // Set custom visitor attributes
               // $zoho.salesiq.visitor.info("Customer ID", "12345");
               // $zoho.salesiq.visitor.info("Plan Type", "Premium");
               
               // Open chat window
               // $zoho.salesiq.floatbutton.visible("show");
               
               // Close chat window
               // $zoho.salesiq.floatbutton.visible("hide");
          // }
          
          let script = document.createElement("script");
          script.type = "text/javascript";
          script.id = "zsiqscript";
          script.defer = true;
          script.src = props.domain + "/widget?wc=" + props.widgetcode;
          document.body.append(script);
     }
};

export default ZohoSalesIQ;
