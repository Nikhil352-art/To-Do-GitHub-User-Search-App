import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGithubUser, clearUser } from './githubSlice';

export default function GithubSearch() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(state => state.github);

  const handleSearch = () => {
    if (!input.trim()) {
      dispatch(clearUser());
      return;
    }
    dispatch(fetchGithubUser(input.trim()));
  };

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div style={{ border: '1px solid #ccc', marginTop: '1rem', padding: '1rem' }}>
          <img src={user.avatar_url} alt="Avatar" width={80} />
          <h3>{user.name || user.login}</h3>
          <p>{user.bio}</p>
          <p>Location: {user.location || "N/A"}</p>
          <p>Followers: {user.followers}</p>
          <p>Public Repos: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
}