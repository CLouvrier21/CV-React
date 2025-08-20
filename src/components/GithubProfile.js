import { useState, useEffect } from "react";

function GithubProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);

  if (!profile) return <p>Chargement...</p>;

  return (
    <div className="text-center">
      <img src={profile.avatar_url} alt="avatar" width="120" className="rounded-circle"/>
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      <a href={profile.html_url} target="_blank" rel="noreferrer">Voir GitHub</a>
    </div>
  );
}

export default GithubProfile;
