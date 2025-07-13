# REST API Client Examples

Comprehensive examples and implementations for sending POST and GET REST API requests using different programming languages and approaches.

## 📁 Project Structure

```
.
├── api_client.py          # Python REST API client with examples
├── api_client.js          # JavaScript/Node.js REST API client
├── api_demo.html          # Interactive HTML demo page
├── requirements.txt       # Python dependencies
└── README.md             # This documentation file
```

## 🚀 Quick Start

### Python Examples

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run Python examples:**
   ```bash
   python api_client.py
   ```

3. **Basic usage:**
   ```python
   from api_client import APIClient
   
   # Create client
   client = APIClient("https://jsonplaceholder.typicode.com")
   
   # GET request
   users = client.get_request_requests('/users')
   print(f"Retrieved {len(users)} users")
   
   # POST request
   new_post = {"title": "Test", "body": "Content", "userId": 1}
   response = client.post_request_requests('/posts', new_post)
   print(f"Created post with ID: {response.get('id')}")
   ```

### JavaScript Examples

1. **Browser usage:**
   - Open `api_demo.html` in your browser
   - Use the interactive demo to test API requests

2. **Node.js usage:**
   ```bash
   node api_client.js
   ```

3. **Basic usage:**
   ```javascript
   const client = new APIClient('https://jsonplaceholder.typicode.com');
   
   // GET request
   const users = await client.getRequest('/users');
   console.log(`Retrieved ${users.length} users`);
   
   // POST request
   const newPost = { title: 'Test', body: 'Content', userId: 1 };
   const response = await client.postRequest('/posts', newPost);
   console.log(`Created post with ID: ${response.id}`);
   ```

## 📚 API Documentation

### Python APIClient Class

#### Constructor
```python
APIClient(base_url: str = "https://api.example.com", timeout: int = 30)
```

**Parameters:**
- `base_url` (str): Base URL for the API
- `timeout` (int): Request timeout in seconds

#### Methods

##### GET Requests
```python
get_request_requests(endpoint: str, params: Optional[Dict] = None, headers: Optional[Dict] = None) -> Dict[str, Any]
```

**Parameters:**
- `endpoint` (str): API endpoint (e.g., '/users')
- `params` (dict, optional): Query parameters
- `headers` (dict, optional): Additional headers

**Returns:** Response data as dictionary

**Example:**
```python
# Simple GET request
users = client.get_request_requests('/users')

# GET request with parameters
posts = client.get_request_requests('/posts', params={'userId': 1, '_limit': 5})
```

##### POST Requests
```python
post_request_requests(endpoint: str, data: Dict[str, Any], headers: Optional[Dict] = None) -> Dict[str, Any]
```

**Parameters:**
- `endpoint` (str): API endpoint (e.g., '/users')
- `data` (dict): Data to send in the request body
- `headers` (dict, optional): Additional headers

**Returns:** Response data as dictionary

**Example:**
```python
new_post = {
    "title": "Test Post",
    "body": "This is a test post",
    "userId": 1
}
response = client.post_request_requests('/posts', new_post)
```

### JavaScript APIClient Class

#### Constructor
```javascript
APIClient(baseURL = 'https://api.example.com', timeout = 30000)
```

**Parameters:**
- `baseURL` (string): Base URL for the API
- `timeout` (number): Request timeout in milliseconds

#### Methods

##### GET Requests
```javascript
async getRequest(endpoint, params = {}, headers = {})
```

**Parameters:**
- `endpoint` (string): API endpoint (e.g., '/users')
- `params` (object): Query parameters
- `headers` (object): Additional headers

**Returns:** Promise that resolves to response data

**Example:**
```javascript
// Simple GET request
const users = await client.getRequest('/users');

// GET request with parameters
const posts = await client.getRequest('/posts', { userId: 1, _limit: 5 });
```

##### POST Requests
```javascript
async postRequest(endpoint, data = {}, headers = {})
```

**Parameters:**
- `endpoint` (string): API endpoint (e.g., '/users')
- `data` (object): Data to send in the request body
- `headers` (object): Additional headers

**Returns:** Promise that resolves to response data

**Example:**
```javascript
const newPost = {
    title: 'Test Post',
    body: 'This is a test post',
    userId: 1
};
const response = await client.postRequest('/posts', newPost);
```

## 🔧 Advanced Features

### Authentication

Both Python and JavaScript clients support custom headers for authentication:

```python
# Python
headers = {
    'Authorization': 'Bearer your_token_here',
    'X-API-Key': 'your_api_key_here'
}
response = client.get_request_requests('/protected-endpoint', headers=headers)
```

```javascript
// JavaScript
const headers = {
    'Authorization': 'Bearer your_token_here',
    'X-API-Key': 'your_api_key_here'
};
const response = await client.getRequest('/protected-endpoint', {}, headers);
```

### File Upload

**Python:**
```python
files = {
    'file': ('filename.txt', open('filename.txt', 'rb'), 'text/plain')
}
data = {'description': 'Uploaded file'}

response = client.session.post(
    f"{client.base_url}/upload",
    files=files,
    data=data,
    timeout=client.timeout
)
```

**JavaScript:**
```javascript
const formData = new FormData();
formData.append('file', file);
formData.append('description', 'Uploaded file');

const response = await fetch(`${client.baseURL}/upload`, {
    method: 'POST',
    body: formData
});
```

### Error Handling

Both clients include comprehensive error handling:

```python
try:
    response = client.get_request_requests('/users')
    print("Success:", response)
except requests.exceptions.RequestException as e:
    print(f"Request failed: {e}")
```

```javascript
try {
    const response = await client.getRequest('/users');
    console.log('Success:', response);
} catch (error) {
    console.error('Request failed:', error.message);
}
```

## 🌐 Testing APIs

The examples use these free testing APIs:

1. **JSONPlaceholder** (`https://jsonplaceholder.typicode.com`)
   - Free fake API for testing and prototyping
   - Supports GET, POST, PUT, DELETE operations
   - No authentication required

2. **HTTPBin** (`https://httpbin.org`)
   - HTTP request & response service
   - Useful for testing various HTTP scenarios

## 📝 Examples by Use Case

### 1. Basic CRUD Operations

**Create (POST):**
```python
# Python
new_user = {"name": "John Doe", "email": "john@example.com"}
response = client.post_request_requests('/users', new_user)
```

```javascript
// JavaScript
const newUser = { name: 'John Doe', email: 'john@example.com' };
const response = await client.postRequest('/users', newUser);
```

**Read (GET):**
```python
# Python
users = client.get_request_requests('/users')
user = client.get_request_requests('/users/1')
```

```javascript
// JavaScript
const users = await client.getRequest('/users');
const user = await client.getRequest('/users/1');
```

**Update (PUT):**
```python
# Python
updated_user = {"id": 1, "name": "Jane Doe", "email": "jane@example.com"}
response = client.session.put(f"{client.base_url}/users/1", json=updated_user)
```

```javascript
// JavaScript
const updatedUser = { id: 1, name: 'Jane Doe', email: 'jane@example.com' };
const response = await client.putRequest('/users/1', updatedUser);
```

**Delete:**
```python
# Python
response = client.session.delete(f"{client.base_url}/users/1")
```

```javascript
// JavaScript
const response = await client.deleteRequest('/users/1');
```

### 2. Query Parameters

```python
# Python
posts = client.get_request_requests('/posts', params={
    'userId': 1,
    '_limit': 5,
    '_sort': 'id',
    '_order': 'desc'
})
```

```javascript
// JavaScript
const posts = await client.getRequest('/posts', {
    userId: 1,
    _limit: 5,
    _sort: 'id',
    _order: 'desc'
});
```

### 3. Pagination

```python
# Python
page = 1
limit = 10
posts = client.get_request_requests('/posts', params={
    '_page': page,
    '_limit': limit
})
```

```javascript
// JavaScript
const page = 1;
const limit = 10;
const posts = await client.getRequest('/posts', {
    _page: page,
    _limit: limit
});
```

## 🛠️ Troubleshooting

### Common Issues

1. **Connection Timeout**
   - Increase timeout value in client constructor
   - Check network connectivity

2. **Authentication Errors**
   - Verify API keys and tokens
   - Check header format (Bearer token, etc.)

3. **CORS Issues (Browser)**
   - Use CORS proxy for development
   - Ensure server allows your domain

4. **JSON Parsing Errors**
   - Verify response format
   - Handle non-JSON responses

### Debug Tips

1. **Enable logging:**
   ```python
   import logging
   logging.basicConfig(level=logging.DEBUG)
   ```

2. **Check response details:**
   ```python
   response = client.session.get(url)
   print(f"Status: {response.status_code}")
   print(f"Headers: {response.headers}")
   print(f"Content: {response.text}")
   ```

## 📖 Additional Resources

- [HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [REST API Best Practices](https://restfulapi.net/)
- [JSONPlaceholder Documentation](https://jsonplaceholder.typicode.com/)
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Python Requests Documentation](https://requests.readthedocs.io/)

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve these examples.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
