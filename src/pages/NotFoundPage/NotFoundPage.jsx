import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <p>
      Page is not exist! Please back to <Link to="/">home page</Link>!
    </p>
  );
}