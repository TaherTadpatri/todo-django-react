import React from "react";
import Status from "./Components/StatusDropdown";
import Priority from "./Components/PriorityDropdown";
import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const [tableData, setTableData] = useState();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    task_name: "",
    priority: "Low",
    start_date: "",
    end_date: "",
    status: "Open",
    description: "",
    user_id: "",
  });

  useEffect(() => {
    const fetchdata = async () => {
      setError("");
      setloading(true);
      let token = localStorage.getItem("token");
      try {
        const response = await fetch("http://127.0.0.1:8000/api/task/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setTableData(data);
        } else {
          setError("Error fetching ");
        }
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
        setError("Error occurred while fetching  in");
      } finally {
        setloading(false);
      }
    };
    fetchdata();
  }, []);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    console.log(status);
  };

  const handlePriorityChange = (priority) => {
    setSelectedPriority(priority);
    console.log(priority);
  };
  const handleCreateClick = () => {
    setShowCreateModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateModal(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    let token = localStorage.getItem("token");
    let userid = localStorage.getItem("userId");
    console.log(localStorage.getItem("userId"));
    setFormData((prevState) => ({
      ...prevState,
      user_id: userid,
    }));
    console.log(formData);
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/task/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Task added successfully");

        setFormData({
          taskName: "",
          priority: "Low",
          startDate: "",
          endDate: "",
          status: "Open",
          description: "",
        });
      } else {
        console.error("Error submitting task:", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  const handleEdit =async(e) =>{ 
    let token = localStorage.getItem("token");
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/task/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {

      } else {
        console.error("Error submitting task:", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }
  const handleDelete = () =>{
    alert('delete')
  }
  return (
    <>
      <div className="container">
        <div className="menu form-container">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
        </div>
        <Status onDropdownChange={handleStatusChange} />
        <Priority onDropdownChange={handlePriorityChange} />
        <button
          className="btn btn-primary"
          style={{}}
          onClick={() => handlesearch()}
        >
          Search
        </button>
        <button className="btn btn-primary" onClick={handleCreateClick}>
          Create
        </button>
      </div>
      {showCreateModal && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="taskName" className="form-label">
              Task Name
            </label>
            <input
              type="text"
              className="form-control"
              id="taskName"
              name="task_name"
              value={formData.task_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="priority" className="form-label">
              Priority
            </label>
            <select
              className="form-select"
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="start_date" className="form-label">
              Start Date
            </label>
            <input
              type="date"
              className="form-control"
              id="start_date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="end_date" className="form-label">
              End Date
            </label>
            <input
              type="date"
              className="form-control"
              id="end_date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              className="form-select"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCloseModal}
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      )}

      {tableData && (
        <div className="table-container">
          <h2>Todo</h2>
          <table>
            <thead>
              <tr>
                <th>Sr no</th>
                <th>Task Name</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Settings</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((task, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{task.task_name}</td>
                  <td>{task.description}</td>
                  <td>{task.priority}</td>
                  <td>{task.status}</td>
                  <td>{task.start_date}</td>
                  <td>{task.end_date}</td>
                  <td>
                    {/* Edit button */}
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    {/* Delete button */}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Home;
