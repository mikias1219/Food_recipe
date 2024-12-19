# Start with the official Golang image
FROM golang:1.23

# Set the working directory
WORKDIR /app

# Copy Go modules and application code
COPY go.mod go.sum ./
RUN go mod download
COPY . .

# Build the Go application
RUN go build -o main .

# Expose the port the app runs on
EXPOSE 8085

# Run the application
CMD ["."]
