import React from 'react';

const BASE_URL = 'http://127.0.0.1:8000/api';

export async function updateFirstName(id, firstName) {
  const response = await fetch(`${BASE_URL}/ninjas/${id}/first-name/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName }),
  });

  if (!response.ok) {
    throw new Error('Failed to update first name');
  }

  return await response.json();
}

export async function updateLastName(id, lastName) {
  const response = await fetch(`${BASE_URL}/ninjas/${id}/last-name/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ lastName }),
  });

  if (!response.ok) {
    throw new Error('Failed to update last name');
  }

  return await response.json();
}

export async function updateUsername(id, username) {
  const response = await fetch(`${BASE_URL}/ninjas/${id}/username/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username }),
  });

  if (!response.ok) {
    throw new Error('Failed to update username');
  }

  return await response.json();
}