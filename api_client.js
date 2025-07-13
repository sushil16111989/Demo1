/**
 * REST API Client Examples
 * Comprehensive examples for sending POST and GET requests using different JavaScript approaches.
 */

// Using fetch (modern browsers and Node.js 18+)
class APIClient {
    /**
     * A comprehensive REST API client class with examples for GET and POST requests.
     * 
     * This class demonstrates different approaches to making HTTP requests:
     * - Using fetch API (modern)
     * - Using XMLHttpRequest (legacy)
     * - Error handling and response processing
     */
    
    constructor(baseURL = 'https://api.example.com', timeout = 30000) {
        this.baseURL = baseURL.replace(/\/$/, '');
        this.timeout = timeout;
        
        // Common headers
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            'User-Agent': 'APIClient/1.0'
        };
    }
    
    /**
     * Send a GET request using fetch API
     * @param {string} endpoint - API endpoint (e.g., '/users')
     * @param {Object} params - Query parameters
     * @param {Object} headers - Additional headers
     * @returns {Promise<Object>} Response data
     */
    async getRequest(endpoint, params = {}, headers = {}) {
        const url = new URL(`${this.baseURL}${endpoint}`);
        
        // Add query parameters
        Object.keys(params).forEach(key => {
            url.searchParams.append(key, params[key]);
        });
        
        const requestHeaders = { ...this.defaultHeaders, ...headers };
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.timeout);
            
            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: requestHeaders,
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
            
        } catch (error) {
            console.error('GET request failed:', error);
            throw error;
        }
    }
    
    /**
     * Send a POST request using fetch API
     * @param {string} endpoint - API endpoint (e.g., '/users')
     * @param {Object} data - Data to send in the request body
     * @param {Object} headers - Additional headers
     * @returns {Promise<Object>} Response data
     */
    async postRequest(endpoint, data = {}, headers = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const requestHeaders = { ...this.defaultHeaders, ...headers };
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.timeout);
            
            const response = await fetch(url, {
                method: 'POST',
                headers: requestHeaders,
                body: JSON.stringify(data),
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
            
        } catch (error) {
            console.error('POST request failed:', error);
            throw error;
        }
    }
    
    /**
     * Send a GET request using XMLHttpRequest (legacy approach)
     * @param {string} endpoint - API endpoint
     * @param {Object} params - Query parameters
     * @returns {Promise<Object>} Response data
     */
    getRequestXHR(endpoint, params = {}) {
        return new Promise((resolve, reject) => {
            const url = new URL(`${this.baseURL}${endpoint}`);
            
            // Add query parameters
            Object.keys(params).forEach(key => {
                url.searchParams.append(key, params[key]);
            });
            
            const xhr = new XMLHttpRequest();
            
            xhr.open('GET', url.toString(), true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            
            xhr.timeout = this.timeout;
            
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const data = JSON.parse(xhr.responseText);
                        resolve(data);
                    } catch (error) {
                        reject(new Error('Invalid JSON response'));
                    }
                } else {
                    reject(new Error(`HTTP error! status: ${xhr.status}`));
                }
            };
            
            xhr.onerror = function() {
                reject(new Error('Network error'));
            };
            
            xhr.ontimeout = function() {
                reject(new Error('Request timeout'));
            };
            
            xhr.send();
        });
    }
    
    /**
     * Send a POST request using XMLHttpRequest (legacy approach)
     * @param {string} endpoint - API endpoint
     * @param {Object} data - Data to send
     * @returns {Promise<Object>} Response data
     */
    postRequestXHR(endpoint, data = {}) {
        return new Promise((resolve, reject) => {
            const url = `${this.baseURL}${endpoint}`;
            const xhr = new XMLHttpRequest();
            
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            
            xhr.timeout = this.timeout;
            
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const responseData = JSON.parse(xhr.responseText);
                        resolve(responseData);
                    } catch (error) {
                        reject(new Error('Invalid JSON response'));
                    }
                } else {
                    reject(new Error(`HTTP error! status: ${xhr.status}`));
                }
            };
            
            xhr.onerror = function() {
                reject(new Error('Network error'));
            };
            
            xhr.ontimeout = function() {
                reject(new Error('Request timeout'));
            };
            
            xhr.send(JSON.stringify(data));
        });
    }
    
    /**
     * Upload file using FormData
     * @param {string} endpoint - API endpoint
     * @param {File} file - File to upload
     * @param {Object} additionalData - Additional form data
     * @returns {Promise<Object>} Response data
     */
    async uploadFile(endpoint, file, additionalData = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const formData = new FormData();
        
        formData.append('file', file);
        
        // Add additional data
        Object.keys(additionalData).forEach(key => {
            formData.append(key, additionalData[key]);
        });
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.timeout);
            
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
                signal: controller.signal
                // Note: Don't set Content-Type header for FormData
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
            
        } catch (error) {
            console.error('File upload failed:', error);
            throw error;
        }
    }
}

// Example usage functions
async function exampleGetRequests() {
    console.log('=== GET Request Examples ===');
    
    const client = new APIClient('https://jsonplaceholder.typicode.com');
    
    try {
        // Simple GET request
        const users = await client.getRequest('/users');
        console.log(`Retrieved ${users.length} users`);
        
        // GET request with parameters
        const posts = await client.getRequest('/posts', { userId: 1 });
        console.log(`Retrieved ${posts.length} posts for user 1`);
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function examplePostRequests() {
    console.log('\n=== POST Request Examples ===');
    
    const client = new APIClient('https://jsonplaceholder.typicode.com');
    
    const newPost = {
        title: 'Test Post',
        body: 'This is a test post',
        userId: 1
    };
    
    try {
        const response = await client.postRequest('/posts', newPost);
        console.log(`Created post with ID: ${response.id}`);
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function exampleWithAuthentication() {
    console.log('\n=== Authentication Example ===');
    
    const client = new APIClient('https://api.example.com');
    
    const headers = {
        'Authorization': 'Bearer your_token_here',
        'X-API-Key': 'your_api_key_here'
    };
    
    try {
        const data = await client.getRequest('/protected-endpoint', {}, headers);
        console.log('Authenticated request successful');
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function exampleFileUpload() {
    console.log('\n=== File Upload Example ===');
    
    const client = new APIClient('https://api.example.com');
    
    // In a real browser environment, you would get the file from an input element
    // const fileInput = document.getElementById('fileInput');
    // const file = fileInput.files[0];
    
    // For demonstration, we'll show the structure
    console.log('File upload structure (requires actual file in browser environment):');
    console.log('const file = fileInput.files[0];');
    console.log('await client.uploadFile("/upload", file, { description: "Uploaded file" });');
}

// Node.js specific examples (if running in Node.js environment)
async function nodeJSExamples() {
    console.log('\n=== Node.js Specific Examples ===');
    
    // Using node-fetch (if installed)
    try {
        const fetch = (await import('node-fetch')).default;
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log(`Node.js fetch: Retrieved ${users.length} users`);
        
    } catch (error) {
        console.log('node-fetch not available or error occurred');
    }
    
    // Using axios (if installed)
    try {
        const axios = (await import('axios')).default;
        
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(`Axios: Retrieved ${response.data.length} users`);
        
    } catch (error) {
        console.log('axios not available or error occurred');
    }
}

// Run examples
async function runExamples() {
    console.log('REST API Client Examples\n');
    
    await exampleGetRequests();
    await examplePostRequests();
    await exampleWithAuthentication();
    await exampleFileUpload();
    
    // Check if we're in Node.js environment
    if (typeof window === 'undefined') {
        await nodeJSExamples();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { APIClient, runExamples };
}

// Run examples if this file is executed directly
if (typeof window !== 'undefined' || require.main === module) {
    runExamples().catch(console.error);
}