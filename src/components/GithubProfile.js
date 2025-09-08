import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

export default function GitHubProfile({ username = "github-john-doe" }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (!profile) {
    return <p>Impossible de charger le profil.</p>;
  }

  return (
    <Card className="my-4">
      <Card.Body className="text-center">
        <img
          src={profile.avatar_url}
          alt={profile.login}
          className="rounded-circle mb-3"
          width="120"
          height="120"
        />
        <Card.Title>{profile.name || profile.login}</Card.Title>
        <Card.Text>{profile.bio}</Card.Text>
        <p>
          <strong>Followers:</strong> {profile.followers} |{" "}
          <strong>Following:</strong> {profile.following}
        </p>
        <a
          href={profile.html_url}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-primary"
        >
          Voir le profil GitHub
        </a>
      </Card.Body>
    </Card>
  );
}
