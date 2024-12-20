package payment

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

// Chapa API Base URL and Secret Key
const chapaBaseURL = "https://api.chapa.co/v1"
const chapaSecretKey = "CHASECK_TEST-GdLwnDgIq11gkolK98FSWSjgJSMSamrY"

// PaymentRequest represents the request payload for creating a payment session
type PaymentRequest struct {
	Amount        string            `json:"amount"`
	Currency      string            `json:"currency"`
	Email         string            `json:"email"`
	FirstName     string            `json:"first_name"`
	LastName      string            `json:"last_name"`
	TxRef         string            `json:"tx_ref"`
	CallbackURL   string            `json:"callback_url"`
	ReturnURL     string            `json:"return_url"`
	Customization map[string]string `json:"customization"`
}

// PaymentResponse represents the response from Chapa API
type PaymentResponse struct {
	Status  string `json:"status"`
	Message string `json:"message"`
	Data    struct {
		CheckoutURL string `json:"checkout_url"`
	} `json:"data"`
}

// CreatePaymentSession initiates a payment session with Chapa
func CreatePaymentSession(w http.ResponseWriter, r *http.Request) {
	// Decode the JSON request body to get dynamic values from frontend
	var requestData struct {
		Amount      string `json:"amount"`
		Currency    string `json:"currency"`
		Email       string `json:"email"`
		FirstName   string `json:"first_name"`
		LastName    string `json:"last_name"`
		TxRef       string `json:"tx_ref"`
		CallbackURL string `json:"callback_url"`
		ReturnURL   string `json:"return_url"`
	}

	// Read the request body and decode it
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Failed to read request body", http.StatusInternalServerError)
		return
	}

	if err := json.Unmarshal(body, &requestData); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	// Build the payment request
	requestBody := PaymentRequest{
		Amount:      requestData.Amount,
		Currency:    requestData.Currency,
		Email:       requestData.Email,
		FirstName:   requestData.FirstName,
		LastName:    requestData.LastName,
		TxRef:       requestData.TxRef,
		CallbackURL: requestData.CallbackURL,
		ReturnURL:   requestData.ReturnURL,
		Customization: map[string]string{
			"title": "Test Payment",
			"logo":  "https://yourlogo.com/logo.png",
		},
	}

	// Marshal request body into JSON
	bodyData, err := json.Marshal(requestBody)
	if err != nil {
		http.Error(w, "Failed to encode request body", http.StatusInternalServerError)
		return
	}

	// Make a POST request to Chapa API
	req, err := http.NewRequest("POST", chapaBaseURL+"/transaction/initialize", bytes.NewBuffer(bodyData))
	if err != nil {
		http.Error(w, "Failed to create request", http.StatusInternalServerError)
		return
	}
	req.Header.Set("Authorization", "Bearer "+chapaSecretKey)
	req.Header.Set("Content-Type", "application/json")

	// Execute the request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		http.Error(w, "Failed to send request to Chapa", http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	// Parse response
	respBody, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		http.Error(w, "Failed to read Chapa response", http.StatusInternalServerError)
		return
	}

	var paymentResponse PaymentResponse
	if err := json.Unmarshal(respBody, &paymentResponse); err != nil {
		http.Error(w, "Failed to decode Chapa response", http.StatusInternalServerError)
		return
	}

	// Redirect user to Chapa checkout URL
	if paymentResponse.Status == "success" {
		http.Redirect(w, r, paymentResponse.Data.CheckoutURL, http.StatusSeeOther)
	} else {
		http.Error(w, paymentResponse.Message, http.StatusInternalServerError)
	}
}

// VerifyPayment verifies the payment after callback
func VerifyPayment(w http.ResponseWriter, r *http.Request) {
	txRef := r.URL.Query().Get("tx_ref")

	// Verify the payment
	url := fmt.Sprintf("%s/transaction/verify/%s", chapaBaseURL, txRef)
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		http.Error(w, "Failed to create verification request", http.StatusInternalServerError)
		return
	}
	req.Header.Set("Authorization", "Bearer "+chapaSecretKey)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		http.Error(w, "Failed to verify payment", http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		http.Error(w, "Failed to read verification response", http.StatusInternalServerError)
		return
	}

	var verifyResponse map[string]interface{}
	if err := json.Unmarshal(body, &verifyResponse); err != nil {
		http.Error(w, "Failed to parse verification response", http.StatusInternalServerError)
		return
	}

	// Show payment success or failure message
	if verifyResponse["status"] == "success" {
		w.Write([]byte("Payment successful!"))
	} else {
		w.Write([]byte("Payment failed!"))
	}
}
