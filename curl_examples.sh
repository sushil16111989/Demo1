#!/bin/bash

# REST API Client Examples using cURL
# This script demonstrates how to use cURL for making GET and POST requests

echo "=== REST API Client Examples using cURL ==="
echo ""

# Base URL for testing
BASE_URL="https://jsonplaceholder.typicode.com"

echo "1. Basic GET Request"
echo "==================="
echo "Getting all users:"
curl -X GET "${BASE_URL}/users" | jq '.[0:2]' 2>/dev/null || curl -X GET "${BASE_URL}/users"
echo ""
echo ""

echo "2. GET Request with Query Parameters"
echo "==================================="
echo "Getting posts for user 1 with limit:"
curl -X GET "${BASE_URL}/posts?userId=1&_limit=3" | jq '.' 2>/dev/null || curl -X GET "${BASE_URL}/posts?userId=1&_limit=3"
echo ""
echo ""

echo "3. Basic POST Request"
echo "===================="
echo "Creating a new post:"
curl -X POST "${BASE_URL}/posts" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Post via cURL",
    "body": "This is a test post created using cURL",
    "userId": 1
  }' | jq '.' 2>/dev/null || curl -X POST "${BASE_URL}/posts" \
  -H "Content-Type: application/json" \
  -d '{"title": "Test Post via cURL", "body": "This is a test post created using cURL", "userId": 1}'
echo ""
echo ""

echo "4. PUT Request (Update)"
echo "======================"
echo "Updating post with ID 1:"
curl -X PUT "${BASE_URL}/posts/1" \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "title": "Updated Post via cURL",
    "body": "This post has been updated using cURL",
    "userId": 1
  }' | jq '.' 2>/dev/null || curl -X PUT "${BASE_URL}/posts/1" \
  -H "Content-Type: application/json" \
  -d '{"id": 1, "title": "Updated Post via cURL", "body": "This post has been updated using cURL", "userId": 1}'
echo ""
echo ""

echo "5. DELETE Request"
echo "================="
echo "Deleting post with ID 1:"
curl -X DELETE "${BASE_URL}/posts/1" | jq '.' 2>/dev/null || curl -X DELETE "${BASE_URL}/posts/1"
echo ""
echo ""

echo "6. GET Request with Headers"
echo "==========================="
echo "Getting user with custom headers:"
curl -X GET "${BASE_URL}/users/1" \
  -H "Accept: application/json" \
  -H "User-Agent: cURL-Example/1.0" | jq '.' 2>/dev/null || curl -X GET "${BASE_URL}/users/1" \
  -H "Accept: application/json" \
  -H "User-Agent: cURL-Example/1.0"
echo ""
echo ""

echo "7. POST Request with Authentication"
echo "==================================="
echo "Example with authentication header (will work with JSONPlaceholder):"
curl -X POST "${BASE_URL}/posts" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your_token_here" \
  -d '{
    "title": "Authenticated Post",
    "body": "This post includes auth headers",
    "userId": 1
  }' | jq '.' 2>/dev/null || curl -X POST "${BASE_URL}/posts" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your_token_here" \
  -d '{"title": "Authenticated Post", "body": "This post includes auth headers", "userId": 1}'
echo ""
echo ""

echo "8. File Upload Example (using httpbin.org)"
echo "=========================================="
echo "Uploading a file (simulated):"
echo "This is a test file content" > test_file.txt
curl -X POST "https://httpbin.org/post" \
  -F "file=@test_file.txt" \
  -F "description=Uploaded via cURL" | jq '.' 2>/dev/null || curl -X POST "https://httpbin.org/post" \
  -F "file=@test_file.txt" \
  -F "description=Uploaded via cURL"
rm -f test_file.txt
echo ""
echo ""

echo "9. Verbose Request Example"
echo "=========================="
echo "Making a request with verbose output:"
curl -v -X GET "${BASE_URL}/users/1"
echo ""
echo ""

echo "10. Save Response to File"
echo "========================="
echo "Saving response to file:"
curl -X GET "${BASE_URL}/users/1" -o user_1.json
echo "Response saved to user_1.json"
cat user_1.json | jq '.' 2>/dev/null || cat user_1.json
rm -f user_1.json
echo ""
echo ""

echo "=== Additional cURL Examples ==="
echo ""
echo "Here are some useful cURL command patterns:"
echo ""
echo "Basic GET request:"
echo "curl -X GET 'https://api.example.com/endpoint'"
echo ""
echo "GET with query parameters:"
echo "curl -X GET 'https://api.example.com/endpoint?param1=value1&param2=value2'"
echo ""
echo "POST with JSON data:"
echo "curl -X POST 'https://api.example.com/endpoint' \\"
echo "  -H 'Content-Type: application/json' \\"
echo "  -d '{\"key\": \"value\"}'"
echo ""
echo "POST with form data:"
echo "curl -X POST 'https://api.example.com/endpoint' \\"
echo "  -d 'param1=value1&param2=value2'"
echo ""
echo "With authentication:"
echo "curl -X GET 'https://api.example.com/endpoint' \\"
echo "  -H 'Authorization: Bearer your_token_here'"
echo ""
echo "With custom headers:"
echo "curl -X GET 'https://api.example.com/endpoint' \\"
echo "  -H 'Accept: application/json' \\"
echo "  -H 'X-API-Key: your_api_key'"
echo ""
echo "File upload:"
echo "curl -X POST 'https://api.example.com/upload' \\"
echo "  -F 'file=@/path/to/file.txt' \\"
echo "  -F 'description=File description'"
echo ""
echo "Verbose output (for debugging):"
echo "curl -v -X GET 'https://api.example.com/endpoint'"
echo ""
echo "Save response to file:"
echo "curl -X GET 'https://api.example.com/endpoint' -o response.json"
echo ""
echo "Follow redirects:"
echo "curl -L -X GET 'https://api.example.com/endpoint'"
echo ""
echo "With timeout:"
echo "curl --max-time 30 -X GET 'https://api.example.com/endpoint'"
echo ""
echo "Ignore SSL certificate:"
echo "curl -k -X GET 'https://api.example.com/endpoint'"
echo ""

echo "=== Notes ==="
echo "- Install 'jq' for pretty JSON formatting: sudo apt-get install jq (Ubuntu/Debian)"
echo "- Use -v flag for verbose output to see request/response details"
echo "- Use -H flag to add custom headers"
echo "- Use -d flag for POST data"
echo "- Use -F flag for multipart form data (file uploads)"
echo "- Use -o flag to save response to file"
echo "- Use -L flag to follow redirects"
echo "- Use --max-time to set timeout"
echo "- Use -k flag to ignore SSL certificate errors (not recommended for production)"