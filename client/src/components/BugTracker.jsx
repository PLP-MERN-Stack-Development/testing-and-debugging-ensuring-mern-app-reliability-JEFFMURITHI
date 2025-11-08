import { useState } from "react";
import { Button } from "@/components/ui/button";

function BugTracker() {
  const [bugs, setBugs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newBug = { id: Date.now(), title, description, priority };
    setBugs([...bugs, newBug]);

    setTitle("");
    setDescription("");
    setPriority("Low");
  };

  const startEdit = (id, currentTitle) => {
    setEditingId(id);
    setEditTitle(currentTitle);
  };

  const saveEdit = (id) => {
    setBugs(
      bugs.map((bug) =>
        bug.id === id ? { ...bug, title: editTitle } : bug
      )
    );
    setEditingId(null);
    setEditTitle("");
  };

  const deleteBug = (id) => {
    setBugs(bugs.filter((bug) => bug.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Bug Tracker</h2>

      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          name="title"
          type="text"
          placeholder="Bug title"
          className="border border-gray-300 rounded-lg p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          name="description"
          placeholder="Bug description"
          className="border border-gray-300 rounded-lg p-2 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <select
          name="priority"
          className="border border-gray-300 rounded-lg p-2 w-full"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <Button type="submit" className="w-full">
          Add Bug
        </Button>
      </form>

      {bugs.length === 0 ? (
        <p className="text-gray-500">No bugs added yet.</p>
      ) : (
        <ul className="space-y-2">
          {bugs.map((bug) => (
            <li
              key={bug.id}
              className="border border-gray-300 rounded-lg p-3 flex justify-between items-center"
            >
              <div>
                {editingId === bug.id ? (
                  <input
                    data-cy="edit-input"
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="border rounded p-1"
                  />
                ) : (
                  <strong>{bug.title}</strong>
                )}
                <p className="text-sm text-gray-600">
                  {bug.description} - <span>{bug.priority}</span>
                </p>
              </div>

              <div className="space-x-2">
                {editingId === bug.id ? (
                  <Button
                    data-cy="save-btn"
                    size="sm"
                    onClick={() => saveEdit(bug.id)}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    data-cy="edit-btn"
                    variant="outline"
                    size="sm"
                    onClick={() => startEdit(bug.id, bug.title)}
                  >
                    Edit
                  </Button>
                )}

                <Button
                  data-cy="delete-btn"
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteBug(bug.id)}
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BugTracker;
