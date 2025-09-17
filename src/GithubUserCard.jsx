import React from 'react';
import styles from './index.css';
export default function GithubUserCard({ user }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: 20,
        borderRadius: 8,
        maxWidth: 400,
        marginTop: 20,
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: 100, borderRadius: '50%' }}
      />
      <h3>{user.name || user.login}</h3>
      <p>{user.bio || 'No bio available'}</p>
      <p>Location: {user.location || 'Unknown'}</p>
      <p>Followers: {user.followers}</p>
      <p>Public Repos: {user.public_repos}</p>
    </div>
  );
}