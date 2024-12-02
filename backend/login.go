package main

import (
	"database/sql"
	"encoding/json"
	"errors"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v5"
	_ "github.com/lib/pq"
	"golang.org/x/crypto/bcrypt"
)

// JWT secret key
var jwtSecret = []byte("0kVCpjYOsoYYI7M7nWDFDcF/hAtqo0oi")

// User represents a user record in the database
type User struct {
	ID         string
	Email      string
	Password   string
	IsVerified bool
	Role       string
	Name       string
}

// LoginOutput represents the structure of the login response
type LoginOutput struct {
	AccessToken string `json:"accessToken"`
	UserID      string `json:"userId"`
	Role        string `json:"role"`
	Name        string `json:"name"`
}

func GenerateJWT(userID string, role string) (string, error) {
	claims := jwt.MapClaims{
		"userId": userID,
		"role":   role,
		"exp":    time.Now().Add(time.Hour * 1).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(jwtSecret)
}

func ValidateCredentials(db *sql.DB, email, password string) (*User, error) {
	var user User
	query := `SELECT id, email, password, is_verified, role, name FROM users WHERE email = $1 AND is_verified = true`

	err := db.QueryRow(query, email).Scan(&user.ID, &user.Email, &user.Password, &user.IsVerified, &user.Role, &user.Name)
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, errors.New("invalid email or user not verified")
		}
		return nil, err
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		return nil, errors.New("invalid password")
	}

	return &user, nil
}

func LoginHandler(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var requestBody map[string]interface{}
		if err := json.NewDecoder(r.Body).Decode(&requestBody); err != nil {
			http.Error(w, `{"message": "Invalid request payload"}`, http.StatusBadRequest)
			return
		}

		var email, password string
		if inputData, ok := requestBody["input"].(map[string]interface{}); ok {
			if nestedInput, ok := inputData["input"].(map[string]interface{}); ok {
				if credentials, ok := nestedInput["credentials"].(map[string]interface{}); ok {
					email, _ = credentials["email"].(string)
					password, _ = credentials["password"].(string)
				}
			}
		}

		if email == "" || password == "" {
			http.Error(w, `{"message": "Email and password are required"}`, http.StatusBadRequest)
			return
		}

		user, err := ValidateCredentials(db, email, password)
		if err != nil {
			http.Error(w, `{"message": "Invalid credentials"}`, http.StatusUnauthorized)
			return
		}

		accessToken, err := GenerateJWT(user.ID, user.Role)
		if err != nil {
			http.Error(w, `{"message": "Internal server error"}`, http.StatusInternalServerError)
			return
		}

		response := map[string]interface{}{
			"accessToken": accessToken,
			"userId":      user.ID,
			"role":        user.Role,
			"name":        user.Name,
		}

		w.Header().Set("Content-Type", "application/json")
		if err := json.NewEncoder(w).Encode(response); err != nil {
			http.Error(w, `{"message": "Internal server error"}`, http.StatusInternalServerError)
		}
	}
}
