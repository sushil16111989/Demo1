#!/usr/bin/env python3
"""
REST API Client Examples
Comprehensive examples for sending POST and GET requests using different Python libraries.
"""

import requests
import json
import urllib.request
import urllib.parse
from typing import Dict, Any, Optional


class APIClient:
    """
    A comprehensive REST API client class with examples for GET and POST requests.
    
    This class demonstrates different approaches to making HTTP requests:
    - Using requests library (recommended)
    - Using urllib (built-in)
    - Error handling and response processing
    """
    
    def __init__(self, base_url: str = "https://api.example.com", timeout: int = 30):
        """
        Initialize the API client.
        
        Args:
            base_url (str): Base URL for the API
            timeout (int): Request timeout in seconds
        """
        self.base_url = base_url.rstrip('/')
        self.timeout = timeout
        self.session = requests.Session()
        
        # Common headers
        self.default_headers = {
            'Content-Type': 'application/json',
            'User-Agent': 'APIClient/1.0'
        }
    
    def get_request_requests(self, endpoint: str, params: Optional[Dict] = None, 
                           headers: Optional[Dict] = None) -> Dict[str, Any]:
        """
        Send a GET request using the requests library.
        
        Args:
            endpoint (str): API endpoint (e.g., '/users')
            params (dict, optional): Query parameters
            headers (dict, optional): Additional headers
            
        Returns:
            dict: Response data
            
        Raises:
            requests.RequestException: If the request fails
        """
        url = f"{self.base_url}{endpoint}"
        request_headers = {**self.default_headers, **(headers or {})}
        
        try:
            response = self.session.get(
                url,
                params=params,
                headers=request_headers,
                timeout=self.timeout
            )
            response.raise_for_status()
            return response.json()
            
        except requests.exceptions.RequestException as e:
            print(f"GET request failed: {e}")
            raise
    
    def post_request_requests(self, endpoint: str, data: Dict[str, Any], 
                            headers: Optional[Dict] = None) -> Dict[str, Any]:
        """
        Send a POST request using the requests library.
        
        Args:
            endpoint (str): API endpoint (e.g., '/users')
            data (dict): Data to send in the request body
            headers (dict, optional): Additional headers
            
        Returns:
            dict: Response data
            
        Raises:
            requests.RequestException: If the request fails
        """
        url = f"{self.base_url}{endpoint}"
        request_headers = {**self.default_headers, **(headers or {})}
        
        try:
            response = self.session.post(
                url,
                json=data,
                headers=request_headers,
                timeout=self.timeout
            )
            response.raise_for_status()
            return response.json()
            
        except requests.exceptions.RequestException as e:
            print(f"POST request failed: {e}")
            raise
    
    def get_request_urllib(self, endpoint: str, params: Optional[Dict] = None) -> Dict[str, Any]:
        """
        Send a GET request using urllib (built-in library).
        
        Args:
            endpoint (str): API endpoint
            params (dict, optional): Query parameters
            
        Returns:
            dict: Response data
        """
        url = f"{self.base_url}{endpoint}"
        
        if params:
            query_string = urllib.parse.urlencode(params)
            url = f"{url}?{query_string}"
        
        try:
            with urllib.request.urlopen(url, timeout=self.timeout) as response:
                data = response.read()
                return json.loads(data.decode('utf-8'))
                
        except Exception as e:
            print(f"GET request failed: {e}")
            raise
    
    def post_request_urllib(self, endpoint: str, data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Send a POST request using urllib (built-in library).
        
        Args:
            endpoint (str): API endpoint
            data (dict): Data to send
            
        Returns:
            dict: Response data
        """
        url = f"{self.base_url}{endpoint}"
        json_data = json.dumps(data).encode('utf-8')
        
        request = urllib.request.Request(
            url,
            data=json_data,
            headers={'Content-Type': 'application/json'},
            method='POST'
        )
        
        try:
            with urllib.request.urlopen(request, timeout=self.timeout) as response:
                data = response.read()
                return json.loads(data.decode('utf-8'))
                
        except Exception as e:
            print(f"POST request failed: {e}")
            raise


# Example usage functions
def example_get_requests():
    """Example of using requests library for GET requests."""
    client = APIClient("https://jsonplaceholder.typicode.com")
    
    # Simple GET request
    try:
        users = client.get_request_requests('/users')
        print(f"Retrieved {len(users)} users")
        
        # GET request with parameters
        posts = client.get_request_requests('/posts', params={'userId': 1})
        print(f"Retrieved {len(posts)} posts for user 1")
        
    except Exception as e:
        print(f"Error: {e}")


def example_post_requests():
    """Example of using requests library for POST requests."""
    client = APIClient("https://jsonplaceholder.typicode.com")
    
    # POST request with data
    new_post = {
        "title": "Test Post",
        "body": "This is a test post",
        "userId": 1
    }
    
    try:
        response = client.post_request_requests('/posts', new_post)
        print(f"Created post with ID: {response.get('id')}")
        
    except Exception as e:
        print(f"Error: {e}")


def example_with_authentication():
    """Example with authentication headers."""
    client = APIClient("https://api.example.com")
    
    # Add authentication header
    headers = {
        'Authorization': 'Bearer your_token_here',
        'X-API-Key': 'your_api_key_here'
    }
    
    try:
        # Authenticated GET request
        data = client.get_request_requests('/protected-endpoint', headers=headers)
        print("Authenticated request successful")
        
    except Exception as e:
        print(f"Error: {e}")


def example_file_upload():
    """Example of uploading files with POST request."""
    client = APIClient("https://api.example.com")
    
    # For file uploads, you would use files parameter
    files = {
        'file': ('filename.txt', open('filename.txt', 'rb'), 'text/plain')
    }
    
    data = {
        'description': 'Uploaded file'
    }
    
    try:
        response = client.session.post(
            f"{client.base_url}/upload",
            files=files,
            data=data,
            timeout=client.timeout
        )
        response.raise_for_status()
        print("File uploaded successfully")
        
    except Exception as e:
        print(f"Upload failed: {e}")


if __name__ == "__main__":
    print("=== REST API Client Examples ===\n")
    
    print("1. GET Request Example:")
    example_get_requests()
    print()
    
    print("2. POST Request Example:")
    example_post_requests()
    print()
    
    print("3. Authentication Example:")
    example_with_authentication()
    print()
    
    print("4. File Upload Example:")
    example_file_upload()