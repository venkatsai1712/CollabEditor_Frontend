import { useState } from "react";
import "./App.css";

function App() {

    const [showModal, setShowModal] = useState(false);
    const [fileName, setFileName] = useState("");
    const [files, setFiles] = useState([]);

    const openNewFile = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setFileName("");
    };

    const createFile = () => {

        if (fileName.trim() === "") {
            alert("Please enter a file name");
            return;
        }

        const newFile = {
            id: Date.now(),
            name: fileName
        };

        setFiles([...files, newFile]);

        closeModal();
    };

    const deleteFile = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this file?"
        );

        if (!confirmDelete) {
            return;
        }

        setFiles(files.filter((file) => file.id !== id));
    };

    return (
        <div className="dashboard">

            {/* NAVBAR */}
            <nav className="navbar">

                <div className="logo">
                    <div className="logo-icon">C</div>
                    <span>CollabEditor</span>
                </div>

                <div className="nav-right">

                    <button className="login-btn">
                        Login
                    </button>

                    <button className="signup-btn">
                        Sign Up
                    </button>

                    <div className="profile">

                        <div className="profile-pic">
                            T
                        </div>

                        <span className="profile-name">
                            Tanshita
                        </span>

                    </div>

                </div>

            </nav>


            {/* MAIN */}
            <main className="main-content">

                {/* WELCOME */}
                <div className="welcome-section">

                    <h1>
                        Welcome to CollabEditor 👋
                    </h1>

                    <p>
                        Create, edit and collaborate on documents in real time.
                    </p>

                    <button
                        className="new-project-btn"
                        onClick={openNewFile}
                    >
                        + Create New File
                    </button>

                </div>


                {/* FILES */}
                {files.length > 0 && (

                    <div className="files-section">

                        <h2>Your Files</h2>

                        <div className="files-list">

                            {files.map((file) => (

                                <div
                                    className="file-card"
                                    key={file.id}
                                >

                                    {/* FILE ICON */}
                                    <div className="file-icon">
                                        📄
                                    </div>


                                    {/* FILE INFORMATION */}
                                    <div className="file-details">

                                        <h3>
                                            {file.name}
                                        </h3>

                                        <p>
                                            Created just now
                                        </p>

                                    </div>


                                    {/* FILE BUTTONS */}
                                    <div className="file-actions">

                                        <button
                                            className="open-file-btn"
                                            onClick={() =>
                                                alert(`Opening ${file.name}`)
                                            }
                                        >
                                            Open
                                        </button>

                                        <button
                                            className="delete-file-btn"
                                            onClick={() =>
                                                deleteFile(file.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                )}


                {/* CREATE CARD */}
                <div className="create-card">

                    <div className="create-icon">
                        +
                    </div>

                    <h2>
                        Start a New File
                    </h2>

                    <p>
                        Create a collaborative workspace and start
                        working with your team.
                    </p>

                    <button
                        className="new-project-btn"
                        onClick={openNewFile}
                    >
                        + New File
                    </button>

                </div>

            </main>


            {/* NEW FILE MODAL */}
            {showModal && (

                <div className="modal-overlay">

                    <div className="modal">

                        <h2>
                            Create New File
                        </h2>

                        <p>
                            Enter a name for your new file.
                        </p>

                        <input
                            type="text"
                            placeholder="Enter file name"
                            value={fileName}
                            onChange={(e) =>
                                setFileName(e.target.value)
                            }
                            autoFocus
                        />

                        <div className="modal-buttons">

                            <button
                                className="cancel-btn"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>

                            <button
                                className="create-btn"
                                onClick={createFile}
                            >
                                Create File
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>
    );
}

export default App;