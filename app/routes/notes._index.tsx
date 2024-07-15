import { Link } from "~/components/ui/link";

export default function NoteIndexPage() {
  return (
    <p>
      No note selected. Select a note on the left, or{" "}
      <Link to="new">create a new note.</Link>
    </p>
  );
}
