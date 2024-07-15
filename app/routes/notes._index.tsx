import { LinkButton } from "~/components/ui/link-button";

export default function NoteIndexPage() {
  return (
    <p>
      No note selected. Select a note on the left, or{" "}
      <LinkButton to="new">create a new note.</LinkButton>
    </p>
  );
}
